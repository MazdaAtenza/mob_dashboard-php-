<?php
/**
 * Created by PhpStorm.
 * User: luhua
 * Date: 2017/2/22
 * Time: 14:43
 */

$app->post('/util/upload/image', 'App\Http\Controllers\Util\UploadController@postImage');
$app->post('/util/upload/video', 'App\Http\Controllers\Util\UploadController@postVideo');