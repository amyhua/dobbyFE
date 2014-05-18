var app = angular.module('app', [
  'ngRoute'
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
      controller: 'HomeCtrl'
    })
    .when('/auction_progress', {
      templateUrl: '/pages/auction_progress.html',
      controller: 'HomeCtrl'
    })
    .when('/matching_dobbies_list', {
      templateUrl: '/pages/matching_dobbies_list.html',
      controller: 'HomeCtrl'
    })
    .when('/bidded_dobbies_list', {
      templateUrl: '/pages/bidded_dobbies_list.html',
      controller: 'HomeCtrl'
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
      controller: 'HomeCtrl'
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
    .when('/profile', {
      templateUrl: '/pages/profile.html',
      controller: 'HomeCtrl'
    })
    .when('/edit_profile', {
      templateUrl: '/pages/edit_profile.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})