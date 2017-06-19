'use strict';

// Register `albumsList` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumsList', {
    templateUrl: 'templates/albums-list.template.html',
    controller: ['Albums',
      function PhoneListController(Albums) {

        this.albums = Albums.query();
        // this.orderProp = 'age';
      }
    ]
  });