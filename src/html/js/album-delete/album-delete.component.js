'use strict';

// Register `albumDelete` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumDelete', {
    templateUrl: 'templates/album-delete.template.html',
    controller: ['$routeParams', 'Albums',
      function AlbumDeleteController($routeParams, Albums) {
        var self = this;
        self.album = {};
        Albums.get({}, function(arr) {
          	self.album = _.find(arr, function(obj){ 
          		return obj.id == $routeParams.albumId; 
          	});
        });

      	this.initDelete = function(){
      		Albums.delete({id: $routeParams.albumId}, function(resp) {
	        	location.href = "#!/albums";
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp);
	        });
      	};
      }
    ]
  });