<?php
use App\Http\Controllers\Backend\AiPolicyTrackerController;
use App\Http\Controllers\Backend\CountryController;
use App\Http\Controllers\Backend\NewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get("/backend/dashboard", function () {
//     return 'backend dashboard';
// });

Route::get('/backend/dashboard', function () {
    return Inertia::render('Backend/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth'])
    ->as("backend.")->group(function () {

        // ai policy tracker
        Route::controller(AiPolicyTrackerController::class)->as("ai_policy_tracker.")->group(function () {
            Route::get("/backend/aipolicytracker", "index")->name("index");
            Route::post("/backend/aipolicytracker", "store")->name("store");
            Route::post("/backend/aipolicytracker/update/{id}", "updateData")->name("updateData");
            Route::put("/backend/aipolicytracker/update/{id}", "update")->name("update");


            Route::delete("/backend/aipolicytracker/delete/{id}", "delete")->name("delete");
        });
        /*********************** News Controller ******************************************* */
        Route::controller(NewsController::class)->as("news.")->group(function () {
            Route::get("/backend/news", "index")->name("index");
            Route::post("/backend/news", "store")->name("store");
            // Route::post("/backend/aipolicytracker/update/{id}", "updateData")->name("updateData");
            // Route::put("/backend/aipolicytracker/update/{id}", "update")->name("update");


            // Route::delete("/backend/aipolicytracker/delete/{id}", "delete")->name("delete");


            // image upload after drop or choosen
            // Route::delete("/upload-image", "imgUpload")->name("imgUpload");

        });

    });
