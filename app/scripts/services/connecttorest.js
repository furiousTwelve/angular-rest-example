'use strict';

/**
 * @ngdoc service
 * @name angresexaApp.connectToRest
 * @description
 * # connectToRest
 * Service in the angresexaApp.
 */
angular.module('angresexaApp')
  .constant('baseURL', 'http://rest.example.com')
  .service('connectToRest',[ '$resource', 'baseURL',
    function ($resource, baseURL) 
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


   }]);
