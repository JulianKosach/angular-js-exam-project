'use strict';

angular.
  module('core.album').
  factory('Albums', ['$resource',
    function($resource) {
      return $resource('/albums/all', {}, {
        get: {
          method: 'GET',
          isArray: true,
          transformResponse: function(data) {
            var arr = [];
            var data_obj = JSON.parse(data);
            _.each(data_obj, function(obj){
              arr.push(obj);
            });
            return arr;
          }
        }
        
      });
    }
  ]);
