<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use App\Models\Country;
use App\Models\News;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        //-- get countries list
        $countries = Country::select('id', 'name')
            ->orderBy('name', 'asc')
            ->get()
            ->map(function ($country) {
                return [
                    'value' => $country->id,
                    'label' => $country->name,
                ];
            });

        //-- get news Categories
        $newsCategories = Status::select("id", "name")
            ->get()
            ->map(function ($value) {
                return [
                    "value" => $value->id,
                    "label" => $value->name,
                ];
            });



        $aiPolicyTrackers = AiPolicyTracker::select("id", "ai_policy_name")
            ->get()
            ->map(function ($value) {
                return [
                    "value" => $value->id,
                    "label" => $value->ai_policy_name,
                ];
            });

        $tableData = News::with(['thumbnail', 'status', 'policyTracker'])
            ->orderBy('created_at', 'DESC')
            ->paginate(10);

        // dd($tableData);

        return Inertia::render("Backend/News/Index", [
            'countries' => $countries,
            'categories' => $newsCategories,
            'aiPolicyTrackers' => $aiPolicyTrackers,
            'tableData' => $tableData,
        ]);
    }

    public function store(Request $request)
    {
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'status_id' => 'required|string',
            'policy_tracker_id' => 'required|string',
            'upload_date' => 'required|date',
            'description' => 'sometimes|nullable|string',
            'thumbnails.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Validation for multiple images
            'future_images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        DB::beginTransaction();
        try {
            $news = News::create($validate);
            if ($request->hasFile('thumbnails')) {
                $thumbnails = $request->thumbnails[0];
                $this->fileUpload($thumbnails, "thumbnails", $news);
            }
            if ($request->hasFile('future_images')) {
                $futureImages = $request->future_images;
                foreach ($futureImages as $futureImage) {
                    $fileName = time() . '-' . $futureImage->getClientOriginalName();
                    $filePath = $futureImage->storeAs('future_images', $fileName, 'public');
                    $relativePath = str_replace('public/', '', $filePath);

                    $news->newsFutureImage()->create([
                        'type' => $futureImage->getMimeType(),
                        'name' => $futureImage->getClientOriginalName(),
                        'path' => $relativePath,
                    ]);
                }
            }
            DB::commit();
            return to_route('backend.news.index')->with('success', 'SuccessFully Created');
        } catch (\Throwable $th) {
            report($th);
            DB::rollBack();
            return to_route('backend.news.index')->with('error', 'Oops! Something went wrong');
        }
    }

    public function updateData($id)
    {
        try {
            $news = News::with('thumbnail')->find($id);
            if (!$news) {

                return to_route('backend.news.index')->with('error', 'Not founded');
            }
            return response()->json(['news' => $news]);
        } catch (\Throwable $th) {
            report($th);
            return to_route('backend.news.index')->with('error', 'Oops! Somethings went wrong');
        }
    }

    public function update(Request $request, $id)
    {
        // dd($request->all());
        $validate = $request->validate([
            'title' => 'required|string|max:255',
            'status_id' => 'required|string',
            'upload_date' => 'required|date',
            'description' => 'sometimes|nullable|string',
            'policy_tracker_id' => 'required|string',
            'thumbnail.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            // 'future_images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);



        try {
            $news = News::find($id);
            if (!$news) {
                return to_route('backend.news.index')->with('error', 'Not founded');
            }

            if ($request->hasFile('thumbnail')) {
                $thumbnails = $request->thumbnail[0];
                // $this->fileUpload($thumbnails, "thumbnails", $news);

                $fileName = time() . '-' . $thumbnails->getClientOriginalName();

                $filePath = $thumbnails->storeAs("thumbnails", $fileName, 'public');

                // Get the path relative to storage/
                $relativePath = str_replace('public/', '', $filePath);

                $news->thumbnail()->update([
                    'type' => $thumbnails->getMimeType(),
                    'name' => $thumbnails->getClientOriginalName(),
                    'path' => $relativePath,
                ]);
            }


            $news->update($validate);
            return to_route('backend.news.index')->with('success', 'SuccessFully Updated');
        } catch (\Throwable $th) {
            report($th);
            return to_route('backend.news.index')->with('error', 'Oops! Somethings went wrong');
        }
    }

    public function delete($id)
    {
        try {
            $news = News::find($id);
            if (!$news) {
                return to_route('backend.news.index')->with('error', 'Not founded');
            }
            $news->delete();
            return to_route('backend.news.index')->with('success', 'SuccessFully Deleted');
        } catch (\Throwable $th) {
            report($th);
            return to_route('backend.news.index')->with('error', 'Oops! Somethings went wrong');
        }
    }



    // file upload

    private function fileUpload($value = null, $storageFileName = '', $news)
    {
        $fileName = time() . '-' . $value->getClientOriginalName();

        $filePath = $value->storeAs($storageFileName, $fileName, 'public');

        // Get the path relative to storage/
        $relativePath = str_replace('public/', '', $filePath);

        $news->thumbnail()->create([
            'type' => $value->getMimeType(),
            'name' => $value->getClientOriginalName(),
            'path' => $relativePath,
        ]);
    }
}
