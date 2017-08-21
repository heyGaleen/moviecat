(function (angular) {
     "use strict";
   angular
    .module('moviecat',[
      //加载路由模块
      'ngRoute',
      //加载jsonp模块
      'moviecat.jsonp',
      //加载首页模块
      'moviecat.homepage',
      //加载电影详情模块
      'moviecat.detail',
      //加载正在热映,即将上映和top250模块
      'moviecat.movietype',
      //加载搜索模块
      'moviecat.search',
      //加载tab栏高亮模块
      'moviecat.directive'
      ]);

})(angular);