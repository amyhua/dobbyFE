app.controller('DobbyCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, $routeParams, userProperties){

  console.log('DobbyCtrl')
  $('#menu').removeClass('active');
  $('.push').removeClass('active');


  $scope.availableJobs = [
  {
    jobName: 'Grab me Coffee ASAP',
    posterFirstName: 'Amy',
    posterLastName: 'Hua',
    offerPrice: 13.00,
    posterNumRatings: 25,
    posterRating: 4.5,
    distance: 0.15,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Grab me Coffee ASAP',
    posterFirstName: 'Amy',
    posterLastName: 'Hua',
    offerPrice: 13.00,
    posterNumRatings: 25,
    posterRating: 3.5,
    distance: 0.15,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Grab me Coffee ASAP',
    posterFirstName: 'Amy',
    posterLastName: 'Hua',
    offerPrice: 13.00,
    posterNumRatings: 25,
    posterRating: 2.5,
    distance: 0.15,
    verified: true,
    bgChecked: false
  },
  {
    jobName: 'Grab me Coffee ASAP',
    posterFirstName: 'Amy',
    posterLastName: 'Hua',
    offerPrice: 13.00,
    posterNumRatings: 25,
    posterRating: 4.5,
    distance: 0.15,
    verified: true,
    bgChecked: false
  }
  ]
});