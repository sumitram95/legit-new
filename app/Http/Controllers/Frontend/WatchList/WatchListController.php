<?php

namespace App\Http\Controllers\Frontend\WatchList;

use App\Models\Country;
use App\Models\Status;
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
        $data['tableData'] = AiPolicyTracker::query()
            ->with(['country', 'status'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);
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
        return Inertia::render("Frontend/WatchList/WatchList", $data);
    }

    public function show(Request $request)
    {
        $uuids = $request->input('uuids');
        if (is_array($uuids) && !empty($uuids)) {

            $data['tableData'] = AiPolicyTracker::whereIn('id', $uuids)
                ->with(['country', 'status'])
                ->paginate(15);

            $data['is_favorite'] = true;

            return Inertia::render('Frontend/WatchList/WatchList', $data);
        }

        // Handle case where 'uuids' is not an array or is empty
        return redirect()->back()->with('error', 'Invalid UUIDs');
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
