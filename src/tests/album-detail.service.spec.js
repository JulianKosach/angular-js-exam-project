'use strict';

describe('albumDetail', function() {

  // Load the module that contains the `albumDetail` component before each test
  beforeEach(module('albumDetail'));

  // Test the controller
  describe('AlbumDetailController', function() {
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
  
    var albumsGetDataExpected = {
        "title": "Hide your heart",
        "artist": "Bonnie Tyler",
        "country": "UK",
        "company": "CBS Records",
        "price": 9.9,
        "year": 1988,
        "id": 1
      };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('/albums/all').respond(albumsGetDataSendedStr);

      $routeParams.albumId = 1;

      ctrl = $componentController('albumDetail');
    }));

    it('should fetch the album details', function() {
      console.log('Start unit test: albums-detail.service.spec');

      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.album).toEqual({});

      $httpBackend.flush();
      expect(ctrl.album).toEqual(albumsGetDataExpected);

      console.log('Success \n --------------------------------------');
    });

  });

});