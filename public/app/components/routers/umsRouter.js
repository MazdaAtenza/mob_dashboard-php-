/**
 * Created by mac on 2017/2/15.
 */
componentApp.config(function ($stateProvider, $urlRouterProvider) {
  
    $stateProvider
        .state('ums_fundament', {
            url: '/ums/fundament',
            templateUrl: MODULES_PATH + 'ums/fundament/fundament_list.html',
            controller: 'umsFundamentListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('ums_user', {
            url: '/ums/user',
            templateUrl: MODULES_PATH + 'ums/user/user_list.html',
            controller: 'umsUserListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('ums_user_detail', {
            url: '/ums/user/detail',
            templateUrl: MODULES_PATH + 'ums/user/user_detail.html',
            controller: 'umsUserDetailController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('ums_field', {
            url: '/ums/field',
            templateUrl: MODULES_PATH + 'ums/field/field_list.html',
            controller: 'umsFieldListController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('ums_statistics', {
            url: '/ums/statistics',
            templateUrl: MODULES_PATH + 'ums/statistics/statistics_list.html',
            controller: 'umsStatisticsController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
        .state('ums_setting', {
            url: '/ums/setting',
            templateUrl: MODULES_PATH + 'ums/setting/setting_list.html',
            controller: 'umsSettingController',
            data: {
                requireLogin: false // this property will apply to all children of 'app'
            }
        })
    ;
})