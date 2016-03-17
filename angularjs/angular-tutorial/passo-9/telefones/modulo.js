'use strict';

angular.module('moduloTelefone', ['phonecatServices'])
    .controller('TelefonesListaController', function($rootScope, $scope, $http, Telefones){
        $rootScope.pageTitle = 'Telefones - PhoneCat';
        $scope.telefones = Telefones.query();
    })
    .controller('TelefonesDetalhesController', function($rootScope, $scope, $http, $routeParams, Telefones){
        $scope.telefone = Telefones.get({phoneId: $routeParams.id}, function(telefone){
            $scope.telefone.imageUrl = telefone.images[0];
            $rootScope.pageTitle = telefone.name + ' - Phonecat';
        });
        $scope.mostrarImagem = function(imagem) {
            $scope.telefone.imageUrl = imagem;
        };
    });
