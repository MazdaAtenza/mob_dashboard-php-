<?php

namespace App\Http\Controllers\Product\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Exception;
use App\Libraries\CommonServer;

class CommentController extends Controller
{
    public function postList(Request $request)
    {
        try {
            if (!$request->has("dataType")) {
                throw new Exception("参数不完整", 404);
            }
            $params['dataType'] = $request->input("dataType");//0=全部，1=正常评论，2=垃圾评论，3=回收站评论。默认：0
            $params['pageNo'] = (int)$request->input("pageNo", 1);//页号。默认：1
            $params['pageSize'] = (int)$request->input("pageSize", 20);//页面容量。默认：20
            //$apiResult = CommonServer::cmsApi($params, "comment/list");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    public function postRestore(Request $request)
    {
        try {
            if (!$request->has("commentIds")) {
                throw new Exception("参数不完整", 404);
            }
            $params['commentIds'] = $request->input("commentIds");//一个或多个评论id。多个评论id使用引文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "comment/draft/restore");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    public function postStats(Request $request)
    {
        try {
            //$apiResult = CommonServer::cmsApi([], "comment/stats");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    public function postDelete(Request $request)
    {
        try {
            if (!$request->has("commentIds")) {
                throw new Exception("参数不完整", 404);
            }
            $params['commentIds'] = $request->input("commentIds");//需要删除的一个或多个评论id，多个评论id使用英文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "comment/del");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }
}