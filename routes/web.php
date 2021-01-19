<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/create_token', function(){

    $permissions = ['user:update']; // 権限
    $user = \App\User::find(1);
    $token = $user->createToken('my-api-token', $permissions);
    echo $token->plainTextToken;    // トークンを表示
    
});

Route::get('{any}', function () {
    return view('index');
})->where('any', '.*');