<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AiPolicyTrackerController extends Controller
{
    public function index()
    {
        $countries = Country::select('id', 'name')
            ->get()
            ->map(function ($country) {
                return [
                    'value' => $country->id,
                    'label' => $country->name,
                ];
            });

        return Inertia::render("Backend/AiPolicyTracker/Index", [
            'countries' => $countries,
        ]);

    }
}
