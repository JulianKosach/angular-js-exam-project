angular.module('SML_app').controller('albumsCtrl', function(albumsFactory) {
	console.log('albumsCtrl');

	this.albums = albumsFactory.getAlbums();

	this.openModal = function(e){
		openModal(this, e);
	};
});