angular.module("gdg", ['ngMaterial']);

angular.module("gdg").controller("gdgController", function($scope,  gdgService) {	

	$scope.usuarios = [
		{nome: "José", email: "jose@mail.com.br"},
		{nome: "Maria", email: "maria@mail.com.br"},
		{nome: "Ana", email: "ana@mail.com.br"},
	];

	$scope.adicionarUsuario = function(usuario) {
		$scope.usuarios.push(usuario);
		
		delete $scope.usuario;
	};

	$scope.getUsuarios = function() {
		gdgService.get().then(function(res){			
			$scope.usuarios = res.data;		
		});
	};

	$scope.getUsuarios(); // Get data from service (gdgService)

	$scope.adicionarUsuarioServer = function(usuario) {
		gdgService.post(usuario).then(function(res){
			$scope.getUsuarios();
			delete $scope.usuario;
		});
	};
});

// Get and POST Data  -  RESTful API (backend nodeJS)
angular.module("gdg").service('gdgService',  function($http) {
	
	this.get = function() {
		return $http.get('http://127.0.0.1:5000/usuarios');
	};

	this.post = function(usuario) {
		return $http.post('http://127.0.0.1:5000/usuarios', usuario);
	};
});