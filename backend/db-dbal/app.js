(function(){

var API_BASE = '/livro-web-codigo-fonte/backend/db-dbal/api';

angular.module('cidades', ['ngRoute', 'angular-loading-bar'])
.config(
    function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeController'
            })
            .when('/estados', {
                templateUrl: 'views/estados/lista.html',
                controller: 'EstadosListaController'
            })
            .when('/estados/:id/editor', {
                templateUrl: 'views/estados/editor.html',
                controller: 'EstadosEditorController'
            })
            .when('/estados/editor', {
                templateUrl: 'views/estados/editor.html',
                controller: 'EstadosEditorController'
            })
            .when('/cidades', {
                templateUrl: 'views/cidades/lista.html',
                controller: 'CidadesListaController'
            })
            .when('/cidades/:id/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .when('/cidades/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
)

.controller('HomeController', function($rootScope, $scope, $http, $location) {
    $rootScope.mostrarMenuInicio = function() {
        return ($location.path() != '/');
    };

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
