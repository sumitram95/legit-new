<?php

namespace App\Http\Controllers\Backend\CMS;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeaderMenuController extends Controller
{
    public function index()
    {
        return Inertia::render("Backend/Cms/HeaderMenu");
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'logo' => 'sometimes|nullable|mimes:png,jpg,gif',
            'navBars.*' => 'sometimes|nullable',
            'aiPolicyTrackeData.*' => 'sometimes|nullable',
            'contributorData.*' => 'sometimes|nullable',
            'organizationData.*'=> 'sometimes|nullable',
        ]);
        dd($validated);
    }
}
