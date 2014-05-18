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

  $scope.urgencyTypes = [ 'ASAP', '2 hours', '24 hours'];

  $scope.jobString = jobProperties.getJobString();

  $scope.goBack = function(path){
    $location.path(path);
  }

  $scope.$watch('jobString', function(jobString){
    jobProperties.setJobString(jobString);
  });
});
