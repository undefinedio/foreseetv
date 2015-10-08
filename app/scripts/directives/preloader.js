'use strict';

/**
 * @ngdoc directive
 * @name kethtubeApp.directive:preLoader
 * @description
 * # preLoader
 */
angular.module('kethtubeApp')
    .directive('preLoader', function ($timeout, preLoaderService) {
        return {
            link: function (scope, element) {
                $timeout(function () {
                    hide();
                }, 3000);

                function hide() {
                    element.addClass('inverse');
                    preLoaderService.done();

                    $timeout(function () {
                        element.fadeOut();
                    }, 1000);
                }
            }
        };
    });
