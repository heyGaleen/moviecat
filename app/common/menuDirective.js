(function(angular){
  angular
    .module('moviecat.directive',[])
    .directive('menuDirective',['$location',function($location){
      return{
        templateUrl:'./common/view.html',
        link:function($scope,element,attribute){
          // console.log(element)
          // console.log(scope)
          // console.log(attribute)
        $scope.location = $location;
        var lis = element.find('li');

        $scope.$watch('location.url()',function(curValue,oldValue){
          // console.log(curValue)
           for(var i=0;i<lis.length;i++){
            var url = lis.eq(i).children().attr('href').slice(1);
            // console.log(url)
            //url参数中可能还带有/in_theaters/2,因此用a标签里去匹配
            if(curValue.indexOf(url)!=-1){
              lis.removeClass('active');
              lis.eq(i).addClass('active');
              break;
            }
            }
          })
        }
      }
    }])
})(angular)