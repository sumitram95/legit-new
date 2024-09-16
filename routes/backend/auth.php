<?php

use App\Http\Controllers\Backend\AdminController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

    Route::controller(AdminController::class)->as('admin.')->group(function () {
        Route::get('/aipolicy/login', 'create')
            ->name('login');

        Route::post('/aipolicy/login', 'store')->name('store');
    });

});

Route::get('/aipolicy/logout', [AdminController::class, 'destroy'])
    ->name('admin.logout')->middleware('auth');
