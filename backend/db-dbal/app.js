(function(){

var API_BASE = '/livro-web-codigo-fonte/backend/db-dbal/api';

angular.module('cidades', ['ngRoute', 'angular-loading-bar'])
.config(
    function($routeProvider){
        $routeProvider
            .when('/estados', {
                templateUrl: 'views/estados/lista.html',
                controller: 'EstadosListaController'
            })
            .otherwise({
                redirectTo: '/estados'
            });
    }
)
.controller('EstadosListaController', function($scope, $http){
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

    $scope.editar = function() { };
});

})();
