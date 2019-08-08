
angular.module('app').directive('myClick', function($parse){
    return {
      link: function(scope, el, attrs) {
        var fn = $parse(attrs['myClick']);
        
        el.on('click', function(){
          
          scope.$apply(function(){
            fn(scope);
          });
        });
        
      }
    }
  });