(function(){

angular.module('cidades', ['ngRoute'])
.config(
    function($routeProvider){
        $routeProvider
            .when('/cidades', {
                templateUrl: 'views/cidades/lista.html',
                controller: 'CidadesListaController'
            })
            .when('/cidades/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .when('/cidades/:id/editor', {
                templateUrl: 'views/cidades/editor.html',
                controller: 'CidadesEditorController'
            })
            .otherwise({
                redirectTo: '/cidades'
            });
    }
);

angular.module('cidades').controller('CidadesListaController',
function($scope, $http, $location){
    $http.get('dados/cidades.json').success(function(dados){
        $scope.cidades = dados;
    });

    $scope.excluir = function(index) {
        if (confirm('Tem certeza que deseja excluir esta cidade?')) {
            $scope.cidades.splice(index, 1);
        }
    };

    $scope.editar = function(index) {
        $location.path('/cidades/' + index + '/editor');
    }
});

angular.module('cidades').controller('CidadesEditorController',
function($scope, $http, $routeParams, $location){
    $http.get('dados/estados.json').success(function(dados){
        $scope.estados = dados;
    });

    $http.get('dados/cidades.json').success(function(dados){
        $scope.cidades = dados;

        if ($routeParams.id) {
            $scope.cidade = $scope.cidades[$routeParams.id];
        }

    });

    $scope.salvar = function(cidade) {
        $location.path('/cidades');
    };

    $scope.cancelar = function() {
        $location.path('/cidades');
    };
});


})();
