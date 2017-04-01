/**
 * Created by HASEE on 2017/3/31.
 */
var myApp = angular.module('helloworld', []);



myApp.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs) {

            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

myApp.controller('home',[

    '$scope',
    '$http',
    function ($scope,$http) {

        $scope.title = '点击展开';
        $scope.text = 'hjhjk';


        /*请求*/
        $http.get('http://yizhibo.lol/').then(function (response) {
            $scope.name=response
        })

        /*end*/


    }

])

