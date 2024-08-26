<?php

namespace App\Http\Controllers\Frontend\WatchList;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;

class WatchListController extends Controller
{
    public function index()
    {
        $data['tableData'] = AiPolicyTracker::query()
            ->with(['country', 'status'])
            ->orderBy('created_at', 'desc')
            ->paginate(10);
        return Inertia::render("Frontend/WatchList/WatchList", $data);
    }

    public function show(Request $request)
    {
        $uuids = $request->input('uuids');
        if (is_array($uuids) && !empty($uuids)) {

            $data['tableData'] = AiPolicyTracker::whereIn('id', $uuids)
                ->with(['country', 'status'])
                ->paginate(15);

            $data['is_favorite'] = true;

            return Inertia::render('Frontend/WatchList/WatchList', $data);
        }

        // Handle case where 'uuids' is not an array or is empty
        return redirect()->back()->with('error', 'Invalid UUIDs');
    }
}
