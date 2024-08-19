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
                $query->with(['thumbnail', 'status']);
            },
            'country', // Make sure status is included
            'status' // Make sure status is included
        ])->where('id', $id)
        ->first();

        // dd( $data['aiPolicyTrackerWithRelatedNews']);

        // $data['newsLists'] = News::with(['thumbnail', 'status'])->paginate(15);
        return Inertia::render("Frontend/AiPolicyTracker/SingleAiPolicyTracker", $data);
    }
}
