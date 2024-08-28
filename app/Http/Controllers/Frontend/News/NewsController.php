<?php

namespace App\Http\Controllers\Frontend\News;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $data['news'] = News::query()
            ->with(['thumbnail', 'status'])
            ->orderBy('created_at', 'Desc')
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

        return Inertia::render('Frontend/News/News', $data);
    }

    public function singleNews($id = null)
    {

        try {
            $data['news'] = News::with(['thumbnail', 'status'])->find($id);
            if (!$data['news']) {
                return to_route('news.index')->with('error', 'News Not Founded');
            }

            return Inertia::render('Frontend/News/SingleNews', $data);
        } catch (\Throwable $th) {
            report($th);
            return to_route('news.index')->with('error', 'Oops! Something went wrong');
        }
    }

    public function getFilteredData(Request $request)
    {
        $query = News::query();

        // Apply filters based on the request parameters
        if ($request->has('AI_Policy_Name') && !empty($request->AI_Policy_Name)) {
            $aiPolicyIds = explode(',', $request->AI_Policy_Name);
            $query->whereIn('policy_tracker_id', $aiPolicyIds);
        }

        // Apply pagination
        $perPage = $request->get('per_page', 10); // Default to 15 items per page if not provided
        $filteredData = $query->paginate($perPage);

        // Format the data as needed
        $news = $filteredData->getCollection()->map(function ($policy) {
            return [
                'id' => $policy->id,
                'description' => $policy->description,
                'thumbnail' => $policy->thumbnail,
                'title' => $policy->title,
                'upload_date' => \Carbon\Carbon::parse($policy->upload_date)->format('M d, Y'),
                'status' => $policy->status,
            ];
        });

        // Return the filtered and paginated data as JSON
        return response()->json([
            'current_page' => $filteredData->currentPage(),
            'data' => $news,
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
