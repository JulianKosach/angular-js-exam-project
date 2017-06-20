'use strict';

// Register `albumEdit` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumEdit', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['$routeParams', 'Albums',
      function AlbumEditController($routeParams, Albums) {

        var self = this;
        this.pageTitle = 'Edit album';
      	this.isAdd = false;
      	this.isSaveChanges = true;
        this.hrefBackBtn = '#!/albums/' + $routeParams.albumId;
        this.textBackBtn = 'Go back to album details';

        self.album = {};
        Albums.get({}, function(arr) {
          	self.album = _.find(arr, function(obj){ 
          		return obj.id == $routeParams.albumId; 
          	});
      		self.pageTitle = 'Edit album "'+ self.album.title + '"';
        });

      	this.initSaveChanges = function(){
      		self.album.title = self.album.title || '';
      		self.album.artist = self.album.artist || '';
      		self.album.country = self.album.country || '';
      		self.album.company = self.album.company || '';
      		self.album.year = self.album.year || '';
      		self.album.price = self.album.price || '';
      		self.album.price = self.album.price.toString();
      		self.album.logoUrl = self.album.logoUrl || '';
      		var data_send = JSON.stringify(self.album);

      		Albums.update({id: $routeParams.albumId}, data_send, function(resp) {
	        	location.href = "#!/albums/"+resp.id;
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp);
	        });
      	};
      }
    ]
  });