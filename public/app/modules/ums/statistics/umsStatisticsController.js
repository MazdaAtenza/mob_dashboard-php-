componentApp.controller("umsStatisticsController", ["$scope", "umsStatisticsList", "umsSaveDate", function($scope, umsStatisticsList, umsSaveDate){
    /**
     * 初始化数据
     */
    $scope.allStatistics = umsStatisticsList;       // 暂存从服务器获取到的数据

    /**
     * 将服务器的数据分类存放到本地
     */
    umsSaveDate.tabs[0].statisticsList = umsStatisticsList.allInfoList;
    umsSaveDate.tabs[1].statisticsList = umsStatisticsList.IOSInfoList;
    umsSaveDate.tabs[2].statisticsList = umsStatisticsList.AndroidInfoList;

    $scope.statisticsPlatform = umsSaveDate.tabs;       // 存放每次切换tab的数据

    /**
     * 每次呈现到table界面的数据
     */
    $scope.currentTab = 'one.tpl.html';
    $scope.tableContent = [];
    $scope.tableShownList = {};
    $scope.platformNo = 0;      // 当前平台编号


    for(var m=0; m<umsSaveDate.tabs.length; m++){
        $scope.tableContent[m] = {};            //暂存对应到每个平台的数据
    }

    /**
     * 初始化第一次呈现界面时的数据
     */
    initCur_shown_list($scope.statisticsPlatform, 0);   

    /**
     * 初始化table界面
     */
    function initTable(tabList, tabNo){
        $scope.tableContent = tabList;
        $scope.tableShownList = $scope.tableContent[tabNo];
        $scope.platformNo = tabNo;
    }

    /**
     * 当前tab页显示内容
     */
    function initCur_shown_list(tabList, tabNo){
        if(tabList[tabNo].cur_shown_list.length > 0){
            initTable(tabList, tabNo);                  // 将cur_shown_list存放的数据展示出来
        }else{
            if(tabList[tabNo].statisticsList.length <= tabList[tabNo].cur_page * tabList[tabNo].page_size){
                for(var i=0; i<tabList[tabNo].statisticsList.length; i++){
                    tabList[tabNo].cur_shown_list[i] = tabList[tabNo].statisticsList[i];
                }
            }else {
                for(var j=0; j<tabList[tabNo].page_size; j++){
                    tabList[tabNo].cur_shown_list[j] = tabList[tabNo].statisticsList[j];
                }
            }
            initTable(tabList, tabNo);      // 将cur_shown_list存放的数据展示出来
        }
    };

    /**
     * 点击跳转页面
     */
    $scope.foo = function(tableContent, page, platformNo){
        if(page == tableContent[platformNo].cur_page){
            return
        }
        
        tableContent[platformNo].cur_shown_list = [];
        if(tableContent[platformNo].statisticsList.length <= page * tableContent[platformNo].page_size){
            for(var i=0; i<tableContent[platformNo].statisticsList.length - (page-1) * tableContent[platformNo].page_size; i++){
                tableContent[platformNo].cur_shown_list[i] = tableContent[platformNo].statisticsList[(page-1) * tableContent[platformNo].page_size+i];
            }
        }else{
            for(var j=0; j<tableContent[platformNo].page_size; j++){
                tableContent[platformNo].cur_shown_list[j] = tableContent[platformNo].statisticsList[(page-1) * tableContent[platformNo].page_size+j];
            }
        }
        initCur_shown_list(tableContent, tableContent[platformNo].tabNo);
    }
    
    /**
     * 点击切换tab
     */
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
        allStatistics = umsStatisticsList[tab.value];       // 对应tab的所有数据
        initCur_shown_list($scope.statisticsPlatform, tab.tabNo)
    };
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };


}]);