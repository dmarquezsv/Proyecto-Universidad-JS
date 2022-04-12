var nombre, correo, asunto, mensaje, archivo, expresion; 



window.onload=function () {

document.getElementById("EnviarDatos").onclick= function(){
verificarDatos(); // Metodo para evaluar los campos 
	// body...
}


}

function verificarDatos(){
	// Variables
nombre = document.getElementById("nombre").value;
correo = document.getElementById("correo").value;
asunto = document.getElementById("asunto").value;
mensaje = document.getElementById("mensaje").value;

 var reg = /^([a-z ñáéíóú]{3,60})*,([a-z ñáéíóú]{3,60})$/i; // Expresión regular del nombre
 var regEmail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; // Expresión regular de email
 var regasun=/^([a-z ñáéíóú]{3,100})$/i;; // Expresión regular de asunto

	if (reg.test(nombre)) { // Verifica cada campos
		if (regEmail.test(correo)) { // Verifica cada campos
			if (regasun.test(asunto)) { // Verifica cada campos
				if (regasun.test(mensaje)) { // Verifica cada campos

					document.getElementById("alerta").style.background = "#C6EBD6n";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Mensaje Enviado con EXITO'";

				}else{
					// Error  el de mensaje
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡No has ingresado un mensaje'";
				}

			}else{
				// error del asunto
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡No has ingresado un asunto'";
			}

		}

		else{		// error del correo
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Correo No Valido'";

		}

	}
	else{			//Error del Nombres
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Nombre no valido! 'Nombre','Apellido'";

	}
}





