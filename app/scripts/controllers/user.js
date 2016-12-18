'use strict';

/**
 * @ngdoc function
 * @name angresexaApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the angresexaApp
 */
angular.module('angresexaApp')
  .controller('UserCtrl',['$scope', function ($scope) 
   {

      /**
       * clear error message 
       * */
      $scope.clearError = function() { $scope.hasErrors = false; };

      /**
       * upload files in a different thread
       */
      $scope.uploadFiles = function (files) {
        $scope.files = files;
        if (files && files.length) {
          $scope.photo = connectToRest.uploadAlbumFiles(files).then(function (response) {
            $timeout(function () {
              $scope.inputs.album = response.data.files;
            });
          });
        }
      };

      /**
       * upload a file in a different thread
       */
      $scope.uploadCouverture = function(file, errFiles) {
        $scope.fc = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
          connectToRest.uploadFile(file).then(function (response) {
            $timeout(function () {
              $scope.inputs.couverture = response.data.file;
            });
          });
        }
      };

    //  $scope.email = "Sam@Soungue.com"; not still usefull
    //  $scope.password = "passw";
      /* -- send login request to server -- */
      /**
       * called from html form
       * Create a new user from html form
       */
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
