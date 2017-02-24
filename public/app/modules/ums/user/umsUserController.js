'use strict';

/**
 * @ngdoc function
 * @name prealarmFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prealarmFrontendApp
 */
componentApp.controller('umsUserDetailController', ['$scope', function ($scope) {
    $scope.selectedCountry = "中国";
    $scope.selectcountrys = [
        {id: 0, countryName: "中国"},
        {id: 1, countryName: "美国"},
        {id: 2, countryName: "法国"},
        {id: 3, countryName: "俄罗斯"},
        {id: 4, countryName: "澳大利亚"}
    ];

    $scope.selectedProvince = "黑龙江";
    $scope.selectProvinces = [
        {id: 0, provinceName: "黑龙江"},
        {id: 1, provinceName: "吉林"},
        {id: 2, provinceName: "辽宁"},
        {id: 3, provinceName: "西藏"},
        {id: 4, provinceName: "青海"}
    ];

    $scope.selectedCity = "北京";
    $scope.selectCitys = [
        {id: 0, cityName: "北京"},
        {id: 1, cityName: "上海"},
        {id: 2, cityName: "天津"},
        {id: 3, cityName: "深圳"},
        {id: 4, cityName: "广州"}
    ];
}]);

componentApp.controller('umsUserFieldsController', ['$scope', function ($scope) {

}]);

componentApp.controller('umsUserFieldsAddController', ['$scope', function ($scope) {

}]);

componentApp.controller('umsUserFieldsOptionController', ['$scope', function ($scope) {

}]);

componentApp.controller('umsUserListController', ['$scope', 'umsUserNumberFilter', 'umsUserNumberList', 'umsSaveFieldDate', function ($scope, umsUserNumberFilter, umsUserNumberList, umsSaveFieldDate) {
    $scope.selectedType = "昵称";
    $scope.selectTypes = [
        {id: 0, typeName: "昵称"},
        {id: 1, typeName: "ID"},
        {id: 2, typeName: "手机号码"},
    ];

    $scope.filterWordsChange = function(selectedType){
        console.log(selectedType);
    }

    /**
     * 过滤选项
     */
    $scope.filterOptions = umsUserNumberFilter;

    /**
     * 从服务器取得数据
     */
    $scope.userInfoList = umsUserNumberList;

    /**
     * 每次显示在table中的数据
     */
    $scope.tableContent = umsUserNumberList;

   /**
     * 初始化table界面
     */
    function initTable(tabList){
        $scope.tableContent = tabList;
    }

    /**
     * 当前显示内容
     */
    function initCur_shown_list(tabList){
        if(tabList.cur_shown_list.length > 0){
            initTable(tabList);                 // 将cur_shown_list存放的数据展示出来
        }else{
            if(tabList.thisFieldDate.length <= tabList.cur_page * tabList.page_size){
                for(var i=0; i<tabList.thisFieldDate.length - (tabList.cur_page-1) * tabList.page_size; i++){
                    tabList.cur_shown_list[i] = tabList.thisFieldDate[(tabList.cur_page-1) * tabList.page_size +i];
                }
            }else {
                for(var j=0; j<tabList.page_size; j++){
                    tabList.cur_shown_list[j] = tabList.thisFieldDate[(tabList.cur_page-1) * tabList.page_size+j];
                }
            }
            initTable(tabList);     // 将cur_shown_list存放的数据展示出来
        }
    };

     /**
     * 点击跳转页面
     */
    $scope.foo = function(tableContent, page){
        if(page == tableContent.cur_page){
            return
        }
        
        tableContent.cur_shown_list = [];
        tableContent.cur_page = page;
        initCur_shown_list(tableContent);
    };

    
    /**
     * 查询参数
     * @type {{sortType: string, sex: string, status: string, keyword: string}}
     */
    $scope.filterParam = {
        sortType: "",
        sex: "",
        status:"",
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
        console.log($scope.filterParam)
        console.log($scope.filterOptions)
    }

    /**
     * 向服务器发送请求， 参数为组合好的 $scope.filterParam
     */
    $scope.filterList = function(){

    }
    /**
     * 删除会员
     */
    $scope.deleteMember = function(){

    }
    /**
     * 加入黑名单
     */
    $scope.addBlackList = function(){

    }

}]);
