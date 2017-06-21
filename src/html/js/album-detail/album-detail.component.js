'use strict';

// Register `albumDetail` component, along with its associated controller and template
angular.
  module('albumDetail').
  component('albumDetail', {
    templateUrl: 'templates/album-detail.template.html',
    controller: ['$routeParams', 'Albums',
      function AlbumDetailController($routeParams, Albums) {
        var self = this;
        self.album = {};
        Albums.get({}, function(arr) {
          self.album = _.find(arr, function(obj){ return obj.id == $routeParams.albumId; });
        });
      }
    ]
  });