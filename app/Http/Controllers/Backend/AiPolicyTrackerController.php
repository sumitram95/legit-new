<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AiPolicyTrackerPostRequest;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AiPolicyTrackerController extends Controller
{
    public function index()
    {
        $countries = Country::select('id', 'name')->orderBy('name', 'asc')
            ->get()
            ->map(function ($country) {
                return [
                    'value' => $country->id,
                    'label' => $country->name,
                ];
            });

        $status = Status::select("id", "name")
            ->get()
            ->map(function ($value) {
                return [
                    "value" => $value->id,
                    "label" => $value->name,
                ];
            });

        return Inertia::render("Backend/AiPolicyTracker/Index", [
            'countries' => $countries,
            'status' => $status,
        ]);

    }
    public function store(AiPolicyTrackerPostRequest $request)
    {

        $validated = $request->validated();

        AiPolicyTracker::create($validated);


        return to_route('backend.ai_policy_tracker.index')->with('success', 'Successfully Created');
    }
}
