<?php
use App\Http\Controllers\Backend\AiPolicyTrackerController;
use App\Http\Controllers\Backend\CountryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get("/backend/dashboard", function () {
//     return 'backend dashboard';
// });

Route::get('/backend/dashboard', function () {
    return Inertia::render('Backend/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route:: as("backend.")->group(function () {

    // ai policy tracker
    Route::controller(AiPolicyTrackerController::class)->as("ai_policy_tracker.")->group(function () {
        Route::get("/backend/aipolicytracker", "index")->name("index");
        Route::post("/backend/aipolicytracker", "store")->name("store");


        Route::delete("/backend/aipolicytracker/delete/{id}", "delete")->name("delete");
    });
});
