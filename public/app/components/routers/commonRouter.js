/**
 * Created by mac on 2017/2/15.
 */
componentApp.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /
    //
    // Now set up the states
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/dashboard');

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: MODULES_PATH + 'index/dashboard.html',
            controller: 'umsUserListController',
            data: {
                requireLogin: false
            }
        });

})