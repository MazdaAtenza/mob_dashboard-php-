/**
 * Created by mac on 2017/2/15.
 * 应用启动时候的业务逻辑
 */
componentApp.run(function ($rootScope, $state) {
    
    $rootScope.leftNav = APP_NAV;

    /**
     * state变化时，检查登陆状态等
     * @param  {[type]} event     [description]
     * @param  {[type]} toState   [description]
     * @param  {[type]} toParams) {                           var requireLogin [description]
     * @return {[type]}           [description]
     */
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
        
        var requireLogin = toState.data.requireLogin;
        if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
            event.preventDefault();
        }
    });
    /**
     * state改变成功时
     * @param  {[type]} event         [description]
     * @param  {[type]} toState       [description]
     * @param  {[type]} toParams      [description]
     * @param  {[type]} fromState     [description]
     * @param  {[type]} fromParams){                         console.debug('successfully changed states') ;            $rootScope.currentState [description]
     * @return {[type]}               [description]
     */
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.debug('successfully changed states') ;
            $rootScope.currentState = toState.name;
            angular.forEach($rootScope.leftNav, function(v, k){
                    if(v.url == $rootScope.currentState) {
                        v.isActive = true;
                    } else {
                        v.isActive = false;
                    }
                    if(v.children) {
                        angular.forEach(v.children, function(value, key){
                            if(value.url == $rootScope.currentState) {
                                value.isActive = true;
                                v.showChildren = true;
                                console.log(value.url);
                            } else {
                                value.isActive = false;
                            }
                        })
                    }
                })
    });
    
    $rootScope.cliclLeftNav = function(nav, index){
        
        angular.forEach($rootScope.leftNav, function(v, k){
            if(index != k) {
                v.showChildren = false;
                v.isActive = false;
            } else {
                v.showChildren = !v.showChildren;
            }
            console.log(v);
            
        })
    }

})