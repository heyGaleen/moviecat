(function (angular) {
     "use strict";
   angular
    .module('moviecat',[
      'ngRoute',
      'moviecat.jsonp',
      'moviecat.homepage',
      'moviecat.movietype',
      'moviecat.search'
      ]);

})(angular);