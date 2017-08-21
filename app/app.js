(function (angular) {
     "use strict";
   angular
    .module('moviecat',[
      'ngRoute',
      'moviecat.homepage',
      'moviecat.intheater',
      'moviecat.jsonp'
      ]);

})(angular);