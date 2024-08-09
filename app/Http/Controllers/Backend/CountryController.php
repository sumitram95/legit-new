<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CountryController extends Controller
{
    public function index()
    {
        return Inertia::render("Backend/Country/Index");
    }
}
