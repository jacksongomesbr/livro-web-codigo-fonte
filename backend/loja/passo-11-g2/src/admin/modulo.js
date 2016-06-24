'use strict';

var config = require('../config');

module.exports = angular.module('moduloAdmin', [])
    .controller('AdminProdutosController', function ($rootScope, $scope, $http, $routeParams) {
        $rootScope.pageTitle = 'Loja - Administração - Produtos';
        $http.get(config.API_ROOT + 'produtos/list.php')
            .then(function (result) {
                $scope.produtos = result.data;
            });
        $scope.excluir = function (produto) {
            if (confirm('Tem certeza que deseja excluir "' + produto.nome + '"?')) {
                $http.post(config.API_ROOT + 'produtos/delete.php?id=' + produto.id)
                    .then(function (result) {
                        $http.get(config.API_ROOT + 'produtos/list.php')
                            .then(function (result) {
                                $scope.produtos = result.data;
                            });
                    });
            }
        }
    })
    .controller('AdminProdutoController', function ($rootScope, $scope, $http, $routeParams, $location) {
        $scope.salvar = function() {
            $http.post(config.API_ROOT + 'produtos/save.php', $scope.produto)
                .then(function (result) {
                    $location.path('/admin/produtos');
                    $scope.form.$valid = true;
                }, function () {
                    $scope.form.$valid = false;
                    $scope.form.$invalid = true;
                })
        }
    });
