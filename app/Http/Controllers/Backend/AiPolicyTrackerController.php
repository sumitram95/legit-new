<?php

namespace App\Http\Controllers\Backend;

use Inertia\Inertia;
use App\Models\Status;
use App\Models\Country;
use Illuminate\Http\Request;
use App\Models\AiPolicyTracker;
use App\Http\Controllers\Controller;
use App\Helpers\Logs\AiPolicyActivityLogHelper;
use App\Http\Requests\AiPolicyTrackerPostRequest;

class AiPolicyTrackerController extends Controller
{
    public function index()
    {
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


        $tableData = AiPolicyTracker::with(['country', 'status'])->paginate(15);



        return Inertia::render("Backend/AiPolicyTracker/Index", [
            'countries' => $countries,
            'status' => $status,
            'tableData' => $tableData,
        ]);
    }
    public function store(AiPolicyTrackerPostRequest $request)
    {

        $validated = $request->validated();

        AiPolicyTracker::create($validated);


        // Log the ai Policy activity Log
        // $activity_name =   'Terms and Condition Created';
        // $description = 'New terms and conditions';
        // AiPolicyActivityLogHelper::createAiPolicyActivityLog($activity_name, $description);

        return to_route('backend.ai_policy_tracker.index')->with('success', 'Successfully Created');
    }



    public function delete($id)
    {
        try {
            $aiPolicyTracker = AiPolicyTracker::find($id);

            if (!$aiPolicyTracker) {

                return to_route('backend.ai_policy_tracker.index')->with('error', 'Not founded (AI) policy tracker');
            }

            $aiPolicyTracker->delete();

            return to_route('backend.ai_policy_tracker.index')->with('success', 'SuccessFully Deleted');
        } catch (\Throwable $th) {
            report($th);

            return to_route('backend.ai_policy_tracker.index')->with('error', 'Oops! Somethings went wrong');
        }
    }

    public function updateData($id)
    {
        try {
            $aiPolicyTracker = AiPolicyTracker::find($id);

            if (!$aiPolicyTracker) {

                return to_route('backend.ai_policy_tracker.index')->with('error', 'Not founded (AI) policy tracker');
            }

            // Return the updated tracker data
            return response()->json(['aiPolicyTracker' => $aiPolicyTracker]);
        } catch (\Throwable $th) {
            report($th);

            return to_route('backend.ai_policy_tracker.index')->with('error', 'Oops! Somethings went wrong');
        }
    }

    public function update(AiPolicyTrackerPostRequest $request, $id)
    {
        $validated = $request->validated();
        try {
            $aiPolicyTracker = AiPolicyTracker::find($id);

            if (!$aiPolicyTracker) {

                return to_route('backend.ai_policy_tracker.index')->with('error', 'Not founded (AI) policy tracker');
            }
            $aiPolicyTracker->update($validated);

            return to_route('backend.ai_policy_tracker.index')->with('success', 'SuccessFully Updated');
        } catch (\Throwable $th) {
            report($th);

            return to_route('backend.ai_policy_tracker.index')->with('error', 'Oops! Somethings went wrong');
        }
    }
}
