<?php

namespace App\Http\Controllers\Frontend\WatchList;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WatchListController extends Controller
{
    public function index()
    {
        return Inertia::render("WatchList/WatchList");
    }
}
