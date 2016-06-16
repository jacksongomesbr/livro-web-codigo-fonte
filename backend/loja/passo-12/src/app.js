'use strict';

require('./config');
require('./app.css');
require('angular');
require('angular-route');
require('ngstorage');
require('./produtos/modulo');
require('./home/modulo');
global.$ = global.jQuery = require('jquery');
require('bootstrap');

angular.module('loja', ['ngRoute', 'ngStorage', 'moduloHome', 'moduloProdutos'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                template: require('./home/home.html'),
                controller: 'HomeController'
            })
            .when('/entrar', {
                template: require('./home/entrar.html'),
                controller: 'EntrarController'
            })
            .when('/meus-dados', {
                template: require('./home/meus-dados.html'),
                controller: 'MeusDadosController'
            })
            .when('/sobre', {
                template: require('./home/sobre.html'),
                controller: 'SobreController'
            })
            .when('/produtos/:id', {
                template: require('./produtos/produto.html'),
                controller: 'ProdutoController'
            })
            .when('/carrinho', {
                template: require('./home/carrinho.html'),
                controller: 'CarrinhoController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('LojaController', function($rootScope, $scope, $http, $location, $localStorage) {
        $rootScope.pageTitle = 'Loja';
        $rootScope.cliente = false;

        if ($localStorage.cliente) {
            $rootScope.cliente = $localStorage.cliente;
        }

        if (!$localStorage.carrinho) {
            $localStorage.carrinho = [];
        }

        $scope.sair = function() {
            $rootScope.cliente = false;
            $location.path('/');
            delete $localStorage.cliente;
        }
    });
