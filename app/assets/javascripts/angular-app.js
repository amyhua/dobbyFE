var app = angular.module('app', [
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
  // JOB POSTER SIDE
    .when('/', {
      templateUrl: '/pages/login.html',
      controller: 'HomeCtrl'
    })
    .when('/home', {
      templateUrl: '/pages/home.html',
      controller: 'MainCtrl'
    })
    .when('/confirm_fields', {
      templateUrl: '/pages/confirm_fields.html',
      controller: 'ResumeCtrl'
    })
    .when('/fields_edit_location', {
      templateUrl: '/pages/fields_edit_location.html',
      controller: 'ResumeCtrl'
    })
    .when('/auction_progress', {
      templateUrl: '/pages/auction_progress.html',
      controller: 'ResumeCtrl'
    })
    .when('/matching_dobbies_list', {
      templateUrl: '/pages/matching_dobbies_list.html',
      controller: 'ResumeCtrl'
    })
    .when('/bidded_dobbies_list', {
      templateUrl: '/pages/bidded_dobbies_list.html',
      controller: 'ResumeCtrl'
    })
    .when('/poster_jobs_requested', {
      templateUrl: '/pages/poster_jobs_requested.html',
      controller: 'ResumeCtrl'
    })
    .when('/poster_job_requested', {
      templateUrl: '/pages/poster_job_requested.html',
      controller: 'ResumeCtrl'
    })
    // DOBBY SIDE
    .when('/new_dobby', {
      templateUrl: '/pages/new_dobby.html',
      controller: 'ResumeCtrl'
    })
    .when('/dobby_home', {
      templateUrl: '/pages/dobby_home.html',
      controller: 'ResumeCtrl'
    })
    .when('/dobby_matching_jobs', {
      templateUrl: '/pages/dobby_matching_jobs.html',
      controller: 'ResumeCtrl'
    })
    .when('/dobby_past_jobs', {
      templateUrl: '/pages/dobby_past_jobs.html',
      controller: 'ResumeCtrl'
    })
    .when('/auction_invite', {
      templateUrl: '/pages/auction_invite.html',
      controller: 'ResumeCtrl'
    })
    .when('/auction', {
      templateUrl: '/pages/auction.html',
      controller: 'ResumeCtrl'
    })
    .when('/job_accept', {
      templateUrl: '/pages/job_accept.html',
      controller: 'ResumeCtrl'
    })
    .when('/dobby_jobs_invited', {
      templateUrl: '/pages/dobby_jobs_invited.html',
      controller: 'ResumeCtrl'
    })
    .when('/dobby_job_invited', {
      templateUrl: '/pages/dobby_job_invited.html',
      controller: 'ResumeCtrl'
    })
    // BOTH
    .when('/edit_payment', {
      templateUrl: '/pages/edit_payment.html',
      controller: 'ResumeCtrl'
    })
    .when('/profile', {
      templateUrl: '/pages/profile.html',
      controller: 'ResumeCtrl'
    })
    .when('/edit_profile', {
      templateUrl: '/pages/edit_profile.html',
      controller: 'ResumeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})