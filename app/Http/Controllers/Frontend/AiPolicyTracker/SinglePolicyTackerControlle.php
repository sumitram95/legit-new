<?php

namespace App\Http\Controllers\Frontend\AiPolicyTracker;

use Carbon\Carbon;
use App\Models\News;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use App\Http\Controllers\Controller;

class SinglePolicyTackerControlle extends Controller
{
    public function index($id)
    {
        $data['aiPolicyTrackerWithRelatedNews'] = AiPolicyTracker::query()
            ->with([
                'news' => function ($query) {
                    $query->with(['thumbnail']);
                },
                'country',
                'news',
                'aIPolicyActivityLogs'
            ])
            ->where('id', $id)
            ->first();

        $latestAIPolicyTracker = AiPolicyTracker::orderBy('updated_at', 'DESC')->first();
        $data['latestDateOfUpdateAiPolicyTracker'] = $latestAIPolicyTracker ? Carbon::parse($latestAIPolicyTracker->updated_at)->format('F Y') : '';


        return Inertia::render("Frontend/AiPolicyTracker/SingleAiPolicyTracker", $data);
    }

    public function aiPolicyBookMark(Request $request, $id)
    {
        $aiPolicyTracker = AiPolicyTracker::find($id);

        return response()->json(['id' => $aiPolicyTracker, 'status' => 'success']);
        // return response()->json(['id' => $id, 'status' => 'success']);
    }
}
