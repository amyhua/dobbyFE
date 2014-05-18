app.controller('HomeCtrl', function($scope, $location, jobProperties){
  console.log('HomeCtrl');

  $('#menu').removeClass('active');
  $('.push').removeClass('active');

  $scope.jobString = jobProperties.getProperty('jobString');

  console.log($scope.jobString);

  $scope.submit = function(){
      if ($scope.jobString != ''){

        jobProperties.setProperty('jobString', this.jobString);
        console.log($scope);
        $location.path("/confirm_fields");
      }
  }

  $scope.$watch('jobString', function(jobString){
    console.log('autcomplete!');
  });

});

app.controller('MenuCtrl', function($scope, $http, $location, $rootScope){
  console.log('MenuCtrl')

  $scope.availabilityStatus = 'Off'; // by default

  $scope.changeAvailability = function(stat){
    $scope.availabilityStatus = stat;
    console.log('stat', stat);
  }
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
      console.log('JobCtrl job', jobProperties.job);
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

  console.log('AuctionCtrl job', jobProperties.job);


  $scope.jobMaxOffer = jobProperties.job.jobMaxOffer;

  $scope.raiseMaxOffer = function(){
    jobProperties.setProperty('jobMaxOffer', $scope.jobMaxOffer);
    console.log(jobProperties)
    if ($location.path() == '/bidded_dobbies_list') {
      $location.path('/auction_progress');
    }
  }

  $scope.beginAuction = function(){

    $scope.job = jobProperties.job;

    console.log('beginAuction');

    $scope.maxAuctionDuration = 1000*60*5; // in seconds, taken from settings

    var now = new Date();
    $scope.endTime = now.getTime() + $scope.maxAuctionDuration;
    // TODO: hard coded 5 minutes

    $timeout(function(){
      $scope.endAuction();
    }, $scope.maxAuctionDuration - 1000)

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


          // $scope.get('/api/matching_available_dobbies/job/' + jobProperties.job.job_id)

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
          $timeout(function(){
            $scope.numBidsMade = 10;
            $scope.winningBid = 25;

            $timeout(function(){
              $scope.numBidsMade = 23;
              $scope.winningBid = 17.50;
            }, 4000)

          }, 3000)
        }, 2000);
      }, 2000);

    }, 2000);
    console.log('TODO: maxAuctionDuration');
  }

  $scope.$watch('jobMaxOffer', function(jobMaxOffer){
    console.log('wacther jobMaxOffer');
    if (jobMaxOffer != undefined){
      jobProperties.setProperty('jobMaxOffer', jobMaxOffer);
    }
  })

  $scope.endAuction = function(){
    jobProperties.setProperty('jobMaxOffer', $scope.jobMaxOffer);
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
    { firstName: 'Amy', lastName: 'H', image_url: 'https://avatars0.githubusercontent.com/u/3581705?s=460', bidder_id: 12, jobID: 3, bgChecked: true,  verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 3.323, topCategory2numRatings: 10, askingPrice: 17.50, numRatings: 30, rating: 4.5 },
    { firstName: 'Bob', lastName: 'B', image_url: 'https://avatars0.githubusercontent.com/u/1119680?s=460', bidder_id: 13, jobID: 3, bgChecked: false, verified: true, distance: 1.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 18.50, numRatings: 25, rating: 1 },
    { firstName: 'Charlie', lastName: 'A', image_url: 'https://avatars0.githubusercontent.com/u/230541?s=460', bidder_id: 14, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 19.00, numRatings: 22, rating: 1.5 },
    { firstName: 'Katey', lastName: 'W', image_url: 'https://avatars1.githubusercontent.com/u/177615?s=460', bidder_id: 15, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 21.50, numRatings: 40, rating: 2 },
    { firstName: 'John', lastName: 'A', image_url: 'https://avatars0.githubusercontent.com/u/1119680?s=460', bidder_id: 16, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 24.50, numRatings: 32, rating: 2.5 },
    { firstName: 'Lorde', lastName: 'W', image_url: 'https://graph.facebook.com/sankalpshere/picture?height=75&width=75', bidder_id: 19, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 30.00, numRatings: 22, rating: 3.5 },
    { firstName: 'Timothy', lastName: 'V', image_url: 'https://graph.facebook.com/kjangla/picture?height=75&width=75', bidder_id: 25, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 31, numRatings: 22, rating: 4 },
    { firstName: 'Ben', lastName: 'Z', image_url: 'https://graph.facebook.com/mihir.chitnis/picture?height=75&width=75', bidder_id: 33, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 34.50, numRatings: 22, rating: 4.2 },
    { firstName: 'Deame', lastName: 'D', image_url: 'https://graph.facebook.com/kat.martin.9809/picture?height=75&width=75', bidder_id: 63, jobID: 3, bgChecked: false, verified: true, distance: 0.15, topCategory1: 'Dog Walking', topCategory1Rating: 4.5932, topCategory1numRatings: 3, topCategory2: 'Delivery', topCategory2Rating: 1.323, topCategory2numRatings: 10, askingPrice: 44.50, numRatings: 22, rating: 4 }
  ]

  $scope.bidders = $scope.bidders
                    .sort(function(a,b){ return b.rating - a.rating })
                    .sort(function(a,b){ return a.distance - b.distance })
                    .sort(function(a,b){ return a.askingPrice - b.askingPrice });


  $scope.goToProfile = function(profile_id, job_offer_price, job_id){
    console.log('goToProfile', profile_id);
    if (job_id == undefined) job_id = 1;
    $location.path('/profile/'+profile_id+'/job/'+job_id+'/job_offer_price/'+job_offer_price);
  }
});

