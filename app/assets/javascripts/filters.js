app
.filter('formatCurrency', function() {
  return function(number) {
    return '$' + number.toFixed(2);
  };
})
