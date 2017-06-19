'use strict';

// Register `albumDetail` component, along with its associated controller and template
angular.
  module('albumDetail').
  component('albumDetail', {
    templateUrl: 'templates/album-detail.template.html',
    controller: ['$routeParams', 'Albums',
      function AlbumDetailController($routeParams, Albums) {
        var self = this;
        // self.album = Albums.get({phoneId: $routeParams.phoneId}, function(album) {
        //   self.setImage(album.images[0]);
        // });

        // self.setImage = function setImage(imageUrl) {
        //   self.mainImageUrl = imageUrl;
        // };
      }
    ]
  });