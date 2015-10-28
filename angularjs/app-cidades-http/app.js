(function(){

angular.module('cidades', [])
.controller('CidadesController', function($scope, $http) {

    $http.get('dados/estados.json').success(function(dados){
        $scope.estados = dados;
    });

    $http.get('dados/cidades.json').success(function(dados){
        $scope.cidades = dados;
    });

    $scope.salvar = function(cidade) {
        if (!$scope.cidade.edit) {
            var c = angular.copy(cidade);
            $scope.cidades.push(c);
            cidade.nome = "";
            cidade.estado = null;
        } else {
            $scope.cidade = null;
        }
    };

    $scope.excluir = function(index) {
        $scope.cidades.splice(index, 1);
    };

    $scope.editar = function(cidade) {
        $scope.cidade = cidade;
        $scope.cidade.edit = true;
    }
});

})();
