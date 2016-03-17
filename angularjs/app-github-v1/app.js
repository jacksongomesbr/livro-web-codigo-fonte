'use strict';

angular.module('githubclient', [])
    .controller('Home', function($scope, $http){
        $http.get('https://api.github.com/users/jacksongomesbr/repos')
            .then(function(response){
                $scope.repositorios = response.data;
            });

    });
