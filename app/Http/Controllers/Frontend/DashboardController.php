<?php

namespace App\Http\Controllers\Frontend;

use Log;
use Carbon\Carbon;
use App\Models\News;
use Inertia\Inertia;
use App\Models\Status;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $aiPolicyTracker = AiPolicyTracker::query()
            ->with(['country', 'status'])
            ->latest();

        $data['tableData'] = $aiPolicyTracker
            ->paginate(10);

        $data['news'] = News::query()
            ->with(['thumbnail', 'status'])
            ->latest()
            ->get();

        $latestNews = News::query()
            ->latest()->first();
        $data['newsLastUpdate'] = $latestNews ? Carbon::parse($latestNews->updated_at)->format('F Y') : '';

        $latestAiPolicy = $aiPolicyTracker->first();
        $data['aiPolicyLastUpdate'] = $latestAiPolicy ? Carbon::parse($latestAiPolicy->updated_at)->format('F Y') : '';

        //-- Ai Policy tracker country with status and Link
        $data['aiPolicyTrackerWithStatus'] = $aiPolicyTracker
            ->get();

        $URL_MAP = [];
        $STATUS_MAP = [];
        foreach ($data['aiPolicyTrackerWithStatus'] as $tracker) {
            $countrySymbol = $tracker->country->symbol;
            $URL_MAP[$countrySymbol] = $tracker->whitepaper_document_link;
            $STATUS_MAP[$countrySymbol] = $tracker->status->name;
        }
        $data['countrywithStatus'] = $STATUS_MAP;


        //-- get individual country
        $data['countrywiseAiPolicyTracker'] = Country::query()
            ->withWhereHas('aiPolicyTrackers')
            ->latest()
            ->get();

        $COUNTRY_WITH_AIPOLICYTRACKER_MAP = [];
        foreach ($data['countrywiseAiPolicyTracker'] as $country) {
            $countrySymbol = $country->symbol;
            foreach ($country->aiPolicyTrackers as $tracker) {
                $COUNTRY_WITH_AIPOLICYTRACKER_MAP[$countrySymbol][] = [
                    'name' => $tracker->ai_policy_name,
                    'url' => route('frontend.single_ai_policy_tracker.index', $tracker->id),
                ];
            }
        }
        $data['countryWithAiPolicies'] = $COUNTRY_WITH_AIPOLICYTRACKER_MAP;

        //-- End Ai Policy tracker country with status
        $data['aiPolicies'] = AiPolicyTracker::select('id as value', 'ai_policy_name as label')->get();

        $data['countries'] = Country::select('id as value', 'name as label')->get();

        $data['statuses'] = Status::select('id as value', 'name as label')->get();

        // dd($data['news']);
        return Inertia::render('Frontend/Dashboard/Dashboard', $data);
    }

    public function getFilteredData(Request $request)
    {
        $query = AiPolicyTracker::query();

        // Apply filters based on the request parameters
        if ($request->has('AI_Policy_Name') && !empty($request->AI_Policy_Name)) {
            $aiPolicyIds = explode(',', $request->AI_Policy_Name);
            $query->whereIn('id', $aiPolicyIds);
        }

        if ($request->has('country_id') && !empty($request->country_id)) {
            $countryIds = explode(',', $request->country_id);
            $query->whereIn('country_id', $countryIds);
        }

        if ($request->has('status_id') && !empty($request->status_id)) {
            $statusIds = explode(',', $request->status_id);
            $query->whereIn('status_id', $statusIds);
        }

        if ($request->has('announcement_year') && !empty($request->announcement_year)) {
            $query->where('announcement_year', $request->announcement_year);
        }

        // Apply pagination
        $perPage = $request->get('per_page', 15); // Default to 15 items per page if not provided
        $filteredData = $query->paginate($perPage);

        // Format the data as needed
        $tableData = $filteredData->getCollection()->map(function ($policy) {
            return [
                'id' => $policy->id,
                'ai_policy_name' => $policy->ai_policy_name,
                'country' => $policy->country,
                'governing_body' => $policy->governing_body,
                'formatted_created_at' => \Carbon\Carbon::parse($policy->announcement_date)->format('M d, Y'),
                'status' => $policy->status,
                'technology_partners' => $policy->technology_partners,
                'governance_structure' => $policy->governance_structure,
                'main_motivation' => $policy->main_motivation,
                'description' => $policy->description,
            ];
        });

        // Return the filtered and paginated data as JSON
        return response()->json([
            'current_page' => $filteredData->currentPage(),
            'data' => $tableData,
            'first_page_url' => $filteredData->url(1),
            'last_page' => $filteredData->lastPage(),
            'last_page_url' => $filteredData->url($filteredData->lastPage()),
            'next_page_url' => $filteredData->nextPageUrl(),
            'path' => $filteredData->path(),
            'per_page' => $filteredData->perPage(),
            'prev_page_url' => $filteredData->previousPageUrl(),
            'to' => $filteredData->lastItem(),
            'total' => $filteredData->total(),
        ]);
    }


    // In your Controller
    public function updateStatus(Request $request)
    {
        // Retrieve the status_state input
        $statusIds = $request->input('status_state');

        // Convert $statusIds to an array if it's a string
        if (is_string($statusIds)) {
            $statusIds = explode(',', $statusIds);
        }

        // Ensure $statusIds is an array and not empty
        if (is_array($statusIds) && count($statusIds) > 0) {
            //-- Ai Policy tracker country with status and Link
            $data['aiPolicyTrackerWithStatus'] = AiPolicyTracker::whereIn('status_id', $statusIds)->with(['country', 'status'])->get();
            $URL_MAP = [];
            $STATUS_MAP = [];
            foreach ($data['aiPolicyTrackerWithStatus'] as $tracker) {
                $countrySymbol = $tracker->country->symbol;
                $URL_MAP[$countrySymbol] = $tracker->whitepaper_document_link;
                $STATUS_MAP[$countrySymbol] = $tracker->status->name;
            }
            $data['countrywithStatus'] = $STATUS_MAP;

            return response()->json($data['countrywithStatus']);
        } else {
            // Handle the case where $statusIds is not valid
            return response()->json(['error' => 'Invalid status IDs'], 400);
        }
    }

}
