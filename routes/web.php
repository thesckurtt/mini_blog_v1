<?php

use App\Http\Controllers\AppController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/**
 * Site Routes
 */
Route::controller(AppController::class)
->group(function (){
    Route::get('/', 'index')->name('site.index');
    Route::get('/post/{slug}', 'post')->name('site.post');
});

/**
 * Dashboard Routes
 */
Route::controller(DashboardController::class)
->middleware('auth')
->prefix('/dashboard')
->group(function (){
    Route::get('/', 'index')->name('dashboard.index');
    // Outras rotas do DashboardController
});
