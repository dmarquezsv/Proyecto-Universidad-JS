var nombre, correo, asunto, mensaje, archivo, expresion; 



window.onload=function () {

document.getElementById("EnviarDatos").onclick= function(){
verificarDatos(); // Metodo para verificar los campos 
	// body...
}


}

function verificarDatos(){

	// Variables
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    dirc=document.getElementById("direccion").value;
    tarjeta = document.getElementById("Tarjeta").value;
   //Expresiones Regulares
    var reg = /^([a-z ñáéíóú]{3,60})*,([a-z ñáéíóú]{3,60})$/i;
    var regEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    var dir = /^([a-z ñáéíóú]{3,60})$/i;
  
   // Evaluamos cada campos correspodiente
    if (reg.test(nombre)) {
        if (regEmail.test(correo)) {
            if (dir.test(dirc)) {
                if (!tarjeta=="") {
                	// si los campos estan correcto
                    alert("Compra Realizada con exito")
                    alert("El Producto llegara entre 48 horas o 72 horas. Si tiene algun problema puede comunucarse con soporte Tecnico")
                   

                } else {
                    document.getElementById("alerta").style.background = "orange";
                    document.getElementById("alerta").style.width = "75%";
                    document.getElementById("alerta").style.margin = "auto";
                    document.getElementById("alerta").style.textAlign = "center";
                    document.getElementById("alerta").innerHTML = "¡Ingrese la tarjeta de credito'";
                }

            } else {
                //Dirección
               
                document.getElementById("alerta").style.background = "orange";
                document.getElementById("alerta").style.width = "75%";
                document.getElementById("alerta").style.margin = "auto";
                document.getElementById("alerta").style.textAlign = "center";
                document.getElementById("alerta").innerHTML = "¡Ingrese una dirección'";
            }

           
        }
        else {
            //Correo
            document.getElementById("alerta").style.background = "orange";
            document.getElementById("alerta").style.width = "75%";
            document.getElementById("alerta").style.margin = "auto";
            document.getElementById("alerta").style.textAlign = "center";
            document.getElementById("alerta").innerHTML = "¡Correo No Valido'";

        }

    }else
    {
        // Nombre

        document.getElementById("alerta").style.background = "orange";
        document.getElementById("alerta").style.width = "75%";
        document.getElementById("alerta").style.margin = "auto";
        document.getElementById("alerta").style.textAlign = "center";
        document.getElementById("alerta").innerHTML = "¡Nombre no valido! 'Nombre','Apellido'";
    }
    


	
}





