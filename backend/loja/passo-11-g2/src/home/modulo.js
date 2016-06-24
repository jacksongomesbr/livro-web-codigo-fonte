'use strict';

require('ngstorage');
var config = require('../config');

angular.module('moduloHome', ['ngStorage'])
    .controller('HomeController', function ($rootScope, $scope, $http) {
        $rootScope.pageTitle = 'Loja - Produtos';
        $http.get(config.API_ROOT + 'produtos/recent.php')
            .success(function (produtos) {
                angular.forEach(produtos, function (produto) {
                    if (!produto.imagem) {
                        produto.imagem = 'http://placehold.it/300x300';
                    }
                });
                $scope.produtos = produtos;
            });
        $http.get(config.API_ROOT + 'produtos/popular.php')
            .success(function (produtos) {
                angular.forEach(produtos, function (produto) {
                    if (!produto.imagem) {
                        produto.imagem = 'http://placehold.it/300x300';
                    }
                });
                $scope.populares = produtos;
            });
    })
    .controller('EntrarController', function ($rootScope, $scope, $http, $location, $localStorage) {
        $rootScope.pageTitle = 'Loja - Entrar';
        if ($rootScope.cliente) {
            $location.path('/meus-dados');
        }
        $scope.login = function () {
            $http.post(config.API_ROOT + 'clientes/validate.php', {
                'usuario': $scope.usuario,
                'senha': $scope.senha
            }).then(function (result) {
                $rootScope.cliente = result.data;
                $localStorage.cliente = result.data;
                $location.path('/meus-dados');
                $scope.formEntrar.$valid = true;
            }, function () {
                $scope.formEntrar.$valid = false;
                $scope.formEntrar.$invalid = true;
            });
        };
    })
    .controller('MeusDadosController', function ($rootScope, $scope, $http, $location) {
        $rootScope.pageTitle = 'Loja - Meus Dados';
        if (!$rootScope.cliente) {
            $location.path('/entrar');
        }
    })
    .controller('SobreController', function () {

    });
