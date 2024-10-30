<?php

namespace App\Http\Controllers\Frontend;

use App\Models\BookMark;
use App\Models\District;
use App\Models\LocalGovernment;
use App\Models\Province;
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
        $lgs = LocalGovernment::with('district.province')
            ->latest();

        $data['tableData'] = $lgs
            ->paginate(10);

        // $aiPolicyTracker = AiPolicyTracker::with(['country', 'status', 'bookmark'])
        //     ->latest();

        $data['authUserBookmarkCount'] = BookMark::authUserBookmarkCount();


        $data['news'] = News::query()
            ->with(['thumbnail', 'status'])
            ->latest()
            ->get();

        $latestNews = News::query()
            ->latest()->first();
        $data['newsLastUpdate'] = $latestNews ? Carbon::parse($latestNews->updated_at)->format('d M Y') : '';

        $latestAiPolicy = $lgs->first();
        $data['aiPolicyLastUpdate'] = $latestAiPolicy ? Carbon::parse($latestAiPolicy->updated_at)->format('d M Y') : '';

        //-- Ai Policy tracker country with status and Link
        $data['aiPolicyTrackerWithStatus'] = AiPolicyTracker::query()
            ->get();

        // $URL_MAP = [];
        // $STATUS_MAP = [];
        // foreach ($data['aiPolicyTrackerWithStatus'] as $tracker) {
        //     $countrySymbol = null;
        //     if ($tracker->country->status == 1) {
        //         $countrySymbol = $tracker->country->symbol;
        //     }
        //     $URL_MAP[$countrySymbol] = $tracker->whitepaper_document_link;
        //     $STATUS_MAP[$countrySymbol] = $tracker->status->name;
        // }
        // $data['countrywithStatus'] = $STATUS_MAP;

        //-- get individual country
        // $data['countrywiseAiPolicyTracker'] = Country::where('status', 1)
        //     ->withWhereHas('aiPolicyTrackers')
        //     ->latest()
        //     ->get();

        // $countryWithAiPolicyTrackerMap = [];
        // foreach ($data['countrywiseAiPolicyTracker'] as $country) {
        //     $countrySymbol = $country->symbol;
        //     foreach ($country->aiPolicyTrackers as $tracker) {
        //         $countryWithAiPolicyTrackerMap[$countrySymbol][] = [
        //             'name' => $tracker->ai_policy_name,
        //             'url' => route('frontend.single_ai_policy_tracker.index', $tracker->id),
        //         ];
        //     }
        // }
        // $data['countryWithAiPolicies'] = $countryWithAiPolicyTrackerMap;

        //-- End Ai Policy tracker country with status
        $data['lgs'] = LocalGovernment::select('id as value', 'name_en as label')->get();

        $data['provinces'] = Province::select('id as value', 'name_en as label', 'label as p_lable')
            ->orderBy('p_lable', 'asc')

            ->get();

        // return $data['provinces'];

        // dd($data['provinces']);

        $data['districts'] = District::select('id as value', 'name_en as label')->get();

        // dd($data['news']);
        return Inertia::render('Frontend/Dashboard/Dashboard', $data);
    }

    public function getFilteredData(Request $request)
    {
        $query = LocalGovernment::query()->with('district.province' ,'district');

        // Apply filters based on the request parameters
        if ($request->has('lg') && !empty($request->lg)) {
            $aiPolicyIds = explode(',', $request->lg);
            $query->whereIn('id', $aiPolicyIds);
        }
        if ($request->has('province_id') && !empty($request->province_id)) {
            $countryIds = explode(',', $request->province_id);

            // Filter based on province_id within district.province relationship
            $query->whereHas('district.province', function ($q) use ($countryIds) {
                $q->whereIn('id', $countryIds);
            });
        }


        if ($request->has('district_id') && !empty($request->district_id)) {
            $statusIds = explode(',', $request->district_id);

            // Filter based on district_id within district.province relationship
            $query->whereHas('district', function ($q) use ($statusIds) {
                $q->whereIn('id', $statusIds);
            });
        }

        // Apply pagination
        $perPage = $request->get('per_page', 15); // Default to 15 items per page if not provided
        $filteredData = $query->paginate($perPage);


        // Return the filtered and paginated data as JSON
        return response()->json([
            'data' => $filteredData,
        ]);
    }


    // In your Controller
    public function updateStatus(Request $request)
    {

        // $statusIds = $request->input('status_state');
        // if (is_string($statusIds)) {
        //     $statusIds = explode(',', $statusIds);
        // }

        $statusIds = $request->input('status_state', []);

        // If $statusIds is a string, convert it to an array
        if (!is_array($statusIds)) {
            $statusIds = json_decode($statusIds, true); // Decodes JSON array string to PHP array
            if (json_last_error() !== JSON_ERROR_NONE) {
                $statusIds = explode(',', $statusIds); // Fallback: Split by comma if it's not a valid JSON string
            }
        }




        // Ensure $statusIds is an array and not empty
        if (is_array($statusIds) && count($statusIds) > 0) {
            //-- Ai Policy tracker country with status and Link
            // $data['aiPolicyTrackerWithStatus'] = AiPolicyTracker::whereIn('status_id', $statusIds)->with(['country', 'status'])->get();


            $data['aiPolicyTrackerWithStatus'] = AiPolicyTracker::whereIn('status_id', $statusIds)
                ->with(['country', 'status'])
                ->get();

            $URL_MAP = [];
            $STATUS_MAP = [];
            foreach ($data['aiPolicyTrackerWithStatus'] as $tracker) {
                $countrySymbol = null;
                if ($tracker->country->status == 1) {
                    $countrySymbol = $tracker->country->symbol;
                }
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
