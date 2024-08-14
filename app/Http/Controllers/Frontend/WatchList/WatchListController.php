<?php

namespace App\Http\Controllers\Frontend\WatchList;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WatchListController extends Controller
{
    public function index()
    {
        $data['tableData'] = AiPolicyTracker::with(['country', 'status'])->paginate(15);
        return Inertia::render("Frontend/WatchList/WatchList", $data);
    }
}
