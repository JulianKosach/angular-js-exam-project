angular.module('SML_app').factory('albumsFactory', function() {
	console.log('albumsFactory');
	var service = {};

	var albums = [
		{
			id: '1',
			albumTitle: 'Album 1',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-05.jpg'
		},
		{
			id: '2',
			albumTitle: 'Album 2',
			albumArtist: 'Artist Artist',
			logoUrl: 'https://s-media-cache-ak0.pinimg.com/originals/b1/aa/5b/b1aa5b517fa2cd9de90b907765e2e332.jpg'
		},
		{
			id: '3',
			albumTitle: 'Album 3',
			albumArtist: 'Artist Artist'
		},
		{
			id: '4',
			albumTitle: 'Album 4',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://www.designformusic.com/wp-content/uploads/2016/01/perfectly-chilled-album-cover-artwork-design-500x500.jpg'
		},
		{
			id: '5',
			albumTitle: 'Album 5',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg'
		},
		{
			id: '6',
			albumTitle: 'Album 6',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-05.jpg'
		},
		{
			id: '7',
			albumTitle: 'Album 7',
			albumArtist: 'Artist Artist'
		},
		{
			id: '8',
			albumTitle: 'Album 8',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://www.designformusic.com/wp-content/uploads/2016/01/perfectly-chilled-album-cover-artwork-design-500x500.jpg'
		},
		{
			id: '9',
			albumTitle: 'Album 9',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://www.designformusic.com/wp-content/uploads/2015/10/insurgency-digital-album-cover-design.jpg'
		},
		{
			id: '10',
			albumTitle: 'Album 10',
			albumArtist: 'Artist Artist',
			logoUrl: 'http://illusion.scene360.com/wp-content/uploads/2014/10/computergraphics-album-covers-2014-05.jpg'
		}
	];

	service.getAlbums = function(){
		return albums;
	}; 

	return service;
});