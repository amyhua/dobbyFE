app.controller('HomeCtrl', function($scope, $location, jobProperties){
  console.log('HomeCtrl');

  $scope.jobString = jobProperties.getProperty('jobString');

  console.log($scope.jobString);

  $scope.submit = function(){
      if ($scope.jobString != ''){

        jobProperties.setProperty('jobString', this.jobString);
        console.log($scope.jobString);
        console.log($scope);
        $location.path("/confirm_fields");
      }
  }

  $scope.$watch('jobString', function(jobString){
    console.log('autcomplete!');
  });

});

app.controller('JobCtrl', function($scope, $location, $http, jobProperties){
  console.log('JobCtrl');

  $scope.urgencyTypes = [ 'Now', 'Within 2 hours', 'Within 24 hours'];

  $scope.jobAddress = 'Anywhere';

  $scope.jobUrgency = 'Now';

  $scope.jobString = jobProperties.getProperty('jobString');

  $scope.jobDetail = "";

  $scope.goBack = function(path){
    $location.path(path);
  }

  $scope.confirmFields = function(){
    console.log('confirmFields', $scope);
    console.log("TODO: POST job fields over backend");


    jobProperties.setProperty('jobUrgency', $scope.jobUrgency);
    jobProperties.setProperty('jobString', $scope.jobString);
    jobProperties.setProperty('jobDetail', $scope.jobDetail);
    jobProperties.setProperty('jobAddress', $scope.jobAddress);

    // validate required fields
    if ($scope.jobAddress == '' || $scope.jobUrgency == '' || $scope.jobString == '') {
      alert('Please fill out all required fields.');
    }


    if ($scope.jobUrgency == 'Now'){
      $location.path('/auction_progress');
    } else {
      $location.path('/matching_dobbies_list');
    }
  }

  $scope.$watch('jobString', function(jobString){
    jobProperties.setProperty('jobString', jobString);
  });
});

app.controller('AuctionCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, jobProperties){

  $scope.maxAuctionDuration = 60*5; // in seconds, taken from settings

  $scope.beginAuction = function(){
    console.log('beginAuction');
    console.log('TODO: make real');

    cfpLoadingBar.start();

    $scope.status = 'Finding available dobbies...';


    $scope.numAvailableDobbies = 300;

    $timeout(function(){
      $scope.status = 'Inviting dobbies to bid for your job....';

      $scope.numInvitesSent = 150;

      $timeout(function(){
        $scope.numBiddersAccepted = 30;
        $scope.status = 'The auction has started';
        cfpLoadingBar.complete();
        $timeout(function(){
          $scope.numBidsMade = 5;
          $scope.winningBid = 30;
        }, 1000);
      }, 2000);

    }, 2000);
    console.log('TODO: maxAuctionDuration');
  }

  $scope.endAuction = function(){
    console.log('endAuction');
  }

  $scope.cancelAuction = function(){
    console.log('cancelAuction');
    console.log('TODO: cancelAuction')
    $('#confirmBox').fadeIn(100);
    $('#shadow').fadeIn(50);
  }

  $scope.cancelCancelling = function(){
    $('#confirmBox').hide();
    $('#shadow').fadeOut(50);
  }

  $scope.confirmCancelling = function(){
    console.log('confirmCancelling. TODO')
  }




});

