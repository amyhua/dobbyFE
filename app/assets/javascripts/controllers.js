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
    jobProperties.setProperty('jobMaxOffer', $scope.jobMaxOffer);

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

app.controller('AuctionCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, jobProperties, Pusher){



  $scope.jobMaxOffer = jobProperties.getProperty('jobMaxOffer');
  console.log($scope.jobMaxOffer);

  $scope.raiseMaxOffer = function(){
    jobProperties.setProperty('jobMaxOffer', $scope.newJobMaxOffer);
    debugger
  }

  $scope.beginAuction = function(){

    $scope.job = jobProperties.job;

    console.log('beginAuction');

    $scope.maxAuctionDuration = 1000*60*0.1; // in seconds, taken from settings

    var now = new Date();
    $scope.endTime = now.getTime() + $scope.maxAuctionDuration;
    // TODO: hard coded 5 minutes

    $timeout(function(){
      $scope.endAuction();
    }, $scope.maxAuctionDuration - 1000)

    $scope.bids = jobProperties.getProperty('bids');

    $scope.bids = [
      { bidder_id: 1, min_bid: 20 }
    ];

    Pusher.subscribe('bids', 'updated', function (bid) {
      // an item was updated. find it in our list and update it.
      for (var i = 0; i < $scope.bids.length; i++) {
        if ($scope.bids[i].id === bid.id) {
          $scope.bids[i] = bid;
          break;
        }
      }
    });

    var retrieveBids = function () {
      console.log('getting bids');
      $http.get('/api/bids')
        .success(function (bids) {
          $scope.bids = bids;
        });
    };

    $scope.updateBid = function (bid) {
      console.log('updating auction');
      $http.post('/api/bids', bid);
    };

    // load the items
    retrieveBids();

    cfpLoadingBar.start();

    $http.post('/api/new_job', jobProperties.job);

    $scope.status = 'Finding available dobbies who fit your job description...';
    $http.get('/api/available_dobbies')
      .success(function(dobbies) {
        console.log(dobbies);
        $timeout(function(){
          // FAKE progress
          $scope.numAvailableDobbies = dobbies.length;
          $scope.status = 'Filtering ' + $scope.numAvailableDobbies + 'available dobbies to fit your job deadline, location, and skills...';


          $scope.get('/api/matching_available_dobbies/job/' + jobProperties.job.job_id)

        }, 2000)
      });

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
    $location.path('/bidded_dobbies_list');
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


  // TODO: mock!
  $scope.bidders = [
    { bidder_id: 12, bgChecked: true,  verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 0 },
    { bidder_id: 13, bgChecked: false, verified: true, distance: 1.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 1 },
    { bidder_id: 14, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 1.5 },
    { bidder_id: 15, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 2 },
    { bidder_id: 16, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 2.5 },
    { bidder_id: 17, bgChecked: false, verified: true, distance: 5.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 3 },
    { bidder_id: 19, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 3.5 },
    { bidder_id: 25, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 4 },
    { bidder_id: 33, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 4.5 },
    { bidder_id: 63, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 14.50, numRatings: 22, rating: 5 }
  ]

  $scope.bidders = $scope.bidders
                    .sort(function(a,b){ return b.askingPrice - a.askingPrice })
                    .sort(function(a,b){ return b.rating - a.rating })
                    .sort(function(a,b){ return a.distance - b.distance })

                    $scope.bidders = []
  $scope.goToProfile = function(bidder_id){
    console.log('goToProfile', bidder_id);
    $location.path('/profile/'+bidder_id);
  }
});

app.controller('ProfileCtrl', function($scope, $location, $http, $timeout, cfpLoadingBar, $routeParams, userProperties){
  console.log('ProfileCtrl', $routeParams);

  // TODO
});


