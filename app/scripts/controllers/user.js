'use strict';

/**
 * @ngdoc function
 * @name angresexaApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angresexaApp
 */
angular.module('angresexaApp')
  .controller('UserCtrl',['$scope', function ($scope) {
      /* -- send login request to server -- */
      $scope.createUser = function() {
        connectToRest.postUser().save($scope.inputs).$promise.then(
          function success(response) {
            if(response.error != 0) {
              $scope.hasErrors = true;
              $scope.message = response.message;
              return;
            }
            console.log('votre utilisateur a été crée');
            console.dir(response);                      //response contient un json
            console.log(response.status);
          }
        );
      };
  }]);
