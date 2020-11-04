
var ctrlUsuarios = require('./controllers/usuarios.js');


module.exports = function (app) {

	app.get('/', function(req, res) {
		res.json({'GDG': 'Passo Fundo - RS'});
	});
	
	app.get('/usuarios', ctrlUsuarios.get);
	
	app.post('/usuarios', ctrlUsuarios.post);
};