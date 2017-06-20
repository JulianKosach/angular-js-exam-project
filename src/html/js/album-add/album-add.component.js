'use strict';

// Register `albumAdd` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumAdd', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['Albums',
      function AlbumAddController(Albums) {
        var self = this;
      	this.pageTitle = 'Add new album';
      	this.isAdd = true;
      	this.isSaveChanges = false;
        this.hrefBackBtn = '#!/albums';
        this.textBackBtn = 'Go back to albums list';

        this.album = {};

      	this.initAdd = function(){
      		self.album.title = self.album.title || '';
      		self.album.artist = self.album.artist || '';
      		self.album.country = self.album.country || '';
      		self.album.company = self.album.company || '';
      		self.album.year = self.album.year || '';
      		self.album.price = self.album.price || '';
      		self.album.logoUrl = self.album.logoUrl || '';
      		var data_send = JSON.stringify(self.album);

      		Albums.add({}, data_send, function(resp) {
	        	location.href = "#!/albums/"+resp.id;
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp.data);
	        });
      	};
      }
    ]
  });