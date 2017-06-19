'use strict';

// Register `albumsAdd` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumAdd', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['Albums',
      function AlbymsAddController(Albums) {

      }
    ]
  });