/**
 * Created by mac on 2017/2/15.
 */
componentApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    //
    // Now set up the states

    $stateProvider
        
        .state('cms_article', {
            url: '/cms/article',
            templateUrl: MODULES_PATH + 'cms/article/article_list.html',
            controller: 'cmsArticleListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('cms_article_compose', {
            url: '/cms/article/compose',
            templateUrl: MODULES_PATH + 'cms/article/article_compose.html',
            controller: 'cmsArticleComposeController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        }).state('cms_article_compose_type', {
            url: '/cms/article/compose/:type',
            templateUrl: MODULES_PATH + 'cms/article/article_compose_type.html',
            controller: 'cmsArticleComposeController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        }).state('cms_category', {
            url: '/cms/category',
            templateUrl: MODULES_PATH + 'cms/category/category_list.html',
            controller: 'cmsCategoryListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        }).state('cms_comment', {
            url: '/cms/comment',
            templateUrl: MODULES_PATH + 'cms/comment/comment_list.html',
            controller: 'cmsCommentListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        }).state('cms_setting', {
            url: '/cms/setting',
            templateUrl: MODULES_PATH + 'cms/setting/setting.html',
            controller: 'cmsSettingController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        });

})