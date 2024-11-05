<?php

use App\Http\Controllers\Frontend\AiPolicyTracker\SinglePolicyTackerControlle;
use App\Http\Controllers\Frontend\CompareController;
use App\Http\Controllers\Frontend\DashboardController;
use App\Http\Controllers\Frontend\LegitApplication\LegitApplicationController;
use App\Http\Controllers\Frontend\News\NewsController;
use App\Http\Controllers\Frontend\TimeLine\TimeLineController;
use App\Http\Controllers\Frontend\WatchList\WatchListController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/denied', function () {
    return Inertia::render('Frontend/DeniedPermissionPage/DeniedPermission');
})->name('page_access_denied');




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(NewsController::class)->group(function () {
    Route::get("/news", "index")->name("news.index");
    Route::get("/news/{id}", "singleNews")->name("news.single");
    Route::post('/news/filtered', [NewsController::class, 'getFilteredData'])->name('frontend.news.filtered');

    Route::post('/news/show-advanced-info', 'showAdvancedInfoPaginate')->name('frontend.showAdvancedInfoPaginate');


});

// Route::post('/news/filtered', [NewsController::class, 'getFilteredData'])->name('frontend.news.filtered');

Route:: as('frontend.')->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/', 'dashboard')->name('dashboard');
        Route::get('/dashboard/filtered', 'getFilteredData')->name('dashboard.filtered');

        Route::get('/dashboard/updateStatus', 'updateStatus')->name('dashboard.updateStatus');
    });
    Route::controller(WatchListController::class)
        ->as('watch_list.')
        ->group(function () {
            Route::get('/alert', 'index')->name('index');
            Route::get('/alert/add/{id}/{isBooked}', 'add')->name('add')->middleware('verified');
            Route::get('/alert/filtered', 'getFilteredData')->name('filtered');
        });

    // time line controller
    Route::controller(TimeLineController::class)->as('time_line.')->group(function () {
        Route::get('/timeline', 'index')->name('index');
    });

    Route::controller(LegitApplicationController::class)
        ->as('legit_application_form.')
        ->group(function () {
            Route::get('/legit-aplication-form', 'create')->name('create');
            Route::post('/legit-aplication-form', 'store')->name('store');

            Route::post('/district-data-updata/{value}', 'districtDataUpdate')->name('districtDataUpdate');
            Route::post('/lg-data-updata/{value}', 'lgDataUpdate')->name('lgDataUpdate');
        });

    // single legit
    Route::controller(SinglePolicyTackerControlle::class)->as('single_ai_policy_tracker.')->group(function () {
        Route::get("/legit/single-view/{id}", "index")->name('index');
        Route::post("/aipolicytracke/bookmark/{id}", "aiPolicyBookMark")->name('bookmark');
    });

    Route::controller(CompareController::class)
        ->as('compare.')
        ->group(function () {
            Route::get('/compare', 'index')->name('index');
        });
});
