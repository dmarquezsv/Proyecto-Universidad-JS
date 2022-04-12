 function mostrar(){
document.getElementById('enviado1').style.display = 'block';

}


function	validar(){

var nombre, correo, asunto, mensaje, archivo, expresion; 

nombre = document.getElementById("nombre").value;
correo = document.getElementById("correo").value;
asunto = document.getElementById("asunto").value;
mensaje = document.getElementById("mensaje").value;
archivo = document.getElementById("archivo").value;
expresion = /\w+@\w+\.+[a-z]/;


if (nombre === "") {
	alert("El campo esta vacío");
	return false;
}
else if (nombre.length>20){
	alert("El nombre es muy largo");
	return false;
}
else if (correo.length>50){
	alert("El correo es muy largo");
	return false;
}
else if (!expresion.test(correo)) {
	alert("El correo no es válido")
	return false;
}

}