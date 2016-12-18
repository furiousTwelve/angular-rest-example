'use strict';

/**
 * @ngdoc service
 * @name angresexaApp.connectToRest
 * @description
 * # connectToRest
 * Service in the angresexaApp.
 * TODO : take a look at <script src="bower_components/ng-file-upload/ng-file-upload.js"></script> to implement UPLOAD
 */
angular.module('angresexaApp')
  .constant('baseURL', 'http://rest.example.com')
  .service('connectToRest',[ '$resource', 'baseURL','Upload',
    function ($resource, baseURL, Upload)
    {
      // #####   Example to GET an array of json 
      this.getUsers = function() 
      {
        return $resource(baseURL+'/users', null, {query: { method: 'GET', isArray: true,}});
      };

      // ###### Example to GET a specific element embedded in json
      this.getASpecificUser =  function() 
      {
          return $resource(baseURL+'/users/:id', null, {
            get: {
              method: 'get',
              cancellable: true,
            }
          });
        };

      // ###### Example with a POST and PUT of user information
      this.postUser = function(inputs) 
      {
          return $resource(baseURL+'/users', {},  {
            'save': { method: 'POST' },
            'update': { method: 'UPDATE' }
          });
        };

        // ##### Example with only a POST  
        this.send = function() 
        {
          return $resource(baseURL+'/contact', null, { 'save': { method: 'POST' } });
        };


      /**
       * Send mutli files
       */
      this.uploadAlbumFiles = function (files) {
        return Upload.upload({
            url: baseURL+'/file/files',
            data: {files: files}
        });
      };

     /** 
      * send unic file 
      */ 
    this.uploadSouvenirFile = function (file)
    {
      return Upload.upload({
          url: baseURL+'/file/file',
          data: {file: file}
      });
    };



   }]);
