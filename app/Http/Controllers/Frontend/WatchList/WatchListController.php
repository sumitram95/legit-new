<?php

namespace App\Http\Controllers\Frontend\WatchList;

use App\Http\Controllers\Controller;
use App\Models\AiPolicyTracker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WatchListController extends Controller
{
    public function index()
    {
        $data['tableData'] = AiPolicyTracker::with(['country', 'status'])->paginate(15);
        return Inertia::render("Frontend/WatchList/WatchList", $data);
    }

    public function show(Request $request)
    {

        return $this->index();

        return ($request->all());

        return 'true';
        // Logic for handling the POST request with the given IDs

        // Assuming $ids is a comma-separated string of IDs
        $idArray = explode(',', $ids);

        // Example response
        return response()->json([
            'status' => 'success',
            'message' => 'Watchlist updated',
            'ids' => $idArray,
        ]);
    }
}
