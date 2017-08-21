(function(angular){
  angular
    .module('moviecat.search',[])
    .controller('SearchController',['$scope','$location',function($scope,$location){
      $scope.searchText = '';

      //url:/v2/movie/search?q={text}
      console.log($location.url())
      $scope.search = function(){
        //判断用户没有输入搜索内容则不执行
        if(!$scope.searchText.trim()){
          return;
        }
        //$location.url()不传参数用于获取url中的值
        //传入参数表示设置url中的hash值
        //此处的hash值指的是#后面的参数
        $location.url('/search?q='+$scope.searchText);
      }
    }])
})(angular)