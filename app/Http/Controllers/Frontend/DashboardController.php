<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\News;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $data['tableData'] = AiPolicyTracker::with(['country', 'status'])->paginate(15);
        $data['news'] = News::with(['thumbnail', 'newsCategory'])->paginate(15);

        $data['aiPolicies'] = AiPolicyTracker::get()
            ->map(function ($aiPolicy) {
                return [
                    'value' => $aiPolicy->id,
                    'label' => $aiPolicy->ai_policy_name,
                ];
            });

        $data['countries'] = Country::get()
            ->map(function ($aiPolicy) {
                return [
                    'value' => $aiPolicy->id,
                    'label' => $aiPolicy->name,
                ];
            });

        $data['statuses'] = Status::get()
            ->map(function ($status) {
                return [
                    'value' => $status->id,
                    'label' => $status->name,
                ];
            });




        return Inertia::render('Frontend/Dashboard/Dashboard', $data);
    }
}
