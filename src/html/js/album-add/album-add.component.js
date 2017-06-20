'use strict';

// Register `albumsAdd` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumAdd', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['$location', 'Albums',
      function AlbymsAddController($location, Albums) {
      	this.pageTitle = 'Add new album';
      	this.isAdd = true;
      	this.isSaveChanges = false;

      	this.initAdd = function(){
      		var data = {
      			title: this.title || '',
      			artist: this.artist || '',
      			country: this.country || '',
      			company: this.company || '',
      			year: this.year || '',
      			price: this.price || '',
      			logoUrl: this.logoUrl || ''
      		}
      		var data_send = JSON.stringify(data);
      		Albums.addNew({}, data_send, function() {
      			$location.path('#!/albums');
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp.data);
	        });
      	};
      }
    ]
  });