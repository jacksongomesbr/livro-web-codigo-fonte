'use strict';

angular.module('phonecat', ['ngRoute', 'moduloTelefone'])
    .config(function($routeProvider){
        $routeProvider
            .when('/telefones', {
                templateUrl: 'telefones/lista.html',
                controller: 'TelefonesListaController'
            })
            .when('/telefones/:id', {
                templateUrl: 'telefones/detalhes.html',
                controller: 'TelefonesDetalhesController'
            })
            .otherwise({
                redirectTo: '/telefones'
            });
    });
