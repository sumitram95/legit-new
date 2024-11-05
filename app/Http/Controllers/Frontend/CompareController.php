<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\District;
use App\Models\LocalGovernment;
use App\Models\Province;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompareController extends Controller
{
    public function index()
    {
        $data['tableData'] = LocalGovernment::whereHas('bookmark')
        ->with(['district.province', 'bookmark'])
        // ->orderBy('created_at', 'desc')
        ->paginate(10);
        $data['lgs'] = LocalGovernment::select('id as value', 'name_en as label')->get();

        $data['provinces'] = Province::select('id as value', 'name_en as label', 'label as p_lable')
            ->orderBy('p_lable', 'asc')

            ->get();

        $data['districts'] = District::select('id as value', 'name_en as label')->get();
        return Inertia::render("Frontend/Compare/Compare", $data);
    }
}
