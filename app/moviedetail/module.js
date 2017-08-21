(function(angular){
  'use strict';
  angular
    .module('moviecat.detail',[])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
        .when('/details/:id',{
          templateUrl:'./moviedetail/view.html',
          controller:'DetailController'
        })
    }])
    .controller('DetailController',['$scope','$routeParams','jsonpService',function($scope,$routeParams,jsonpService){
      var url = 'https://api.douban.com/v2/movie/subject/' + $routeParams.id;
      jsonpService.jsonp(url,{},function(data){
        console.log(data);
        $scope.data = data;

        //手动触发angular的脏检查机制
        $scope.$apply();
      })
    }])
})(angular)