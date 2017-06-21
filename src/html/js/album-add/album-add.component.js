'use strict';

// Register `albumAdd` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumAdd', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['Albums',
      function AlbumAddController(Albums) {
        var self = this;
      	this.pageTitle = 'Add new album ';
      	this.isAdd = true;
      	this.isSaveChanges = false;
        this.hrefBackBtn = '#!/albums';
        this.textBackBtn = 'Go back to albums list';

        this.album = {};

      	this.initAdd = function(){
          var data = {
            title: self.album.title || '',
            artist: self.album.artist || '',
            country: self.album.country || '',
            company: self.album.company || '',
            year: self.album.year || '',
            price: self.album.price || '',
            logoUrl: self.album.logoUrl || ''
          };
          data.price = data.price.toString();
          var data_send = JSON.stringify(data);

      		Albums.add({}, data_send, function(resp) {
	        	location.href = "#!/albums/"+resp.id;
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp.data);
	        });
      	};
      }
    ]
  });