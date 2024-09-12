<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Country;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CountryController extends Controller
{
    public function index()
    {

        $data['tableData'] = Country::orderBy('name', 'asc')->paginate(10);
        return Inertia::render("Backend/Country/Index", $data);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|unique:countries,name|max:255',
            'symbol' => 'required|string|unique:countries,symbol|max:10',
            'status' => 'required|boolean',
        ]);

        $validated['symbol'] = strtoupper($validated['symbol']);

        Country::create($validated);



        return to_route('backend.country.index')->with('success', 'SuccessFully Created');
    }

    public function view($id)
    {
        $country = Country::with(['aiPolicyTrackers'])
            ->withCount(['aiPolicyTrackers'])->find($id);



        // ai_policy_trackers_count

        return response()->json(['country' => $country]);
    }
}
