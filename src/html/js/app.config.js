'use strict';

angular.
  module('SML_app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/albums', {
          template: '<albums-list></albums-list>'
        }).
        when('/albums/add', {
          template: '<album-add></album-add>'
        }).
        when('/albums/:albumId', {
          template: '<album-detail></album-detail>'
        }).
        when('/albums/:albumId/edit', {
          template: '<album-edit></album-edit>'
        }).
        when('/albums/:albumId/delete', {
          template: '<album-delete></album-delete>'
        }).
        otherwise('/albums');
    }
  ]);