<?php

namespace App\Http\Controllers\Frontend\AiPolicyTracker;

use Carbon\Carbon;
use App\Models\News;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use App\Http\Controllers\Controller;

class SinglePolicyTackerControlle extends Controller
{
    public function index($id)
    {
// dd($id);
        if (!Auth::check()) {
            return Inertia::render('Frontend/DeniedPermissionPage/DeniedPermission');

            // return to_route('page_access_denied');
        }
        if (Auth::user()->email_verified_at == null && !(Auth::user()->email === 'admin@dignep.com.np')) {

            return Inertia::render('Auth/VerifyEmail');
        }

        $data['aiPolicyTrackerWithRelatedNews'] = AiPolicyTracker::query()
            ->with([
                'news' => function ($query) {
                    $query->with(['thumbnail']);
                },
                'country',
                'news',
                'aIPolicyActivityLogs',
                'status'
            ])
            ->where('id', $id)
            ->first();

        $latestAIPolicyTracker = AiPolicyTracker::orderBy('updated_at', 'DESC')->first();
        $data['latestDateOfUpdateAiPolicyTracker'] = $latestAIPolicyTracker ? Carbon::parse($latestAIPolicyTracker->updated_at)->format('F Y') : '';



        $currentYear = Carbon::now()->year;
        $upcomingYear = $currentYear + 1;

         // Get all months
         $months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

         // Get the data and group by month
         // $graphCounts = AiPolicyTracker::get()->groupBy('created_month');
         $graphCounts = AiPolicyTracker::whereYear('created_at', $currentYear)
             ->orWhereYear('created_at', $upcomingYear)
             ->get()
             ->groupBy('created_month');

         $monthlyCounts = [];

         foreach ($months as $month) {

             $monthlyCounts[] = [
                 'month' => $month,
                 'value' => isset($graphCounts[$month]) ? $graphCounts[$month]->count() : 0,
             ];
         }

         $data['currentYear'] = $currentYear;
         $data['upcomingYear'] = $upcomingYear;
         $data["graphData"] = $monthlyCounts;

        return Inertia::render("Frontend/AiPolicyTracker/SingleAlert", ['data'=>$data]);
    }

    public function aiPolicyBookMark(Request $request, $id)
    {
        $aiPolicyTracker = AiPolicyTracker::find($id);

        return response()->json(['id' => $aiPolicyTracker, 'status' => 'success']);
        // return response()->json(['id' => $id, 'status' => 'success']);
    }
}
