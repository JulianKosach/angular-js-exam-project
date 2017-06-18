angular.module('SML_app').controller('albumEditorCtrl', function($http, albumsFactory) {
	console.log('albumEditorCtrl');
	var self = this;
	
	this.removeValues = function(){
		console.log('removeValues');
		self.title = '';
		self.artist = '';
		self.country = '';
		self.company = '';
		self.year = '';
		self.price = '';
		self.logoUrl = '';
	};

	this.addNewAlbum = function(){
		console.log('addNewAlbum');
		var obj = {
			title: self.title,
			artist: self.artist,
			country: self.country,
			company: self.company,
			year: self.year,
			price: self.price,
			logoUrl: self.logoUrl
		}
		albumsFactory.addAlbum(obj);
		self.removeValues();
		var send_data = JSON.stringify(obj);
		console.log(send_data);
		// $http.post('/albums/add', send_data).then(function(response) {
		// 	alert();
	 //    });
	};

});