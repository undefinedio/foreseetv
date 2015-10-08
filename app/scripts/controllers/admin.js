'use strict';

/**
 * @ngdoc function
 * @name kethtubeApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the kethtubeApp
 */
angular.module('kethtubeApp')
    .controller('AdminCtrl', function ($scope,$timeout, $firebaseAuth, $firebaseArray) {
        // AUTH
        var ref = new Firebase("https://kethtube.firebaseio.com");
        var auth = $firebaseAuth(ref);

        $scope.auth = auth;
        $scope.user = {};
        $scope.videos = {};

        $scope.auth.$onAuth(function (authData) {
            $scope.loggedIn = !!authData;
            $scope.authData = authData;
        });

        $scope.login = function (user) {
            $scope.error = undefined;

            auth.$authWithPassword(user)
                .then(function (authData) {
                    $scope.authData = authData;
                }).catch(function (error) {
                    $scope.error = error;
                });
        };

        //VIDEOS
        var refVideos = new Firebase("https://kethtube.firebaseio.com/videos").orderByChild('createdOn');
        $scope.newVideo = {};

        $scope.videos = $firebaseArray(refVideos);

        $scope.new = function (url) {
            if(!url) {
                return;
            }

            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length === 11) {
                if(_.find($scope.videos, { id : match[2]})) {
                    alert('deze video zit eral in fucktard');
                    return;
                }

                $scope.videos.$add({
                    id: match[2],
                    createdOn: new Date().getTime()
                });
            }

            $scope.newVideo = {};
        };

        //ACTIONS
        $scope.delete = function (video) {
            if (confirm('are you sure?')) {
                $scope.videos.$remove(video);
            }
        };
    });
