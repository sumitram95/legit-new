<?php

namespace App\Http\Controllers\Frontend\AiPolicyTracker;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SinglePolicyTackerControlle extends Controller
{
    public function index($id)
    {
        $data['aiPolicyTrackerWithRelatedNews'] = AiPolicyTracker::with([
            'news' => function ($query) {
                $query->with(['thumbnail']);
            },
            'country',
            'news'
        ])->where('id', $id)
            ->first();

        return Inertia::render("Frontend/AiPolicyTracker/SingleAiPolicyTracker", $data);
    }

    public function aiPolicyBookMark(Request $request, $id)
    {
        $aiPolicyTracker = AiPolicyTracker::find($id);

        return response()->json(['id' => $aiPolicyTracker, 'status' => 'success']);
        // return response()->json(['id' => $id, 'status' => 'success']);
    }
}
