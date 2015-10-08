'use strict';

/**
 * @ngdoc overview
 * @name kethtubeApp
 * @description
 * # kethtubeApp
 *
 * Main module of the application.
 */
angular
    .module('kethtubeApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'youtube-embed',
        'firebase',
        'cfp.hotkeys',
        'FBAngular'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',

                resolve: {
                    boot: function(preLoaderService) {
                        return preLoaderService.promise();
                    }
                }
            })
            .when('/admin', {
              templateUrl: 'views/admin.html',
              controller: 'AdminCtrl',
              controllerAs: 'admin'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
