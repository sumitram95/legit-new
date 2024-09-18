<?php

use App\Http\Controllers\NewAiPolicyReadMarkNotificationController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

require __DIR__ . "/frontend/web.php";
// auth for user
require __DIR__ . "/auth.php";
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




// for read mark

use App\Http\Controllers\NotificationController;

Route::post('/notifications/mark-as-read', [NewAiPolicyReadMarkNotificationController::class, 'markAsRead'])
    ->name('notifications.markAsRead');


