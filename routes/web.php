<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

require __DIR__ . "/frontend/web.php";
require __DIR__ . '/auth.php';
require __DIR__ . "/backend/web.php";


//-- Storage link
Route::get('/storage-link', function () {
    Artisan::call('storage:link');
    return "Storage link created!";
})->middleware(['auth']);

//-- Cache
Route::get('/clear-cache', function () {
    Artisan::call('cache:clear');
    return "Cache cleared!";
})->middleware(['auth']);
