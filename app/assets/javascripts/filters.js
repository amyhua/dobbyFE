app
.filter('formatCurrency', function() {
  return function(number) {
    return '$' + Number(number).toFixed(2);
  };
})
.filter('formatMiles', function() {
  return function(number) {
    if (number){
      return Number(number).toFixed(1) + ' mi';
    } else {
      return '';
    }
  };
})
.filter('formatDecimal', function() {
  return function(number) {
    if (number){
      return Number(number).toFixed(1);
    } else {
      return '';
    }
  };
})
.filter('trim', function() {
  return function(string) {
    return string.slice(0,1);
  };
})
.filter('roundRating', function() {
  return function(number) {

    if (number === undefined) return 0;

    number = Number(number);
    var floor = Math.floor(number);
    var remainder = number % 1;

    if (remainder < 0.25) {
      return floor;
    } else if (remainder <= 0.5) {
      return floor + 0.5;
    } else {
      return floor + 1;
    }
  };
})

