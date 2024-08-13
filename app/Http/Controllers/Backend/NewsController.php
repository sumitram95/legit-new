<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\Status;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {

        // dd("news index page");
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


        $tableData = News::with(['country', 'status'])->paginate(15);


        // dd($tableData);

        return Inertia::render("Backend/News/Index", [
            'countries' => $countries,
            'status' => $status,
            'tableData' => $tableData,
        ]);
    }

    public function store(Request $request)
    {
        dd($request->all());
    }
}
