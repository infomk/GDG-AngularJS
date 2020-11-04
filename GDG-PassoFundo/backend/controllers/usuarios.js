var listaUsuarios = [
  {'nome': 'Joao', 'email': 'joao@email.com'}
];

exports.get = function (req, res) {

	res.json(listaUsuarios);
};

exports.post = function (req, res) {
  var data = req.body;
   if(data.nome && data.email){
     listaUsuarios.push({'nome':data.nome, 'email':data.email});
     res.json(listaUsuarios);
   } else {
     res.json({'erro':'parametros incorretos (nome, email)'});
     return;
   }
	
};
