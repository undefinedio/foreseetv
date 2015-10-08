'use strict';

/**
 * @ngdoc service
 * @name kethtubeApp.preLoaderService
 * @description
 * # preLoaderService
 * Service in the kethtubeApp.
 */
angular.module('kethtubeApp')
  .service('preLoaderService', function ($q) {
        var _defer = $q.defer();
        return {
            promise: function () {
                return _defer.promise;
            },

            done: function () {
                _defer.resolve();
            }
        };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
