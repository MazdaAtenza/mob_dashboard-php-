<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
/**
 * 路由分组
 * 资讯SDK -> cms
 * 用户SDK -> ums
 *
 */
$app->group(['prefix' => 'api'], function ()  use ($app) {
    require (__DIR__ . '/Routes/cms.php');
    require (__DIR__ . '/Routes/util.php');
});
