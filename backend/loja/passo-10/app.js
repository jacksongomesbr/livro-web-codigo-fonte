'use strict';

angular.module('loja', ['ngRoute', 'moduloHome'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/entrar', {
                templateUrl: 'home/entrar.html',
                controller: 'EntrarController'
            })
            .when('/meus-dados', {
                templateUrl: 'home/meus-dados.html',
                controller: 'MeusDadosController'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('LojaController', function($rootScope, $scope, $http, $location) {
        $rootScope.pageTitle = 'Loja';
        $rootScope.cliente = false;

        $scope.sair = function() {
            $rootScope.cliente = false;
            $location.path('/');
        }
    });
