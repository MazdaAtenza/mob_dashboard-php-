<?php
/**
 * Created by PhpStorm.
 * User: luhua
 * Date: 2017/2/21
 * Time: 16:27
 */

/**
 * 文章分类路由
 */
$app->post('/cms/category/list', 'App\Http\Controllers\Product\Cms\CategoryController@postList'); //分类列表
$app->post('/cms/category/delete', 'App\Http\Controllers\Product\Cms\CategoryController@postDelete'); //删除分类
$app->post('/cms/category/update', 'App\Http\Controllers\Product\Cms\CategoryController@postUpdate'); //添加或者更新分类
$app->post('/cms/category/move/article', 'App\Http\Controllers\Product\Cms\CategoryController@postMoveArticle'); //移动分类下的文章

/**
 * 文章路由
 */
$app->post('/cms/article/list', 'App\Http\Controllers\Product\Cms\ArticleController@postList'); //文章列表
$app->post('/cms/article/item', 'App\Http\Controllers\Product\Cms\ArticleController@postItem'); //单个文章详情
$app->post('/cms/article/stats', 'App\Http\Controllers\Product\Cms\ArticleController@postStats'); //文章统计信息
$app->post('/cms/article/category', 'App\Http\Controllers\Product\Cms\ArticleController@postCategory'); //文章分类
$app->post('/cms/article/tag', 'App\Http\Controllers\Product\Cms\ArticleController@postTag'); //文章标签
$app->post('/cms/article/update', 'App\Http\Controllers\Product\Cms\ArticleController@postUpdate'); //编辑或者添加文章
$app->post('/cms/article/delete', 'App\Http\Controllers\Product\Cms\ArticleController@postDelete'); //文章删除
$app->post('/cms/article/category/update', 'App\Http\Controllers\Product\Cms\ArticleController@postCategoryUpdate'); //文章分类更新
$app->post('/cms/article/restore', 'App\Http\Controllers\Product\Cms\ArticleController@postRestore'); //文章从回收站中恢复

/**
 * 文章评论管理
 */

$app->post('/cms/comment/list', 'App\Http\Controllers\Product\Cms\CommentController@postList'); //文章评论列表
$app->post('/cms/comment/restore', 'App\Http\Controllers\Product\Cms\CommentController@postRestore'); //文章评论从回收站中恢复
$app->post('/cms/comment/stats', 'App\Http\Controllers\Product\Cms\CommentController@postStats'); //文章评论统计
$app->post('/cms/comment/delete', 'App\Http\Controllers\Product\Cms\CommentController@postDelete'); //文章评论删除







