<?php

namespace App\Http\Controllers\Product\Cms;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Exception;
use App\Libraries\CommonServer;

class ArticleController extends Controller
{
    /**
     * 获取文章列表
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postList(Request $request)
    {
        try {
            if (!$request->has("dataType")) {
                throw new Exception("参数不完整", 404);
            }
            $params['dataType'] = $request->input("dataType");//文章数据类型。0=全部，1=草稿，2=发布，3=回收站
            $params['type'] = $request->input("type");//文章类型。0=全部文章，1=推荐文章(暂无)，2=热门文章，3=禁止评论文章
            $params['articleType'] = $request->input("articleType");//文章展示类型。0=全部，1=普通文章，2=跳转文章，3=短视频文章，4=图片文章
            $params['sort'] = $request->input("sort", "-createAt"); //name:升序，-name:降序。默认：使用-createAt排序
            $params['searchs'] = $request->input("searchs"); //查询条件：[{"title" : "测试"}]  当前版本只支持文章标题模糊查询
            $params['startDate'] = $request->input("startDate"); //开始日期：yyyy-MM-dd
            $params['endDate'] = $request->input("endDate"); //结束日期：yyyy-MM-dd
            $params['pageNo'] = (int)$request->input("pageNo", 1);//页号。默认：1
            $params['pageSize'] = (int)$request->input("pageSize", 20);//页面容量。默认：20
            //$apiResult = CommonServer::cmsApi($params, "article/list");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    public function postUpdate(Request $request)
    {
        try {
            if (
                !$request->has("dataType") ||
                !$request->has("title") ||
                !$request->has("articleType") ||
                !$request->has("displayType") ||
                !$request->has("tags") ||
                !$request->has("categoryIds")
            ) {
                throw new Exception("参数不完整", 404);
            }
            $params['articleId'] = $request->input("articleId");//文章id
            $params['dataType'] = $request->input("dataType");//1=草稿，2=发布，3=回收站。不同的保存数据方式，值不同。
            $params['title'] = $request->input("title");
            $params['articleType'] = $request->input("articleType");//文章类型。1=普通文章，2=跳转文章，3=短视频文章，4=图片文章
            $params['displayType'] = $request->input("displayType");//显示类型。0=无图，1=左一，2=右一，3=下一，4=下三
            $params['displayImgs'] = $request->input("displayImgs");//展示图片集合。[{"url":"http://img.mob.com", "desc":"封面图片"}]
            $params['tags'] = $request->input("tags");//标签间使用英文逗号分割，标签总数不超过50个，单个标签小于24字节，统一使用utf-8编码，英文每个字符占1字节，中文每个字占3字节
            $params['categoryIds'] = $request->input("categoryIds");//文章分类Id。单个或多个，单个分类使用英文逗号连接
            $params['src'] = $request->input("src"); //文章来源
            $params['author'] = $request->input("author");
            $params['imgCover'] = $request->input("imgCover");//当文章类型为：图片文章时，出现该字段
            $params['videoUrl'] = $request->input("videoUrl");//当文章类型为：短视频文章时，出现该字段
            $params['vidoDesc'] = $request->input("vidoDesc");//当文章类型为：短视频文章时，出现该字段
            $params['content'] = $request->input("content");//文章内容
            $params['top'] = $request->input("top");//是否置顶。0=非置顶，1=分类置顶，2=全部置顶。默认：0
            $params['topUsefulLife'] = $request->input("topUsefulLife", 0);//置顶的有效期。如果不设置则永久有效，默认：0（永久有效）
            $params['hot'] = $request->input("hot", 0);//是否是热门。0=否，1=是。默认：0
            $params['hotUsefulLife'] = $request->input("hotUsefulLife", 0);//热门的有效期。如果不设置则永久有效，默认：0（永久有效）
            $params['comment'] = $request->input("comment");//0=禁止评论，1=允许评论，默认：1。跳转文章无评论权限
            //$apiResult = CommonServer::cmsApi($params, "article/update");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 获取文章详情
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postItem(Request $request)
    {
        try {
            if (!$request->has("articleId")) {
                throw new Exception("参数不完整", 404);
            }
            $params['articleId'] = $request->input("articleId");//文章id
            //$apiResult = CommonServer::cmsApi($params, "article/get");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 获取分类
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postCategory(Request $request)
    {
        try {
            if (!$request->has("size") || !$request->has("commonSize")) {
                throw new Exception("参数不完整", 404);
            }
            $params['size'] = (int) $request->input("size", 5);//文章分类的数量，默认：5
            $params['commonSize'] = (int) $request->input("commonSize", 10);//文章id
            //$apiResult = CommonServer::cmsApi($params, "article/categorys");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 获取常用标签
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postTag(Request $request)
    {
        try {
            if (!$request->has("size")) {
                throw new Exception("参数不完整", 404);
            }
            $params['size'] = (int) $request->input("size", 10);//返回常用标签的数量，默认10
            //$apiResult = CommonServer::cmsApi($params, "common/tags");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 删除文章
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postDelete(Request $request)
    {
        try {
            if (!$request->has("articleIds")) {
                throw new Exception("参数不完整", 404);
            }
            $params['articleIds'] = (int) $request->input("articleIds");//单个或多个文章id，多个文章Id使用英文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "article/del");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 文章分类更新
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postCategoryUpdate(Request $request)
    {
        try {
            if (!$request->has("categoryIds") || !$request->has("articleIds")) {
                throw new Exception("参数不完整", 404);
            }
            $params['categoryIds'] = $request->input("categoryIds");//单个或多个文章分类Id，多个分类Id使用英文逗号连接
            $params['articleIds'] = $request->input("articleIds");//单个或多个文章id，多个文章Id使用英文逗号连接
            //$apiResult = CommonServer::cmsApi($params, "article/move/category");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }

    /**
     * 获取文章统计信息
     * @param Request $request
     * @return \Laravel\Lumen\Http\ResponseFactory|\Symfony\Component\HttpFoundation\Response
     */
    public function postStats(Request $request)
    {
        try {
            //$apiResult = CommonServer::cmsApi([], "article/data/stats");
            $res['status'] = 200;
        } catch (Exception $e) {
            $res['status'] = 403;
            $res['msg'] = $e->getMessage();
        }
        return response($res, $res['status']);
    }
}