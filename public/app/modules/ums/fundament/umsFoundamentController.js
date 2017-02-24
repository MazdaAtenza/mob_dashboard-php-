componentApp.controller("umsFundamentListController", ['$scope', 'umsSaveDate', function($scope, umsSaveDate){
	$scope.statisticsPlatform = umsSaveDate.tabs;		// 存放每次切换tab的数据

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
    		initTable(tabList, tabNo);					// 将cur_shown_list存放的数据展示出来
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
    		initTable(tabList, tabNo);		// 将cur_shown_list存放的数据展示出来
    	}
    };

    /**
	 * 点击切换tab
	 */
    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
       	allStatistics = umsStatisticsList[tab.value];		// 对应tab的所有数据
       	initCur_shown_list($scope.statisticsPlatform, tab.tabNo)
    };
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    };
}]);
