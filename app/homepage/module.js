(function(angular){
  'use strict';
  angular
    .module('moviecat.homepage',[])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
        .when('/home_page',{
          templateUrl:'./homepage/view.html'
        })
        .otherwise({
          redirectTo:'/home_page'
        })
    }])
})(angular)