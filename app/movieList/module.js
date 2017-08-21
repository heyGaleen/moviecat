(function(angular){
  'use strict';
  angular
    .module('moviecat.movietype',[])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
        .when('/:movieType/:curPage?',{
          templateUrl:'./movieList/view.html',
          controller:'MovieTypeController'
        })
    }])

    //url:https://api.douban.com/v2/movie/in_theaters?callback=JSON_CALLBACK
    .controller('MovieTypeController',['$scope','$http','$routeParams','$route','jsonpService',function($scope,$http,$routeParams,$route,jsonpService){
      // console.log($routeParams)
      const count = 5;
      var curPage = $routeParams.curPage || '1';
      $scope.curPage = curPage;
      $scope.isShow = true;

      //处理请求参数
      var urlParams = {
        start:(curPage-1)*count,
        count:5,
      }
      var q = $routeParams.q;
      q && (urlParams.q=q)
      jsonpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.movieType,urlParams,function(data){
        // console.log(data)
        // console.log($routeParams)
        
        $scope.data = data;
        

        //分页信息
        $scope.total = data.total;
        $scope.totalPage = Math.ceil(data.total/data.count);
        $scope.isShow = false;
        //ajax请求是异步的,需要手动调用$apply()方法通知angular更新
        $scope.$apply();
      })

      //实现分页
      $scope.goPage = function(curPage,totalPage){
        console.log(curPage);
        if(curPage<=0 || curPage>$scope.totalPage){
          return;
        }
        //只能修改路由参数
        $route.updateParams({
          curPage:curPage
        });
      }
    }])
  
})(angular)