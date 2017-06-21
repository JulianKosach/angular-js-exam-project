'use strict';

// Register `albumEdit` component, along with its associated controller and template
angular.
  module('SML_app').
  component('albumEdit', {
    templateUrl: 'templates/album-add.template.html',
    controller: ['$routeParams', 'Albums',
      function AlbumEditController($routeParams, Albums) {

        var self = this;
        this.pageTitle = 'Edit album ';
      	this.isAdd = false;
      	this.isSaveChanges = true;
        this.hrefBackBtn = '#!/albums/' + $routeParams.albumId;
        this.textBackBtn = 'Go back to album details';

        self.album = {};
        Albums.get({}, function(arr) {
          	self.album = _.find(arr, function(obj){ 
          		return obj.id == $routeParams.albumId;
          	});
        });
        
      	this.initSaveChanges = function(){
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

      		Albums.update({id: $routeParams.albumId}, data_send, function(resp) {
	        	location.href = "#!/albums/"+resp.id;
	        }, function(err_resp) {
	        	console.log('err_resp', err_resp);
	        });
      	};
      }
    ]
  });