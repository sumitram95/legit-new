<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\BookMark;
use App\Models\News;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function dashboard()
    {

        $user = User::where('email', '!=', 'admin@dignep.com.np');

        $data['usersCount'] = $user->count();

        $data['notVerifiedUsersCount'] = (clone $user)
            ->where('email_verified_at', null)
            ->count();

        $data['verifiedUsersCount'] = (clone $user)
            ->whereNotNull('email_verified_at')
            ->count();


        $data['aiPolicyCount'] = AiPolicyTracker::count();
        $data['newsCount'] = News::count();
        $data['bookMarkCount'] = BookMark::count();


        $currentYear = Carbon::now()->year;
        $upcomingYear = $currentYear + 1;


        // Fetch customer counts for all months
        // $graphCount = AiPolicyTracker::selectRaw('MONTH(created_at) as month, COUNT(*) as value')
        //     ->whereYear('created_at', '>=', $currentYear)
        //     ->whereYear('created_at', '<=', $upcomingYear)
        //     ->groupBy(DB::raw('MONTH(created_at)'))
        //     ->orderBy(DB::raw('MONTH(created_at)'), 'asc')
        //     ->pluck('value', 'month')
        //     ->toArray();

        $graphCounts = AiPolicyTracker::get()->groupBy('created_month');


        // selectRaw('extract(month from created_at) as month, COUNT(*) as value')
        //     ->whereYear('created_at', '>=', $currentYear)
        //     ->whereYear('created_at', '<=', $upcomingYear)
        //     ->groupBy(DB::raw('extract(month from created_at)'))
        //     ->orderBy(DB::raw('extract(month from created_at)'), 'asc')
        //     ->pluck('value', 'month')
        //     ->toArray();



        // Prepare data array with counts for all months
        $graphData = [];
        $monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        foreach ($monthNames ?? [] as $monthName) {
            foreach ($graphCounts ?? [] as $key => $graphCount) {
                if ($monthName == $key) {
                    $graphData[] = [
                        'month' => $key,
                        'value' => $graphCount->count(),
                    ];
                } else {
                    $graphData[] = [
                        'month' => $monthName,
                        'value' => 0,
                    ];
                }

            }

            if ($graphCounts->isEmpty()) {
                $graphData[] = [
                    'month' => $monthName,
                    'value' => 0,
                ];
            }

        }


        $data['currentYear'] = $currentYear;
        $data['upcomingYear'] = $upcomingYear;

        return Inertia::render('Backend/Dashboard', [
            "data" => $data,
            "graphData" => $graphData,
        ]);
    }
}
