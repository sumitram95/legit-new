<?php

namespace App\Http\Controllers\Frontend\TimeLine;

use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use App\Http\Controllers\Controller;

class TimeLineController extends Controller
{
    public function index()
    {
        // Fetch the most recent record and format the date
        $lastUpdateDate = AiPolicyTracker::latest('created_at')->first();
        $formattedLastDate = $lastUpdateDate
            ? Carbon::parse($lastUpdateDate->created_at)->format('M Y')
            : 'No records found';

        // Group data by announcement_year
        $groupedData = AiPolicyTracker::all()->groupBy('announcement_year')->toArray();

        // Prepare data for Inertia view
        $data = [
            'timeLines' => $groupedData,
            'lastUpdateDate' => $formattedLastDate,
        ];
        return Inertia::render("Frontend/TimeLine/TimeLine", $data);
    }
}
