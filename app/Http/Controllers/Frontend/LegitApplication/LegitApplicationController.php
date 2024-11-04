<?php

namespace App\Http\Controllers\Frontend\LegitApplication;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\LocalGovernment;
use App\Models\Province;
use App\Models\RuralMunicipalityDetails;
use App\Models\StatusOFIctInfrastructure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LegitApplicationController extends Controller
{
    public function create()
    {
        $data['provinces'] = Province::orderBy("label", "ASC")->get();
        return Inertia::render("Frontend/LegitApplication/LegitApplicationForm", $data);
    }

    public function store(Request $request)
    {
        dd($request->all());
        $validated = $request->validate([
            // rural municipality details
            'rural_municipality_details.provider_name' => 'required|string|max:255',
            'rural_municipality_details.phone_no' => 'required',
            'rural_municipality_details.email' => 'required|email',
            'rural_municipality_details.province_label' => 'required|exists:provinces,label', // Corrected table name typo
            'rural_municipality_details.district_label' => 'required|exists:districts,label', // Corrected table name typo
            'rural_municipality_details.local_government_lable' => 'required|exists:local_governments,label',
            'rural_municipality_details.position' => 'required',

            // status of infrastructure
            "status_of_ict_infrastructure.no_of_desktop" => 'required',
            "status_of_ict_infrastructure.no_of_laptop" => 'required',
            "status_of_ict_infrastructure.no_of_desktop_printer" => 'required',
            "status_of_ict_infrastructure.no_of_staff_use_compture_software" => 'required',
        ]);


        try {

            if ($request->rural_municipality_details) {
                $this->ruralMuncipalityDetailsStore($validated['rural_municipality_details']);
            }
            if ($request->status_of_ict_infrastructure) {
                //    dd($validated['status_of_ict_infrastructure']);
                $this->statusOfIctInfrastructureStore($validated['status_of_ict_infrastructure']);
            }
            return back()->with(['message' => 'Form submitted successfully']);

        } catch (\Throwable $th) {
            report($th);

            dd("something went wrong");
        }

    }

    private function ruralMuncipalityDetailsStore($request)
    {
        try {
            RuralMunicipalityDetails::create($request);
        } catch (\Throwable $th) {
            report($th);
        }
    }
    private function statusOfIctInfrastructureStore($request)
    {
        try {
            StatusOFIctInfrastructure::create($request);
        } catch (\Throwable $th) {
            report($th);
        }
    }

    public function districtDataUpdate($value)
    {
        $districts = District::where('province_label', $value)->get();
        return response()->json($districts);
    }

    public function lgDataUpdate($value)
    {
        $lgs = LocalGovernment::where('district_label', $value)->get();
        return response()->json($lgs);
    }
}
