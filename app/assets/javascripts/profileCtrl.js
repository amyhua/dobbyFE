app.controller('ProfileCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, $routeParams, userProperties){
  console.log('ProfileCtrl', $routeParams);

  // TODO

  $scope.jobID = $routeParams['job_id'];
  $scope.profileID = $routeParams['profile_id'];
  $scope.jobOfferPrice = $routeParams['job_offer_price'];

  $scope.profile = {
    firstName: 'Amy',
    lastName: 'Hua',
    overallRating: 4.32,
    numRatingsOverall: 30,
    numRatingsFromCustomers: 0,
    numRatingsFromDobbies: 30,
    city: 'Seattle',
    state: 'WA',
    verified: 'Yes',
    bgChecked: 'No',
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl: 'https://avatars0.githubusercontent.com/u/3581705?s=460'
  }

  // $http.get('/api/profile/:profile_id').success(function(profile){

  // })


  $scope.goBack = function(){
    $location.path('/bidded_dobbies_list')
  }
});
