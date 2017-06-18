angular.module('SML_app').factory('albumsFactory', function($http) {
	console.log('albumsFactory');
	var service = {};

	var albums = [];
	var albumsCount = 0;

	service.getAlbumsCount = function(){
		return albumsCount;
	};

	service.setAlbums = function(arr){
	 	albums = arr;
	    console.log(albums.length);
	};

	service.addAlbum = function(obj){
	 	albums.push(obj);
	};

	service.getAlbums = function(){
		return albums;
	};

	return service;
});