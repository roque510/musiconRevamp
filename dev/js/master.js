const $ = require('jquery');
const you = require('./main/test.js');

window.onbeforeunload = function(){
	var msg = "<------   Esta seguro que quiere salir? o Quisiera regresar y darle al boton de "ME GUSTA" que se encuentra al Inicio de la Pagina"
	return msg;
}

