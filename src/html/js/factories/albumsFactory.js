angular.module('SML_app').factory('albumsFactory', function() {
	console.log('albumsFactory');
	var service = {};

	var albums = [
		{
			id: '1',
			albumTitle: 'Album 1'
		},
		{
			id: '2',
			albumTitle: 'Album 2'
		},
		{
			id: '3',
			albumTitle: 'Album 3'
		},
		{
			id: '4',
			albumTitle: 'Album 4'
		},
		{
			id: '5',
			albumTitle: 'Album 5'
		},
		{
			id: '6',
			albumTitle: 'Album 6'
		}
	];

	service.getAlbums = function(){
		return albums;
	}; 

	return service;
});