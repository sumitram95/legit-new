<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $data['tableData'] = AiPolicyTracker::with(['country', 'status'])->paginate(15);
        $data['news'] = News::with(['thumbnail', 'status'])->paginate(15);

        // dd($data['news']);
        return Inertia::render('Frontend/Dashboard/Dashboard', $data);
    }
}
