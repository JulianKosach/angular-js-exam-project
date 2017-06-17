var albumsFactory = angular.module('SML_app').factory('albumsFactory', function($http) {
	console.log('albumsFactory');
	var service = {};

	var albums = [
		{
			title: 'Album 1',
			artist: 'Artist Artist'
		}
	];
	var albumsCount = 0;

	// var url = '../albums/all';
	// $http.get('../albums/all')
 //        .success(function (result) {
 //            console.log('success', result);
 //        })
 //        .error(function (result) {
 //            console.log('error');
 //        })

	service.getAlbumsCount = function(){
		return albumsCount;
	};

	service.getAlbums = function(){
		return albums;
	};

	return service;
});