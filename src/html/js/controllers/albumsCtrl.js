angular.module('SML_app').controller('albumsCtrl', function($http, albumsFactory) {
	console.log('albumsCtrl');

	var self = this;

	this.albums = albumsFactory.getAlbums();

	this.getAlbums = function() {
		$http.get('/albums/all').then(function(response) {
			var new_albums = [];
	   		_.each(response.data, function(obj){
				new_albums.push(obj);
	   		});
	   		self.albums = new_albums;
	   		albumsFactory.setAlbums(new_albums);
	    });
	};

	this.getAlbums();

});