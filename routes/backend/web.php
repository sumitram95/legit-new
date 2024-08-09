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

    // country controller
    // Route::controller(CountryController::class)->as("country.")->group(function () {
    //     Route::get("/backend/country", "index")->name("index");
    // });

    // country controller
    Route::controller(AiPolicyTrackerController::class)->as("ai_policy_tracker.")->group(function () {
        Route::get("/backend/aipolicytracker", "index")->name("index");
    });
});
