<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get("/backend/dashboard", function () {
//     return 'backend dashboard';
// });

Route::get('/backend/dashboard', function () {
    return Inertia::render('Backend/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
