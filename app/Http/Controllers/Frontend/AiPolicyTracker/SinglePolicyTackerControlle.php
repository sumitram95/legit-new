<?php

namespace App\Http\Controllers\Frontend\AiPolicyTracker;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SinglePolicyTackerControlle extends Controller
{
    public function index($id = null)
    {
        // $data['newsLists'] = [
        //     1,
        //     2,
        //     3,
        //     4,
        //     5
        // ];

        $data['timeLines'] = [
            1,
            2,
            3
        ];

        $data['newsLists'] = News::with(['thumbnail', 'status'])->paginate(15);
        return Inertia::render("Frontend/AiPolicyTracker/SingleAiPolicyTracker", $data);
    }
}
