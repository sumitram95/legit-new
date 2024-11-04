<?php

namespace App\Http\Controllers\Frontend\WatchList;

use App\Models\BookMark;
use App\Models\Country;
use App\Models\District;
use App\Models\LocalGovernment;
use App\Models\Province;
use App\Models\Status;
use Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class WatchListController extends Controller
{
    public function index()
    {
        $data['tableData'] = LocalGovernment::whereHas('bookmark')
            ->with(['district.province', 'bookmark'])
            // ->orderBy('created_at', 'desc')
            ->paginate(10);

            // dd($data);

        // $data['aiPolicies'] = AiPolicyTracker::get()
        //     ->map(function ($aiPolicy) {
        //         return [
        //             'value' => $aiPolicy->id,
        //             'label' => $aiPolicy->ai_policy_name,
        //         ];
        //     });

        // $data['countries'] = Country::select('id as value', 'name as label')
        //     ->where('status', 1)
        //     ->orderBy('name', 'asc')
        //     ->get();

        // $data['statuses'] = Status::get()
        //     ->map(function ($status) {
        //         return [
        //             'value' => $status->id,
        //             'label' => $status->name,
        //         ];
        //     });

        $data['lgs'] = LocalGovernment::select('id as value', 'name_en as label')->get();

        $data['provinces'] = Province::select('id as value', 'name_en as label', 'label as p_lable')
            ->orderBy('p_lable', 'asc')

            ->get();

        // return $data['provinces'];

        // dd($data['provinces']);

        $data['districts'] = District::select('id as value', 'name_en as label')->get();
        return Inertia::render("Frontend/WatchList/WatchList", $data);
    }

    public function add($id, $isBooked)
    {
        try {

            if (!Auth::check()) {
                return Inertia::render('Frontend/DeniedPermissionPage/DeniedPermission');
            }

            if (!$id) {
                return to_route('frontend.dashboard')->with('error', 'Woops! not booked');
            }

            if ($isBooked == "true") {
                $bookmark = BookMark::where('lg_id', $id)
                    ->where('user_id', Auth::id())
                    ->first();
                $bookmark->delete();
            } else {

                BookMark::updateOrCreate([
                    'lg_id' => $id,
                    'user_id' => Auth::id()
                ], [
                    'user_id' => Auth::user()->id,
                    'lg_id' => $id,
                ]);
            }

            return back();
        } catch (\Throwable $th) {
            report($th);
            return to_route('frontend.dashboard')->with('error', 'Oops! Something went wrong.');
        }

    }

        public function getFilteredData(Request $request)
    {
        $query = LocalGovernment::query()->whereHas('bookmark')->with('district.province', 'district','bookmark');

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

    // public function getFilteredData(Request $request)
    // {
    //     $query = AiPolicyTracker::whereHas('bookmark');

    //     // Apply filters based on the request parameters
    //     if ($request->has('AI_Policy_Name') && !empty($request->AI_Policy_Name)) {
    //         $aiPolicyIds = explode(',', $request->AI_Policy_Name);
    //         $query->whereIn('id', $aiPolicyIds);
    //     }

    //     if ($request->has('country_id') && !empty($request->country_id)) {
    //         $countryIds = explode(',', $request->country_id);
    //         $query->whereIn('country_id', $countryIds);
    //     }

    //     if ($request->has('status_id') && !empty($request->status_id)) {
    //         $statusIds = explode(',', $request->status_id);
    //         $query->whereIn('status_id', $statusIds);
    //     }

    //     if ($request->has('announcement_year') && !empty($request->announcement_year)) {
    //         $query->where('announcement_year', $request->announcement_year);
    //     }

    //     // Apply pagination
    //     $perPage = $request->get('per_page', 10); // Default to 15 items per page if not provided
    //     $filteredData = $query->paginate($perPage);

    //     // Format the data as needed
    //     $tableData = $filteredData->getCollection()->map(function ($policy) {
    //         return [
    //             'id' => $policy->id,
    //             'ai_policy_name' => $policy->ai_policy_name,
    //             'country' => $policy->country,
    //             'bookmark' => $policy->bookmark,
    //             'governing_body' => $policy->governing_body,
    //             'formatted_created_at' => \Carbon\Carbon::parse($policy->announcement_date)->format('M d, Y'),
    //             'status' => $policy->status,
    //             'technology_partners' => $policy->technology_partners,
    //             'governance_structure' => $policy->governance_structure,
    //             'main_motivation' => $policy->main_motivation,
    //             'description' => $policy->description,
    //         ];
    //     });

    //     // Return the filtered and paginated data as JSON
    //     return response()->json([
    //         'current_page' => $filteredData->currentPage(),
    //         'data' => $tableData,
    //         'first_page_url' => $filteredData->url(1),
    //         'last_page' => $filteredData->lastPage(),
    //         'last_page_url' => $filteredData->url($filteredData->lastPage()),
    //         'next_page_url' => $filteredData->nextPageUrl(),
    //         'path' => $filteredData->path(),
    //         'per_page' => $filteredData->perPage(),
    //         'prev_page_url' => $filteredData->previousPageUrl(),
    //         'to' => $filteredData->lastItem(),
    //         'total' => $filteredData->total(),
    //     ]);
    // }
}
