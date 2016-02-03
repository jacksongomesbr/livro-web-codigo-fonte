(function(){

var API_BASE = '/livro-web-codigo-fonte/backend/acessos-analytics/api';

angular.module('acessos-analytics', ['angular-loading-bar'])
.controller('HomeController', function($scope, $http) {
    
    $scope.salvar = function() {
        $http.post(API_BASE + '/acessos', $scope.acesso)
        .success(function(response) {
            alert('Os dados foram salvos com sucesso!');
            $scope.acesso.nome = '';
            $scope.acesso.url = '';
            $scope.acesso.data = '';
        });
    };    
    
    $scope.quantidadeDeAcessosPorNome = 0;
    $scope.estatisticasPorNome = function() {
        $http.get(API_BASE + '/acessos/estatisticas/' + $scope.nomeDoSite)
            .success(function(response) {
                $scope.quantidadeDeAcessosPorNome = response.quantidade;
            });
    };
    
    $scope.quantidadeDeAcessosPorURL = 0;
    $scope.estatisticasPorURL = function() {
        $http.post(API_BASE + '/acessos/estatisticas/url', {url: $scope.url})
            .success(function(response) {
                $scope.quantidadeDeAcessosPorURL = response.quantidade;
            });
    };    
    
    $scope.quantidadeDeAcessosPorIntervalo = 0;
    $scope.estatisticasPorIntervalo = function() {
        $http.post(API_BASE + '/acessos/estatisticas/tempo', 
            {data1: $scope.data1, data2: $scope.data2})
            .success(function(response) {
                $scope.quantidadeDeAcessosPorIntervalo = response.quantidade;
            })
            .error(function(){
                alert('Aconteceu um erro na consulta');
                $scope.quantidadeDeAcessosPorIntervalo = 0;
            });
    };
    
    /*
    $http.get(API_BASE + '/estados')
    .then(function(response) {
        $scope.estados = response.data;
        angular.forEach($scope.estados, function(estado) {
            $http.get(API_BASE + '/estados/' + estado.id + '/cidades')
            .then(function(response) {
                estado.cidades = response.data;
            });
        });
    });
    */
})

.controller('EstadosListaController', function($scope, $http, $location){
    $http.get(API_BASE + '/estados')
    .then(function(response){
        $scope.estados = response.data;
    });

    $scope.excluir = function(estado, index) {
        if (confirm('Tem certeza que deseja excluir o Estado ' + estado.nome + '?')) {
            $http.delete(API_BASE + '/estados/' + estado.id)
            .then(function(response){
                $scope.estados.splice(index, 1);
            });
        }
    };

    $scope.editar = function(estado) {
        $location.path('/estados/' + estado.id + '/editor');
    };
})

.controller('EstadosEditorController', function($scope, $http, $location, $routeParams){
    if ($routeParams.id) {
        $http.get(API_BASE + '/estados/' + $routeParams.id)
        .success(function(response){
            $scope.estado = response;
        });
    }

    $scope.salvar = function(estado) {
        $http.post(API_BASE + '/estados', estado)
        .success(function(response) {
            alert('Os dados foram salvos com sucesso!');
            $location.path('/estados');
        });
    };

    $scope.cancelar = function() {
        $location.path('/estados');
    }
})


.controller('CidadesListaController', function($scope, $http, $location){
    $http.get(API_BASE + '/cidades')
    .then(function(response){
        $scope.cidades = response.data;
    });

    $scope.excluir = function(cidade, index) {
        if (confirm('Tem certeza que deseja excluir a cidade ' + cidade.nome + '?')) {
            $http.delete(API_BASE + '/cidades/' + cidade.id)
            .then(function(response){
                $scope.cidades.splice(index, 1);
            });
        }
    };

    $scope.editar = function(cidade) {
        $location.path('/cidades/' + cidade.id + '/editor');
    };
})

.controller('CidadesEditorController', function($scope, $http, $location, $routeParams){
    if ($routeParams.id) {
        $http.get(API_BASE + '/cidades/' + $routeParams.id)
        .success(function(response){
            $scope.cidade = response;
        });
    }

    $http.get(API_BASE + '/estados')
    .success(function(response) {
        $scope.estados = response;
    });

    $scope.salvar = function(cidade) {
        $http.post(API_BASE + '/cidades', cidade)
        .success(function(response) {
            alert('Os dados foram salvos com sucesso!');
            $location.path('/cidades');
        });
    };

    $scope.cancelar = function() {
        $location.path('/cidades');
    }
})

})();
