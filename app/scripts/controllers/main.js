'use strict';

/**
 * @ngdoc function
 * @name kethtubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kethtubeApp
 */
angular.module('kethtubeApp')
    .controller('MainCtrl', function ($scope, $firebaseArray, hotkeys, Fullscreen, $timeout) {
        var refVideos = new Firebase("https://kethtube.firebaseio.com/videos");
        var $videos = $firebaseArray(refVideos);
        var array;
        var playing = true;

        var i = 0;
        var timeout;

        $scope.effects = {};

        $scope.goFullscreen = function () {
            if (Fullscreen.isEnabled()) {
                Fullscreen.cancel();
            } else {
                Fullscreen.all();
            }
        };

        $scope.mouseMove = function () {
            $scope.showMenu = true;

            if (timeout) {
                $timeout.cancel(timeout);
            }

            timeout = $timeout(function () {
                $scope.showMenu = false;
            }, 3500);
        };

        $scope.showMenu = function () {

        };

        $videos.$loaded(function (videos) {
            array = _.shuffle(videos);
            $scope.video = array[i].id;
        });

        $scope.$on('youtube.player.ended', function () {
            i++;
            $scope.video = array[i].id;
        });

        var prevVideo = function () {
            i--;

            if (i < 0) {
                i = 0;
            }

            $scope.video = array[i].id;
        };

        var nextVideo = function () {
            i++;

            if (i >= (array.length - 1)) {
                i = array.length - 1;
            }
            $scope.video = array[i].id;
        };

        hotkeys.add({
            combo: 'left',
            callback: function () {
                prevVideo();
            }
        });

        hotkeys.add({
            combo: 'f',
            callback: function () {
                $scope.goFullscreen();
            }
        });

        hotkeys.add({
            combo: 'space',
            callback: function () {
                if (playing) {
                    $scope.player.pauseVideo();
                    playing = false;
                } else {
                    $scope.player.playVideo();
                    playing = true;
                }
            }
        });



        hotkeys.add({
            combo: 'right',
            callback: function () {
                nextVideo();
            }
        });

        $scope.playerVars = {
            modestbranding: 1,
            controls: 0,
            autoplay: 1,
            showinfo: 0,
            iv_load_policy: 3
        };
    })
;
