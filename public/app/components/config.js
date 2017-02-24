/**
 * Created by mac on 2017/2/15.
 */
var APP_PATH = "./app/";
var MODULES_PATH = APP_PATH + "modules/";
var API_HOST = "http://d.mob.com/";
var API = {
    SMS: API_HOST + "api/sms/",
    SHARE: API_HOST + "api/share/",
    REC: API_HOST + "api/rec/",
    UMS: API_HOST + "api/ums/",
    CMS: API_HOST + "api/cms/",
}
var APP_NAV = [
    {
        "title" : "概况",
        "url" : "dashboard",
        "children": false
    },
    {
        "title" : "设置",
        "url" : "setting",
        "children": false
    },
    {
        "title" : "产品中心",
        "url" : "production",
        "children": false
    },
    {
        "title" : "用户系统-概况",
        "url" : false,
        "children": [
            {
                "title" : "概况",
                "url" : "ums_fundament",
            },
            {
                "title" : "用户列表",
                "url" : "ums_user",
            },
            {
                "title" : "字段管理",
                "url" : "ums_field",
            },
            {
                "title" : "数据统计",
                "url" : "ums_statistics",
            },
            {
                "title" : "基本设置 ",
                "url" : "ums_setting",
            },        
        ]
    },
    {
        "title" : "CMS系统",
        "url" : false,
        "children": [
            {
                "title" : "所有文章",
                "url" : "cms_article",
            },
            {
                "title" : "写文章",
                "url" : "cms_article_compose",
            },
            {
                "title" : "分类目录",
                "url" : "cms_category",
            },
            {
                "title" : "评论管理",
                "url" : "cms_comment",
            },
            {
                "title" : "设置",
                "url" : "cms_setting",
            }
        ]
    }
]
componentApp.config(function ($httpProvider) {

    $httpProvider.interceptors.push(function ($timeout, $q, $injector) {
        var $http, $state;

        // this trick must be done so that we don't receive
        // `Uncaught Error: [$injector:cdep] Circular dependency found`
        $timeout(function () {
            $http = $injector.get('$http');
            $state = $injector.get('$state');
        });

        return {
            responseError: function (rejection) {
                if (rejection.status !== 401) {
                    return rejection;
                }

                var deferred = $q.defer();

                /**
                 * 未登录，进行登陆跳转
                 */

                return deferred.promise;
            }
        };
    });

});