<?php

namespace App\Http\Controllers\Frontend\News;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        // $data['newsLists'] = [
        //     1,
        //     2,
        //     3,
        //     4,
        //     5,
        //     6,
        //     7,
        //     8,
        //     9
        // ];

        $data['news'] = News::with(['thumbnail', 'newsCategory'])->paginate(15);
        return Inertia::render('Frontend/News/News', $data);
    }

    public function singleNews($id = null)
    {

        try {
            $data['news'] = News::with(['thumbnail', 'newsCategory'])->find($id);
            if (!$data['news']) {
                return to_route('news.index')->with('error', 'News Not Founded');
            }

            return Inertia::render('Frontend/News/SingleNews', $data);
        } catch (\Throwable $th) {
            report($th);
            return to_route('news.index')->with('error', 'Oops! Something went wrong');
        }

    }
}
