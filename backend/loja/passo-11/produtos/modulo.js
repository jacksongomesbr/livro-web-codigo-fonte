'use strict';

angular.module('moduloProdutos', [])
    .controller('TelefonesListaController', function($rootScope, $scope, $http){
        $rootScope.pageTitle = 'Loja - Produtos';
        $http.get(config.API_ROOT + '/produtos/list.php', function(produtos) {
            $scope.produtos = produtos;
        });
    });
