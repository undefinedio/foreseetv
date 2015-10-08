'use strict';

/**
 * @ngdoc directive
 * @name kethtubeApp.directive:specialEffects
 * @description
 * # specialEffects
 */
angular.module('kethtubeApp')
    .directive('specialEffects', function (hotkeys) {
        return {
            restrict: 'A',

            link: function postLink(scope, element, attrs) {
                scope.effects  = {};

                hotkeys.add({
                    combo: 's',
                    callback: function () {
                        scope.effects.sepa = ! scope.effects.sepa;
                        setFilter();
                    }
                });

                hotkeys.add({
                    combo: 'g',
                    callback: function () {
                        scope.effects.grayscale = ! scope.effects.grayscale;
                        setFilter();
                    }
                });

                hotkeys.add({
                    combo: 'b',
                    callback: function () {
                        scope.effects.blur = ! scope.effects.blur;
                        setFilter();
                    }
                });

                hotkeys.add({
                    combo: 'i',
                    callback: function () {
                        scope.effects.invert = ! scope.effects.invert;
                        setFilter();
                    }
                });

                function setFilter() {
                    var webkitFilter = [];

                    if(scope.effects.sepa) {
                        webkitFilter.push('sepia(1)');
                    }

                    if(scope.effects.grayscale) {
                        webkitFilter.push('grayscale(1)');
                    }

                    if(scope.effects.blur) {
                        webkitFilter.push('blur(10px)');
                    }

                    if(scope.effects.invert) {
                        webkitFilter.push('invert(1)');
                    }

                    element.css('-webkit-filter', webkitFilter.join(' '));
                }

            }
        };
    });
