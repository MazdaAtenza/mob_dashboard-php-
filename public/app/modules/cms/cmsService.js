'use strict';

/**
 * @ngdoc function
 * @name prealarmFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prealarmFrontendApp
 */
componentApp.factory('cmsConfig', function () {
    return {
        articleType: [{
            name: "普通文章",
            type: "normoal",
            icon: "fa-newspaper-o"
        }, {
            name: "跳转文章",
            type: "link",
            icon: "fa-link"
        }, {
            name: "短视频",
            type: "video",
            icon: "fa-video-camera"
        }, {
            name: "图片",
            type: "picture",
            icon: "fa-picture-o"
        }],
        articleImageType: [{
            name: "无图模式",
            type: "normoal",
            icon: "fa-newspaper-o"
        }, {
            name: "左图模式",
            type: "link",
            icon: "fa-link"
        }, {
            name: "右图模式",
            type: "video",
            icon: "fa-video-camera"
        }, {
            name: "下1图模式",
            type: "picture",
            icon: "fa-picture-o"
        }, {
            name: "下3图模式",
            type: "picture",
            icon: "fa-picture-o"
        }]
    };
});

componentApp.factory("cmsArticleCategory", ['cache', 'promise', function (cache, promise) {
    return {
        list: function (data) {
            var url = API.CMS + 'category/list';
            return promise.post(data, url, angular.toJson(url) + angular.toJson(data), cache.list);
        },
        del: function (data) {
            var url = API.CMS + 'category/delete';
            return promise.post(data, url, angular.toJson(url) + angular.toJson(data), cache.list);
        },
        update: function (data) {
            var url = API.CMS + 'category/update';
            return promise.post(data, url, angular.toJson(url) + angular.toJson(data), cache.list);
        },
        move: function (data) {
            var url = API.CMS + 'category/move/article';
            return promise.post(data, url, angular.toJson(url) + angular.toJson(data), cache.list);
        }
    }
}])

componentApp.factory("cmsArticleContent", function (cache, promise) {
    return {
        contentList: {
            selectAll: true,
            tableContent: [
                {
                    draft: false,
                    top: true,
                    topValidity: "永久",
                    all: true,
                    hot: false,
                    hotValidity: "永久",
                    noComment: true,
                    recommend: false,
                    isChecked: false,
                    contentID: "1111111",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "游记、娱乐",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: true,
                    top: false,
                    topValidity: "永久",
                    all: true,
                    hot: false,
                    hotValidity: "还有1小时",
                    noComment: false,
                    recommend: true,
                    isChecked: false,
                    contentID: "2222222",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "游记",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: false,
                    top: true,
                    topValidity: "还有2天",
                    all: true,
                    hot: false,
                    hotValidity: "永久",
                    noComment: false,
                    recommend: false,
                    isChecked: false,
                    contentID: "3333333",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "娱乐",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: false,
                    top: true,
                    topValidity: "永久",
                    all: true,
                    hot: true,
                    hotValidity: "还有5小时",
                    noComment: true,
                    recommend: false,
                    isChecked: false,
                    contentID: "4444444",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "游记、娱乐",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: false,
                    top: false,
                    topValidity: "永久",
                    all: true,
                    hot: true,
                    hotValidity: "永久",
                    noComment: false,
                    recommend: true,
                    isChecked: false,
                    contentID: "5555555",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "游记",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: false,
                    top: false,
                    topValidity: "永久",
                    all: true,
                    hot: true,
                    hotValidity: "还有2天",
                    noComment: true,
                    recommend: false,
                    isChecked: false,
                    contentID: "6666666",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "游记、娱乐",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
                {
                    draft: false,
                    top: true,
                    topValidity: "还有4天",
                    all: true,
                    hot: true,
                    hotValidity: "永久",
                    noComment: false,
                    recommend: true,
                    isChecked: false,
                    contentID: "7777777",
                    articleTitle: "中国维和隐忍多年也不打仗？美专家一语中的让人醒悟",
                    articleClassify: "娱乐",
                    readingNum: 68,
                    priseNum: 25,
                    commentNum: 12,
                    operation: "最后一次修改",
                    fixDate: "2017-01-03"
                },
            ],
            delArticle: [],
            draftArticle: [],
            publicArticle: [],
            recommendArticle: [],
            hotArticle: [],
            noCommentArticle: [],
            topArticle: [],
            commentArticle: [],
            jumpArticle: [],
            shortVideo: [],
            imgArticle: [],
            classifyList: [],
            classifyName: [
                {key: 1, value: "娱乐"},
                {key: 2, value: "游记"},
            ],
        },
        filterOptions: {
            selectDate: {
                options: [
                    {
                        key: "1",
                        value: "注册时间"
                    },
                    {
                        key: "2",
                        value: "最后登录时间"
                    }
                ],
                setValue: "全部日期"
            },
            selectClassify: {
                options: [
                    {
                        key: "1",
                        value: "游记"
                    },
                    {
                        key: "2",
                        value: "娱乐"
                    }
                ],
                setValue: "所有分类"
            },
            selectArticle: {
                options: [
                    {
                        key: "1",
                        value: "全部文章",
                        name: "allArticle",
                        represent: "all"
                    },
                    {
                        key: "2",
                        value: "推荐文章",
                        name: "recommendArticle",
                        represent: "recommend"
                    },
                    {
                        key: "3",
                        value: "热门文章",
                        name: "hotArticle",
                        represent: "hot"
                    },
                    {
                        key: "4",
                        value: "禁止评论文章",
                        name: "noCommentArticle",
                        represent: "noComment"
                    }
                ],
                setValue: "全部文章"
            },
            selectType: {
                options: [
                    {
                        key: "1",
                        value: "普通文章"
                    },
                    {
                        key: "2",
                        value: "跳转文章"
                    },
                    {
                        key: "1",
                        value: "短视频"
                    },
                    {
                        key: "2",
                        value: "图片"
                    }
                ],
                setValue: "全部类型"
            }
        }
    }
});

componentApp.factory("checkboxValue", function () {
    return {
        openRecommend: {
            key: 1,
            value: false,
            linkID: "openRecommend"
        },
        openComment: {
            key: 2,
            value: false,
            linkID: "openComment"
        },
        openHot: {
            key: 3,
            value: false,
            linkID: "openHot"
        },
        openFilter: {
            key: 4,
            value: false,
            linkID: "openFilter"
        },
        openOwnSystem: {
            key: 5,
            value: false,
            linkID: "openOwnSystem"
        }

    }
})