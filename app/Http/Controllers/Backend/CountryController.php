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


    public function updatedStatus(Request $request)
    {
        try {
            $country = Country::find($request->id);
            // if (!$request->id) {
            //     return to_route('backend.country.index')->with('error', 'Sorry not update country status');
            // }



            // if (!$country) {
            //     return to_route('backend.country.index')->with('error', 'Sorry not update country status');
            // }

            $country->update([
                'status' => $request->status ?? false
            ]);
            return response()->json(['message' => "{$country->name} updated successfully"], 200);
        } catch (\Throwable $th) {
            return response()->json('Something went wrong on server', 500);

        }


        return to_route('backend.country.index')->with('success', 'Successfully updated');

    }
}
