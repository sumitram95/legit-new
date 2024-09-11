<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

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



        return Inertia::render('Backend/Dashboard', [
            "data" => $data,
        ]);
    }
}
