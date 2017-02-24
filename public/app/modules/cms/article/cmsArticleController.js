componentApp.controller('cmsArticleListController', ['$scope', 'cmsArticleContent', function ($scope, cmsArticleContent) {
    /**
     * 列表内容
     * @type {{sortType: *[], sex: *[], status: *[]}}
     */
    $scope.contentList = cmsArticleContent.contentList;
    $scope.shownList = $scope.contentList.tableContent;

    /**
     * 当前显示列表
     */
    $scope.currentList = [];

    /**
     * 分页
     */
    function initPaging(shownList) {
        /**
         * 列表总数量
         */
        $scope.totleNum = shownList.length;

        /**
         * 当前显示页数
         */
        $scope.currentPage = 1;

        /**
         * 每页显示数量
         */
        $scope.pageSize = 3;
    };

    initPaging($scope.contentList.tableContent);

    /**
     * 全选按钮是否打钩
     */
    $scope.checked = {
        isChecked: false
    }

    /**
     * 所有列表
     */
    $scope.allList = [
        {No: 0, articleList: [], articleNum: 0, name: "全部文章"},
        {No: 1, articleList: [], articleNum: 0, name: "回收站"},
        {No: 2, articleList: [], articleNum: 0, name: "已发布文章"},
        {No: 3, articleList: [], articleNum: 0, name: "草稿"},
    ];

    $scope.allList[0].articleNum = $scope.totleNum;

    /**
     * 初始化tab部分列表
     */
    function initTabArticle() {
        $scope.allList[0].articleList = $scope.contentList.tableContent;
        $scope.allList[1].articleList = $scope.contentList.delArticle;
        $scope.allList[2].articleList = $scope.contentList.publicArticle;
        $scope.allList[3].articleList = $scope.contentList.draftArticle;
    }

    initTabArticle();

    /**
     * 初始化文章类型列表
     */
    function initArticleType() {
        for (var i = 0; i < $scope.contentList.tableContent.length; i++) {
            if ($scope.contentList.tableContent[i].recommend) {
                $scope.contentList.recommendArticle.push($scope.contentList.tableContent[i]);
            }
            ;
            if ($scope.contentList.tableContent[i].hot) {
                $scope.contentList.hotArticle.push($scope.contentList.tableContent[i]);
            }
            ;
            if ($scope.contentList.tableContent[i].noComment) {
                $scope.contentList.noCommentArticle.push($scope.contentList.tableContent[i]);
            }
            ;
            if ($scope.contentList.tableContent[i].top) {
                $scope.contentList.topArticle.push($scope.contentList.tableContent[i]);
            }
            ;
        }
        console.log($scope.contentList);
    };

    initArticleType();

    /**
     * 设置当前显示内容
     */

    function setCurrentList(shownList, cur_page) {
        $scope.currentList = [];
        $scope.checked.isChecked = false;
        if (shownList.length <= 0) {
            return;
        }
        if (shownList.length > cur_page * $scope.pageSize) {
            for (var i = 0; i < $scope.pageSize; i++) {
                $scope.currentList[i] = shownList[(cur_page - 1) * $scope.pageSize + i];
            }
        } else if (shownList.length <= cur_page * $scope.pageSize && shownList.length > (cur_page - 1) * $scope.pageSize) {
            for (var m = 0; m < shownList.length - (cur_page - 1) * $scope.pageSize; m++) {
                $scope.currentList[m] = shownList[(cur_page - 1) * $scope.pageSize + m];
            }
        } else if (shownList.length == (cur_page - 1) * $scope.pageSize) {
            for (var j = 0; j < $scope.pageSize; j++) {
                $scope.currentList[j] = shownList[(cur_page - 2) * $scope.pageSize + j];
            }
        }
        initPaging(shownList);
        //  $scope.allList[1].articleNum = shownList.length;
    };

    setCurrentList($scope.contentList.tableContent, 1);

    /**
     * 切换tab表单
     */
    $scope.changeTabs = function (index) {
        $scope.shownList = $scope.allList[index].articleList
        console.log($scope.shownList);
        for (var i = 0; i < $scope.shownList.length; i++) {
            $scope.shownList[i].isChecked = false;
        }
        setCurrentList($scope.allList[index].articleList, 1);
    }

    /**
     * 过滤选项
     * @type {{sortType: *[], sex: *[], status: *[]}}
     */
    $scope.filterOptions = cmsArticleContent.filterOptions;

    /**
     * 查询参数
     * @type {{allDate: string, allClassify: string, allArticle: string, allType: string, keyword: string}}
     */
    $scope.filterParam = {
        selectDate: "",
        selectClassify: "",
        selectArticle: "",
        selectType: "",
        keyword: ""
    }
    /**
     * 选项进行选择
     * @param type
     * @param obj
     */
    $scope.setOption = function (type, obj) {
        $scope.filterParam[type] = obj.key;
        $scope.filterOptions[type].setValue = obj.value;
    }

    /**
     * 向服务器发送请求， 参数为组合好的 $scope.filterParam
     */
    $scope.filterList = function () {
        console.log($scope.filterParam);
        console.log($scope.filterOptions);

    }
    /**
     * 删除文章
     */
    $scope.deleteArticle = function () {
        for (var i = 0; i < $scope.pageSize; i++) {
            if ($scope.currentList[i].isChecked) {
                cmsArticleContent.contentList.delArticle.push($scope.contentList.tableContent.splice(($scope.currentPage - 1) * $scope.pageSize + i, 1)[0]);
                $scope.totleNum = cmsArticleContent.contentList.tableContent.length;
                $scope.allList[0].articleNum--;
                $scope.allList[1].articleNum++;
                setCurrentList($scope.contentList.tableContent, $scope.currentPage);
                i--;
            }
        }
        initTabArticle();
    }

    /**
     * checkbox全选设置
     */
    $scope.selectAll = function () {
        if ($scope.checked.isChecked) {
            for (var i = 0; i < $scope.currentList.length; i++) {
                $scope.currentList[i].isChecked = true;
            }
        } else {
            for (var i = 0; i < $scope.currentList.length; i++) {
                $scope.currentList[i].isChecked = false;
            }
        }
    }

    /**
     * checkbox单个选择设置
     */
    $scope.selectOne = function () {
        for (var i = 0; i < $scope.currentList.length; i++) {
            if (!$scope.currentList[i].isChecked) {
                $scope.checked.isChecked = false;
                break;
            }
        }
        $scope.checked.isChecked = i == $scope.currentList.length ? true : false;
    }

    /**
     * 点击跳转页面
     */
    $scope.foo = function (a, b) {
        var m = 0;
        $scope.checked.isChecked = false;
        $scope.currentList = [];
        console.log(a)
        if ($scope.currentPage == b) {
            return
        } else {
            if ($scope.pageSize * b > $scope.totleNum) {
                for (var i = $scope.pageSize * (b - 1); i < $scope.totleNum; i++) {
                    $scope.currentList[m++] = a[i];
                }
            } else {
                for (var j = $scope.pageSize * (b - 1); j < $scope.pageSize * (b - 1) + $scope.pageSize; j++) {
                    $scope.currentList[m++] = a[j];
                }
            }
        }
        $scope.currentPage = b;
    }

    /**
     * 控制是否弹出移动列表项
     */
    $scope.popup = {
        name: ""
    }

    /**
     * 要移动的文章
     */
    $scope.moveItems = [];

    /**
     * 移动到
     */
    $scope.moveArticle = function () {
        var m = 0;
        $scope.moveItems = [];
        for (var i = 0; i < $scope.currentList.length; i++) {
            if (!$scope.currentList[i].isChecked) {
                m++;
            } else {
                $scope.moveItems.push($scope.contentList.tableContent[($scope.currentPage - 1) * $scope.pageSize + i]);
            }
        }
        if (m == $scope.currentList.length) {
            $scope.popup.name = "";
            console.log("请选择要移动的文章！");
        } else {
            $scope.popup.name = "#moveArticle";
        }
    }

    /**
     * 选择对应移动到的位置
     */
    $scope.selectMoveTo = function (item, article) {
        console.log(item.represent);
        console.log(article[0]);
        if (article[0][item.represent]) {
            console.log("该文章已经在" + item.value + "里了！");
        } else {
            console.log($scope.contentList[item.name]);
            $scope.contentList[item.name].push(article[0]);
            debugger
            console.log($scope.contentList[item.name]);
        }

    }

}]);

componentApp.controller('cmsArticleComposeController', ['$scope', '$state', 'cmsConfig', 'Upload', '$timeout', 'cmsArticleCategory', function ($scope, $state, cmsConfig, Upload, $timeout, cmsArticleCategory) {
    /**
     * 获取分类
     */
    cmsArticleCategory.list({
        "pageNo" : 1,
        "pageSize" : 5
    }).then(function(resp){
        $scope.categorys = resp.data.result.list;

    });
    $scope.articleType = cmsConfig.articleType;
    $scope.currentType = $state.params.type;
    $scope.articleImageType = cmsConfig.articleImageType;
    $scope.progressPercentage = 0;
    $scope.upload = function (file) {
        if (!file) {
            return;
        }
        Upload.upload({
            url: API_HOST + '/util/upload/image',
            method: 'POST',
            file: file,
            sendFieldsAs: 'form'
        }).then(function (resp) {
            console.log(resp);
            $scope.imageUrl = resp.data.result.url;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            if ($scope.progressPercentage == 100) {
                $timeout(function(){
                    $scope.progressPercentage = 0;
                }, 1000)
            }
        });
    };
}]);