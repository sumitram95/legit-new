<?php

use App\Http\Controllers\Frontend\AiPolicyTracker\SinglePolicyTackerControlle;
use App\Http\Controllers\Frontend\News\NewsController;
use App\Http\Controllers\Frontend\TimeLine\TimeLineController;
use App\Http\Controllers\Frontend\WatchList\WatchListController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Frontend/Dashboard/Dashboard');
})->name("frontend.dashboard");


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(NewsController::class)->group(function () {
    Route::get("/news", "index")->name("news.index");
    Route::get("/news/news-name-here", "singleNews")->name("news.single");
});

Route:: as('frontend.')->group(function () {
    Route::controller(WatchListController::class)->as('watch_list.')->group(function () {
        Route::get('/watchlist', 'index')->name('index');
    });

    // time line controller
    Route::controller(TimeLineController::class)->as('time_line.')->group(function () {
        Route::get('/timeline', 'index')->name('index');
    });

    // single AI policy tracker
    Route::controller(SinglePolicyTackerControlle::class)->as('single_ai_policy_tracker.')->group(function () {
        Route::get("/aipolicytracker/name-here", "index")->name('index');
    });
});

