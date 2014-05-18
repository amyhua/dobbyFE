var app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'timer',
  'chieffancypants.loadingBar',
  'doowb.angular-pusher'
]);

app.config(['PusherServiceProvider',
  function(PusherServiceProvider) {
    PusherServiceProvider
      .setToken('e2289f84b1eb3723b900')
      .setOptions({});
  }
]);

app.config(function($routeProvider){
  $routeProvider
  // JOB POSTER SIDE
    .when('/', {
      templateUrl: '/pages/login.html',
      controller: 'HomeCtrl'
    })
    .when('/home', {
      templateUrl: '/pages/home.html',
      controller: 'HomeCtrl'
    })
    .when('/confirm_fields', {
      templateUrl: '/pages/confirm_fields.html',
      controller: 'JobCtrl'
    })
    .when('/fields_edit_location', {
      templateUrl: '/pages/fields_edit_location.html',
      controller: 'JobCtrl'
    })
    .when('/auction_progress', {
      templateUrl: '/pages/auction_progress.html',
      controller: 'AuctionCtrl'
    })
    .when('/matching_dobbies_list', {
      templateUrl: '/pages/matching_dobbies_list.html',
      controller: 'MatchingDobbiesCtrl'
    })
    .when('/bidded_dobbies_list', {
      templateUrl: '/pages/bidded_dobbies_list.html',
      controller: 'AuctionCtrl'
    })
    .when('/poster_jobs_requested', {
      templateUrl: '/pages/poster_jobs_requested.html',
      controller: 'HomeCtrl'
    })
    .when('/poster_job_requested', {
      templateUrl: '/pages/poster_job_requested.html',
      controller: 'HomeCtrl'
    })
    // DOBBY SIDE
    .when('/new_dobby', {
      templateUrl: '/pages/new_dobby.html',
      controller: 'HomeCtrl'
    })
    .when('/dobby_home', {
      templateUrl: '/pages/dobby_home.html',
      controller: 'HomeCtrl'
    })
    .when('/dobby_matching_jobs', {
      templateUrl: '/pages/dobby_matching_jobs.html',
      controller: 'DobbyCtrl'
    })
    .when('/dobby_past_jobs', {
      templateUrl: '/pages/dobby_past_jobs.html',
      controller: 'HomeCtrl'
    })
    .when('/auction_invite', {
      templateUrl: '/pages/auction_invite.html',
      controller: 'HomeCtrl'
    })
    .when('/auction', {
      templateUrl: '/pages/auction.html',
      controller: 'HomeCtrl'
    })
    .when('/job_accept', {
      templateUrl: '/pages/job_accept.html',
      controller: 'HomeCtrl'
    })
    .when('/dobby_jobs_invited', {
      templateUrl: '/pages/dobby_jobs_invited.html',
      controller: 'HomeCtrl'
    })
    .when('/dobby_job_invited', {
      templateUrl: '/pages/dobby_job_invited.html',
      controller: 'HomeCtrl'
    })
    // BOTH
    .when('/edit_payment', {
      templateUrl: '/pages/edit_payment.html',
      controller: 'HomeCtrl'
    })
    .when('/profile/:profile_id/job/:job_id/job_offer_price/:job_offer_price', {
      templateUrl: '/pages/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/profile/:profile_id', {
      templateUrl: '/pages/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/profile', {
      templateUrl: '/pages/profile.html',
      controller: 'ProfileCtrl'
    })
    .when('/edit_profile/:profile_id', {
      templateUrl: '/pages/edit_profile.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})