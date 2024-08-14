<?php

namespace App\Http\Controllers\Frontend\News;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $data['newsLists'] = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        return Inertia::render('Frontend/News/News', $data);
    }

    public function singleNews($id = null)
    {
        $data['newsLists'] = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ];
        return Inertia::render('Frontend/News/SingleNews', $data);
    }
}
