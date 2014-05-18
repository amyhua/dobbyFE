app.controller('HomeCtrl', function($scope, $location, jobProperties){
  console.log('HomeCtrl');

  $scope.jobString = jobProperties.getJobString();

  console.log($scope.jobString);

  $scope.submit = function(){
      if ($scope.jobString != ''){

        jobProperties.setJobString(this.jobString);
        console.log($scope.jobString);
        console.log($scope);
        $location.path("/confirm_fields");
      }
  }

  $scope.$watch('jobString', function(jobString){
    console.log('autcomplete!');
  });

});

app.controller('JobCtrl', function($scope, $location, jobProperties){
  console.log('JobCtrl');

  $scope.urgencyTypes = [ 'ASAP', 'within 2 hours', 'within 24 hours'];

  $scope.jobUrgency = 'ASAP';

  $scope.jobString = jobProperties.getJobString();

  $scope.jobDetail = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  $scope.goBack = function(path){
    $location.path(path);
  }

  $scope.$watch('jobString', function(jobString){
    jobProperties.setJobString(jobString);
  });
});
