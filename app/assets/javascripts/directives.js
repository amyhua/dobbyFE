app.directive('menuLink', function($timeout){
  return {
    restrict: 'C',
    replace: false,
    link: function($scope, element, attrs) {

      console.log('menuLink')

      element.on('click', function(){
        $('#menu').addClass('active');
        $('.push').addClass('pushed');
      })

    }
  }
});