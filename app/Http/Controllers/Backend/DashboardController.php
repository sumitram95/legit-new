<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
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

        $user = User::whereNot('email', 'admin@dignep.com.np');

        $data['usersCount'] = $user->count();

        $data['verifiedUsersCount'] = $user
            ->where('email_verified_at', null)
            ->count();

        $data['notVerifiedUsersCount'] = $user
            ->where('email_verified_at', null)
            ->count();

        $data['aiPolicyCount'] = AiPolicyTracker::count();
        $data['newsCount'] = News::count();



        $currentYear = Carbon::now()->year;
        $upcomingYear = $currentYear + 1;

        $months = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ];

        // Fetch customer counts for all months
        $graphCount['PaymentCount'] = AiPolicyTracker::selectRaw('MONTH(created_at) as month, COUNT(*) as value')
            ->whereYear('created_at', '>=', $currentYear)
            ->whereYear('created_at', '<=', $upcomingYear)
            ->groupBy(DB::raw('MONTH(created_at)'))
            ->orderBy(DB::raw('MONTH(created_at)'), 'asc')
            ->pluck('value', 'month')
            ->toArray();

            // dd($graphCount['PaymentCount']);

        // Prepare data array with counts for all months
        $graphData = [];
        $mothNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        foreach ($months as $index => $month) {
            $graphData[] = [
                'month' => $mothNames[$index],
                'PaymentCount' => $graphCount['PaymentCount'][$month] ?? 0,
            ];
        }

        dd($graphCount);



        return Inertia::render('Backend/Dashboard', [
            "data" => $data,
        ]);
    }
}
