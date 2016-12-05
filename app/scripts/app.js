'use strict';

/**
 * @ngdoc overview
 * @name angresexaApp
 * @description
 * # angresexaApp
 *
 * Main module of the application.
 */
angular
  .module('angresexaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(function ($stateProvider) 
  {
    $stateProvider
      .state('user', {
            url: "/user/",
            templateUrl: "views/user.html",
            controller: 'UserCtrl',
            resolve: {
              users: [
                'connectToRest',
                '$stateParams',
                function(connectToRest, $stateParams) {
                    return connectToRest.getUsers().query().$promise;
                }
              ]
            }
          })
          .state('user', {
          url: "/user/:id",
          templateUrl: "views/user.html",
          controller: 'UserCtrl',
          resolve: {
            user: [
              'connectToRest',
              '$stateParams',
              function(connectToRest, $stateParams) {
                return connectToRest.getASpecificUser().get({id: $stateParams.id}).$promise;
              }
            ]
          }
        })
  });
