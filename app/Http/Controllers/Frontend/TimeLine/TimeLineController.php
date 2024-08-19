<?php

namespace App\Http\Controllers\Frontend\TimeLine;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimeLineController extends Controller
{
    public function index()
    {
        // Fetch and group data by announcement_year
        $groupedData = AiPolicyTracker::all()->groupBy('announcement_year')->toArray();

        $data['timeLines'] = $groupedData;
        return Inertia::render("Frontend/TimeLine/TimeLine", $data);
    }
}
