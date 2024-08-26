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
        $data['tableData'] = AiPolicyTracker::with(['country', 'status'])
            ->paginate(10);

        $data['news'] = News::with(['thumbnail', 'status'])
            ->orderBy('created_at', 'DESC')
            ->paginate(15);

        $latestNews = News::orderBy('updated_at', 'DESC')->first();
        $data['newsLastUpdate'] = Carbon::parse($latestNews->updated_at)->format('F Y');

        $latestAiPolicy = AiPolicyTracker::orderBy('updated_at', 'DESC')->first();
        $data['aiPolicyLastUpdate'] = Carbon::parse($latestAiPolicy->updated_at)->format('F Y');


        //-- Ai Policy tracker country with status and Link
        $data['aiPolicyTrackerWithStatus'] = AiPolicyTracker::with(['country', 'status'])->get();
        $URL_MAP = [];
        $STATUS_MAP = [];
        foreach ($data['aiPolicyTrackerWithStatus'] as $tracker) {
            $countrySymbol = $tracker->country->symbol;
            $URL_MAP[$countrySymbol] = $tracker->whitepaper_document_link;
            $STATUS_MAP[$countrySymbol] = $tracker->status->name;
        }

        $data['countrywithStatus'] = $STATUS_MAP;
        $data['countrywithMap'] = $URL_MAP;
        //-- End Ai Policy tracker country with status

        $data['aiPolicies'] = AiPolicyTracker::get()
            ->map(function ($aiPolicy) {
                return [
                    'value' => $aiPolicy->id,
                    'label' => $aiPolicy->ai_policy_name,
                ];
            });

        $data['countries'] = Country::get()
            ->map(function ($country) {
                return [
                    'value' => $country->id,
                    'label' => $country->name,
                ];
            });

        $data['statuses'] = Status::get()
            ->map(function ($status) {
                return [
                    'value' => $status->id,
                    'label' => $status->name,
                ];
            });

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
}
