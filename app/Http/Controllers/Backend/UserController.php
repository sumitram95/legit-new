<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\BookMark;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $data['tableData'] = User::with(['userInfo'])  // Load the userInfo relationship
            ->where('email', '<>', 'admin@dignep.com.np') // Exclude the specific email
            ->paginate(10);

        return Inertia::render('Backend/Users/Index', $data);
    }
    public function view($id)
    {
        $data['user'] = User::with(['userInfo', 'bookMarks.aipolicy']) // Eager load relationships
        ->withCount('bookMarks') // Get the bookmark count
        ->where('email', '<>', 'admin@dignep.com.np')
        ->where('id', $id)
        ->first();


        return response()->json($data);
    }
}
