app.controller('DobbyCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, $routeParams, userProperties){

  console.log('DobbyCtrl')
  $('#menu').removeClass('active');
  $('.push').removeClass('active');

  $scope.availableJobs = [
  {
    jobName: 'Do 3 bags of laundry',
    posterFirstName: 'Katey',
    posterLastName: 'S',
    imaeUrl: 'https://avatars1.githubusercontent.com/u/177615?s=460',
    offerPrice: 13.00,
    posterNumRatings: 25,
    posterRating: 4.5,
    deadline: '1 hr',
    distance: 0.15,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Deliver flowers and cards to my Mother',
    posterFirstName: 'Alex',
    posterLastName: 'M',
    imaeUrl: 'https://avatars1.githubusercontent.com/u/1119680?s=460',
    offerPrice: 23.00,
    posterNumRatings: 25,
    posterRating: 3.5,
    deadline: '3 hr',
    distance: 0.15,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Research demographics of my market size for a business plan.',
    posterFirstName: 'Mesha',
    posterLastName: 'L',
    imageUrl: 'https://graph.facebook.com/kjangla/picture?height=75&width=75',
    offerPrice: 45.00,
    posterNumRatings: 25,
    posterRating: 2.5,
    deadline: '13 hr',
    distance: 0.25,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Walk my dog for an hour',
    posterFirstName: 'Erin',
    posterLastName: 'S',
    imageUrl: 'https://graph.facebook.com/sankalpshere/picture?height=75&width=75',
    offerPrice: 12.00,
    posterNumRatings: 25,
    posterRating: 4.5,
    deadline: '20 hr',
    distance: 0.5,
    verified: true,
    bgChecked: false
  }
  ]
});