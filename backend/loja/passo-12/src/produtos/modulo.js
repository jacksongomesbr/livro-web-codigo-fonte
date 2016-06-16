'use strict';

var config = require('../config');

module.exports = angular.module('moduloProdutos', ['ngStorage'])
    .controller('ProdutoController', function($rootScope, $scope, $http, $routeParams, $location, $localStorage){
        $rootScope.pageTitle = 'Loja - Produto';
        $http.get(config.API_ROOT + 'produtos/' + $routeParams.id)
            .then(function(result) {
                $scope.produto = result.data;
                $scope.produto.imagemUrl = require('../../imagens/' + $scope.produto.id + '.jpg');            
            });

        $scope.adicionarAoCarrinho = function() {
            if (!$localStorage.carrinho) {
                $localStorage.carrinho = [];
            }
            var achou = false;
            for(var i = 0; i < $localStorage.carrinho.length && !achou; i++) {
                var item = $localStorage.carrinho[i];
                if (item.id == $scope.produto.id) {
                    item.quantidade++;
                    achou = true;
                }
            }
            if (!achou) {
                $scope.produto.quantidade = 1;
                $localStorage.carrinho.push($scope.produto);
            }
            $location.path('/carrinho');
        };
    });
