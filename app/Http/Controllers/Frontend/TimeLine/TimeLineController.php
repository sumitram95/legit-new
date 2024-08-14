<?php

namespace App\Http\Controllers\Frontend\TimeLine;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TimeLineController extends Controller
{
    public function index()
    {
        $data['timeLines'] = [
            1,
            2,
            3,
            4
        ];
        return Inertia::render("Frontend/TimeLine/TimeLine", $data);
    }
}
