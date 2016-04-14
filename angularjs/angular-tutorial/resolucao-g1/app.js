'use strict';

angular.module('escola', ['ngRoute'])
    .controller('HomeController', function($rootScope, $scope, $location) {
        $scope.sair = function() {
            $rootScope.usuario = "";
            $location.path('/');
        }
    })
    .controller('AlunoController', function($scope, $http, $routeParams){
        $http.get('/data/alunos.json').then(function(response){
            var alunos = response.data;
            var cadd = 0;
            var ccom = 0;
            var crac = 0;
            var cint = 0;
            var cont = 0;
            for(var i = 0; i < alunos.length; i++) {
                if (alunos[i].id == $routeParams.filho) {
                    $scope.aluno = alunos[i];
                }
                for(var j = 0; j < alunos[i].turmas.length; j++) {
                    if (alunos[i].turmas[j].nome == $routeParams.turma) {
                        cont++;
                        cadd += alunos[i].turmas[j].avaliacao.ADD;
                        ccom += alunos[i].turmas[j].avaliacao.COM;
                        crac += alunos[i].turmas[j].avaliacao.RAC;
                        cint += alunos[i].turmas[j].avaliacao.INT;
                    }
                }
            }
            $scope.media_add = cadd/cont;
            $scope.media_com = ccom/cont;
            $scope.media_rac = crac/cont;
            $scope.media_int = cint/cont;
            for(var i = 0; i < $scope.aluno.turmas.length; i++) {
                if ($scope.aluno.turmas[i].nome == $routeParams.turma) {
                    $scope.turma = $scope.aluno.turmas[i];
                }
            }
        });
    })
    .controller('LoginController', function($rootScope, $scope, $http, $location) {
        $http.get('/data/usuarios.json').then(function(response){
            $scope.usuarios = response.data;
        });
        $scope.login = function() {
            var achou = false;
            for(var i = 0; i < $scope.usuarios.length; i++) {
                if ($scope.usuarios[i].cpf == $scope.cpf && $scope.usuarios[i].senha == $scope.senha) {
                    achou = true;
                    $rootScope.usuario = $scope.usuarios[i].cpf;
                    $rootScope.usuario_tipo = $scope.usuarios[i].tipo;
                }
            }
            if (achou) {
                $location.path('/dashboard');
            } else {
                $scope.mensagem = "login incorreto";
            }
        };
    })
    .controller('DashboardController', function($rootScope, $scope){

    })
    .controller('FilhosController', function($rootScope, $scope, $http){
        $http.get('/data/alunos.json').then(function(response){
            var alunos = response.data;
            var filhos = [];
            for(var i = 0; i < alunos.length; i++) {
                if (alunos[i].pai == $rootScope.usuario) {
                    filhos.push(alunos[i]);
                }
            }
            $scope.filhos = filhos;
        });
    })
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'login.html',
                controller: 'LoginController'
            })
            .when('/dashboard', {
                templateUrl: 'dashboard.html',
                controller: 'DashboardController'
            })
            .when('/dashboard/filhos', {
                templateUrl: 'filhos.html',
                controller: 'FilhosController'
            })
            .when('/dashboard/filhos/:filho/:turma', {
                templateUrl: 'aluno.html',
                controller: 'AlunoController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
