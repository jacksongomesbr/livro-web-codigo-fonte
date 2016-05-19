'use strict';

angular.module('moduloHome', [])
    .controller('HomeController', function($rootScope, $scope, $http){
        $rootScope.pageTitle = 'Loja - Produtos';
        $http.get('backend/produtos/list.php')
            .success(function(produtos) {
                $scope.produtos = produtos;
            });
    })
    .controller('EntrarController', function($rootScope, $scope, $http, $location) {
        $rootScope.pageTitle = 'Loja - Entrar';
        $scope.login = function() {
            $http.post('backend/clientes/validate.php', {
                'usuario' : $scope.usuario,
                'senha' : $scope.senha
            }).then(function(result){
                if (result) {
                    $rootScope.cliente = result.data;
                    $location.path('/meus-dados');
                }
            });
        };
    })
    .controller('MeusDadosController', function($rootScope, $scope, $http, $location) {
        $rootScope.pageTitle = 'Loja - Meus Dados';
    });
