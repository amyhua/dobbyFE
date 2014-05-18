app
.filter('formatCurrency', function() {
  return function(number) {
    return '$' + number.toFixed(2);
  };
})
.filter('formatMiles', function() {
  return function(number) {
    if (number){
      return number.toFixed(1) + ' mi';
    } else {
      return '';
    }
  };
})
.filter('formatDecimal', function() {
  return function(number) {
    if (number){
      return number.toFixed(1);
    } else {
      return '';
    }
  };
})

