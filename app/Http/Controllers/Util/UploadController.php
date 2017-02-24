<?php

namespace App\Http\Controllers\Util;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    public function postImage(Request $request)
    {
        $file = $request->file("file");
        if ($file->isValid()) {
            $client = new Client();
            $fileName = time() . "." . $file->getClientOriginalExtension();
            $file->move(storage_path("app/tmp/"), $fileName);
            $response = $client->request('POST', 'http://up.mob.com/upload/image', [
                    'multipart' => [
                        [
                            'name' => 'file',
                            'contents' => fopen(storage_path("app/tmp/") . $fileName, 'r')
                        ]
                    ]
                ]
            );
            $body = $response->getBody();
            $obj = json_decode($body->getContents());
            $res['result'] = [
                "url" => $obj->url
            ];
            $res['status'] = 200;
        } else {
            $res['status'] = 404;
        }



        return response($res);
    }
}