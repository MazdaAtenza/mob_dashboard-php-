<?php
/**
 * Created by PhpStorm.
 * User: luhua
 * Date: 2017/2/22
 * Time: 21:45
 */
namespace App\Libraries;

use GuzzleHttp\Client;

class CommonServer
{
    public static $httpClient;

    public function __construct()
    {
        self::$httpClient = new Client();
    }

    public static function cmsApi($params, $path)
    {
        $response = self::$httpClient->request('POST', $_ENV['CMS_API'] . $path, [
            'form_params' => $params
        ]);
        return self::response($response->getBody()->getContents());
    }

    public static function response($json)
    {
        return json_decode($json, true);
    }

    public static function umsApi($params, $path)
    {
        $response = self::$httpClient->request('POST', $_ENV['UMS_API'] . $path, [
            'form_params' => $params
        ]);
        return self::response($response->getBody()->getContents());
    }
}