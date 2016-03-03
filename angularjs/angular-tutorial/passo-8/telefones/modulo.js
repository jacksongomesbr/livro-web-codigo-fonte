'use strict';

angular.module('moduloTelefone', [])
    .controller('TelefonesListaController', function($rootScope, $scope, $http){
        $rootScope.pageTitle = 'Telefones - PhoneCat';
        $http.get('data/phones/phones.json').then(function(response){
            $scope.telefones = response.data;
        });
    })
    .controller('TelefonesDetalhesController', function($rootScope, $scope, $http, $routeParams){
        $http.get('data/phones/' + $routeParams.id + '.json').then(
            function(response){
                $scope.telefone = response.data;
                $scope.telefone.imageUrl = $scope.telefone.images[0];
                $rootScope.pageTitle = $scope.telefone.name + ' - Phonecat';
            });
        $scope.mostrarImagem = function(imagem) {
            $scope.telefone.imageUrl = imagem;
        };
    });
