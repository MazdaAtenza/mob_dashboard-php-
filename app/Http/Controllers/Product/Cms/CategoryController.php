<?php

namespace App\Http\Controllers\Product\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Exception;
use App\Libraries\CommonServer;

class CategoryController extends Controller
{

    /**
     * 新增或者修改分类
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postUpdate(Request $request)
    {
        try{
            if(!$request->has("name") || $request->has("order")) {
                throw new Exception("参数不完整", 404);
            }
            $params['name'] = $request->input("name");//分类名称
            $params['order'] = (int) $request->input("order");//序号，用于排序，大于0的整数。默认：1
            //$apiResult = CommonServer::cmsApi($params, "category/update");
            $res['status'] = 200;
        } catch(Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 获取分类列表
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postList(Request $request)
    {
        try{
            $params['pageNo'] = $request->input("pageNo", 1);
            $params['pageSize'] = $request->input("pageSize", 1);
            $faker = \Faker\Factory::create();
            //todo 两个参数的大小为 0 < x < 200
            //$apiResult = CommonServer::cmsApi($params, "category/list");

            $items = [];
            for ($i = 0; $i < $params['pageSize']; $i++) {
                $items[] = [
                    "id" => $i,
                    "name" => $faker->firstName,
                    "parentId" => $faker->randomNumber,
                    "order" => $faker->randomDigit,
                    "articleNumber" => $faker->randomDigit
                ];
            }
            $res['status'] = 200;
            $res['result'] = [
                "pageNo" => $params['pageNo'],
                "pageSize" => $params['pageSize'],
                "total" => $params['pageSize'],
                "list" => $items
            ];
        } catch(Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);

    }

    /**
     * 删除分类
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postDelete(Request $request)
    {
        try{
            if(!$request->has("categoryIds")) {
                throw new Exception("参数不完整", 404);
            }
            $params['categoryIds'] = $request->input("categoryIds");//分类的单个或者多个id，多个id使用英文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "category/del");
            $res['status'] = 200;
        } catch(Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 移动分类
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postMoveArticle(Request $request)
    {
        try{
            if(!$request->has("categoryIds") || !$request->has("ids")) {
                throw new Exception("参数不完整", 404);
            }
            $params['categoryIds'] = $request->input("categoryIds"); //当前分类的单个或多个Id，多个Id使用英文逗号连接
            $params['ids'] = $request->input("ids"); //要移动到目标分类的单个或多个Id，多个Id使用英文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "category/move/article");
            $res['status'] = 200;
        } catch(Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }
}
