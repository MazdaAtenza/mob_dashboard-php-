'use strict';

/**
 * @ngdoc overview
 * @name prealarmFrontendApp
 * @description
 * # prealarmFrontendApp
 *
 * Directives module of the application.
 */


componentApp.directive('activeLink', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            function setClass(){

                var className = attrs.activeLink;
                var pathName = attrs.uiSref;
                //

            }
            scope.$on('$stateChangeStart', setClass);
            setClass();
        }
    };
}]);

componentApp.directive("checkBox", function(){
    return {
        restrict: 'A',
        replace: true,
        scope: {
            model: "="
        },
        template: '<div class="checkbox-wrap">'
                 +' <input type="checkbox" id="{{model.linkID}}">'
                 +' <label for="{{model.linkID}}" class="checkboxModel">'
                 +'     <span class="leftYes">Yes</span>'
                 +'     <span class="cover"></span>'
                 +'     <span class="rightNo">No</span>'
                 +' </label>'
                 +'</div>',
        link: function(scope, element, attrs){
            var m=0;
            element[0].children[1].onclick = function(){
                if(m%2==0){
                     element[0].children[1].children[1].style.left='51%';
                }else{
                    element[0].children[1].children[1].style.left='0';
                }
                m++;
            }
        }
    }
})

