componentApp.controller('umsFieldListController', ['$scope', 'fieldSettingDate', 'umsSaveFieldDate', function ($scope, fieldSettingDate, umsSaveFieldDate) {
	$scope.selectedType = "全部字段";
	$scope.selectTypes = [
		{id: 0, typeName: "全部字段"},
		{id: 1, typeName: "基本资料字段"},
		{id: 2, typeName: "通用资料字段"},
		{id: 3, typeName: "社交资料字段"},
		{id: 4, typeName: "自定义资料字段"}
	];

	/**
	 * 从服务器取得数据
	 */
	$scope.fieldSetting = fieldSettingDate;

	/**
	 * 每次显示在table中的数据
	 */
	$scope.tableContent = umsSaveFieldDate;
	
	/**
	 * 将所有数据分类保存
	 */
	function initClassify(){
		return {
			thisFieldDate: [],
	        cur_shown_list:[], 
	        cur_page: 1, 
	        page_size: 3
		}
	};
	$scope.allFileds = initClassify();
	$scope.baseFileds = initClassify();
	$scope.commonFileds = initClassify();
	$scope.socialFileds = initClassify();
	$scope.userDefinedFileds = initClassify();

	$scope.allFileds.thisFieldDate = $scope.fieldSetting.fieldContent;

	function classifyFields(){
		for(var i=0; i<fieldSettingDate.fieldContent.length; i++){
			if(fieldSettingDate.fieldContent[i].classify == "基本资料字段"){
				$scope.baseFileds.thisFieldDate.push(fieldSettingDate.fieldContent[i]);
			}else if(fieldSettingDate.fieldContent[i].classify == "通用资料字段"){
				$scope.commonFileds.thisFieldDate.push(fieldSettingDate.fieldContent[i]);
			}else if(fieldSettingDate.fieldContent[i].classify == "社交资料字段"){
				$scope.socialFileds.thisFieldDate.push(fieldSettingDate.fieldContent[i]);
			}else if(fieldSettingDate.fieldContent[i].classify == "自定义资料字段"){
				$scope.userDefinedFileds.thisFieldDate.push(fieldSettingDate.fieldContent[i]);
			}
		}
	};

	classifyFields();

	initCur_shown_list($scope.allFileds);

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
    		initTable(tabList);					// 将cur_shown_list存放的数据展示出来
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
    		initTable(tabList);		// 将cur_shown_list存放的数据展示出来
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
     * 筛选
     */
    $scope.filterWordsChange = function(selectedType){
    	if(selectedType == "基本资料字段"){
    		initCur_shown_list($scope.baseFileds);
		}else if(selectedType == "通用资料字段"){
			initCur_shown_list($scope.commonFileds);
		}else if(selectedType == "社交资料字段"){
			initCur_shown_list($scope.socialFileds);
		}else if(selectedType == "自定义资料字段"){
			initCur_shown_list($scope.userDefinedFileds);
		}else if(selectedType == "全部字段"){
			initCur_shown_list($scope.allFileds);
		}
    }
}]);

componentApp.controller('umsFieldAddController', ['$scope', function ($scope) {

}]);

componentApp.controller('umsFieldOptionController', ['$scope', function ($scope) {

}]);