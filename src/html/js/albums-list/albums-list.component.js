'use strict';

// Register `albumsList` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumsList', {
    templateUrl: 'templates/albums-list.template.html',
    controller: ['Albums',
      function AlbumsListController(Albums) {
      	
        this.albums = Albums.get();
      }
    ]
  });