app.controller('ProfileCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, $routeParams, userProperties){
  console.log('ProfileCtrl', $routeParams);

  $('#menu').removeClass('active');
  $('.push').removeClass('active');

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
    aboutMe: "After years of copyediting newspapers, followed by more years of freelance writing and editing, I am confident in my ability to write, research or edit most anything, from grants and annual reports to features and reviews. I would also be happy to do a Target, Trader Joe's or grocery run, or a load of laundry. I get along well with kids, pets and seniors, and have experience taking care of all three. I cleaned homes for several years, and have catered a few weddings and other events for friends. I've organized successful events, from dinner dances, performances and chalk art festivals to children's birthday parties, and can handle administrative work or office tasks, mundane or arcane. In short, I'm up for doing just about whatever has to get done!",
    imageUrl: 'https://avatars0.githubusercontent.com/u/3581705?s=460',
    references: [
      {
        firstName: 'Joe',
        lastName: 'Samuelson',
        imageUrl: 'https://avatars0.githubusercontent.com/u/1119680?s=460',
        overallRating: 5,
        numRatingsOverall: 10,
        referenceType: 'Positive',
        referencePersona: 'Customer',
        comment: 'Amy was very responsive and easy to work with! Thanks Annie for your help surprising my mom with the flowers!'
      },
      {
        firstName: 'Mike',
        lastName: 'Bostock',
        imageUrl: 'https://avatars0.githubusercontent.com/u/230541?s=460',
        overallRating: 5,
        numRatingsOverall: 10,
        referenceType: 'Neutral',
        referencePersona: 'Customer',
        comment: 'Amy did 2 tasks for us and did a great job.'
      },
      {
        firstName: 'Lily',
        lastName: 'Allen',
        imageUrl: 'https://avatars1.githubusercontent.com/u/177615?s=460',
        overallRating: 5,
        numRatingsOverall: 10,
        referenceType: 'Positive',
        referencePersona: 'Dobby',
        comment: 'Amazing job, fast turnaround and very courteous and professional. Will definitely use Amy again next time!'
      }
    ]
  }

  $http.get('/api/profile/' + $scope.profileID).success(function(profile){
    $scope.profile = profile;

  })


  $scope.goBack = function(){
    $location.path('/bidded_dobbies_list')
  }
});
