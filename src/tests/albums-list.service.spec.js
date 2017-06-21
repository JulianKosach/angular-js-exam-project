'use strict';

describe('albumsList', function() {

  // Load the module that contains the `albumsList` component before each test
  beforeEach(module('SML_app'));

  // Test the controller
  describe('AlbumsListController', function() {
    var $httpBackend, ctrl;

    var albumsGetDataSended = {
      "0": {
        "title": "Empire Burlesque",
        "artist": "Bob Dylan",
        "country": "USA",
        "company": "Columbia",
        "price": 10.9,
        "year": 1985,
        "id": 0
      },
      "1": {
        "title": "Hide your heart",
        "artist": "Bonnie Tyler",
        "country": "UK",
        "company": "CBS Records",
        "price": 9.9,
        "year": 1988,
        "id": 1
      },
      "2": {
        "title": "Greatest Hits",
        "artist": "Dolly Parton",
        "country": "USA",
        "company": "RCA",
        "price": 9.9,
        "year": 1982,
        "id": 2
      }
    };
    var albumsGetDataSendedStr = JSON.stringify(albumsGetDataSended);
  
    var albumsGetDataExpected = [
      {
        "title": "Empire Burlesque",
        "artist": "Bob Dylan",
        "country": "USA",
        "company": "Columbia",
        "price": 10.9,
        "year": 1985,
        "id": 0
      },
      {
        "title": "Hide your heart",
        "artist": "Bonnie Tyler",
        "country": "UK",
        "company": "CBS Records",
        "price": 9.9,
        "year": 1988,
        "id": 1
      },
      {
        "title": "Greatest Hits",
        "artist": "Dolly Parton",
        "country": "USA",
        "company": "RCA",
        "price": 9.9,
        "year": 1982,
        "id": 2
      }
    ];

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/albums/all').respond(albumsGetDataSendedStr);

      ctrl = $componentController('albumsList');
    }));

    it('should create a `albums` property with 3 albums fetched with `$http`', function() {
      console.log('Start unit test: albums-list.service.spec');
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.albums).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.albums).toEqual(albumsGetDataExpected);

      console.log('Success \n --------------------------------------');
    });

  });

});
