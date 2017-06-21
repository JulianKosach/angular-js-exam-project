'use strict';

describe('Album', function() {
  var $httpBackend;
  var Albums;

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

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Albums` service before each test
  beforeEach(module('core.album'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Albums_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/albums/all').respond(albumsGetDataSendedStr);

    Albums = _Albums_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the albums data from REST url `/albums/all`', function() {
    console.log('Start unit test: album.service.spec');

    var albums = Albums.get();
    expect(albums).toEqual([]);

    $httpBackend.flush();
    expect(albums).toEqual(albumsGetDataExpected);

    console.log('Success \n --------------------------------------');
  });

});
