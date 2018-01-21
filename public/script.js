var myApp = angular.module('myApp', ['ngRoute']);

// config for angular-route
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider.when('/', {
    template: 'index.html',
    controller: 'IndexController as i'
  }).when('/research', {
    templateUrl: './public/pages/research.html',
    controller: 'IndexController as i'
  }).when('/instrumentation', {
    templateUrl: './public/pages/instrumentation.html',
    controller: 'IndexController as i'
  }).when('/contact', {
    templateUrl: './public/pages/contact.html',
    controller: 'IndexController as i'
  }).when('/publications', {
    templateUrl: './public/pages/publications.html',
    controller: 'IndexController as i'
  }).when('/people', {
    templateUrl: './public/pages/people.html',
    controller: 'IndexController as i'
  }).when('/resources', {
    templateUrl: './public/pages/resources.html',
    controller: 'IndexController as i'
  }).otherwise({ redirectTo: '/'});
  // $locationProvider.html5Mode(true);
});

// myApp.controller('IndexController', ['$http', '$location', '$timeout', function($http, $location, $timeout) {
//   console.log('index controller sourced');
//
//   // globals
//   var vm = this;
//   vm.contactError = false;
//   vm.errorMessage = 'Error sending email.  Please try again.';
//   vm.contactSent = false;
//   vm.sentMessage = 'Thank you for your message!';
//
//   vm.send = function () {
//     var formContent = {
//       name: vm.name,
//       email: vm.email,
//       comments: vm.talkToMe
//     };
//     console.log('formContent: ', formContent);
//     $http({
//       method: 'POST',
//       data: formContent,
//       url: '/contact'
//     }).then(function (response){
//       if(response.status===200){
//         contactMe.reset();
//         vm.contactSent = true;
//         $timeout(function(){
//           vm.contactSent = false;
//         }, 3000);
//       } else {
//         vm.contactError = true;
//         $timeout(function(){
//           vm.contactError = false;
//         }, 3000);
//       }
//     });
//   };
//
//
//
// }]);
