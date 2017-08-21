(function (angular) {
  'use strict';

  angular
    .module('moviecat.jsonp', [])
    .service('jsonpService', ['$window', function ($window) {
      // 通过 $window服务 来获取全局对象
      var window = $window,
      document = window.document;

      // 暴露jsonp方法
      this.jsonp = jsonp;

      // 第一个参数：表示请求的url地址
      // 第二个参数：表示接口需要的参数，是一个对象
      // 第三个参数：回调函数，我们需要在回调函数中获取到数据
      function jsonp(url, params, callback) {
        // 1 根据 url 和params 拼接请求地址
        url += '?'
        for (var k in params) {
          url += k + '=' + params[k] + '&'
        }

        // 2 拼接 callback
        // 注意：fn必须是全局函数才有效！！！
        var callbackName = 'idouban_' + (new Date() - 0);
        url += 'callback=' + callbackName;
        // 小技巧：在函数中通过给window添加属性，来创建一个全局函数
        // 添加给 window 的函数，就是全局函数
        window[callbackName] = function (data) {
          callback(data);

          // 删除掉添加给window的属性
          delete window[callbackName];
          // 移除 script 标签
          document.head.removeChild(script);
        };

        // 3 动态创建script标签
        var script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
      }

    }]);

})(angular);