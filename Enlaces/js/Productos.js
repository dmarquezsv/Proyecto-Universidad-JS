 
// Variables para almacenar  Datos y contador para incrementes en las tablas
 var contar=0;
 var datos=[];


// Funcionalidad del Programa
 function inicio(){
	//evento de boton
	document.getElementById("btn1").onclick=function(){

		// LLAMAMOS a los input formato texto para almacernarlo  en las variables 
       	dato1=document.getElementById("PRODUCTO").value;
        dato2=parseFloat(document.getElementById("CANTIDAD").value);
        dato3=parseFloat(document.getElementById("COSTO").value);
        nombre=document.getElementById("nombre").value;
        apellido=document.getElementById("apelldio").value;



 
        // Los datos que se almacena cada vez que se ejecuta el
        analisisT(dato1,dato2,dato3);

    }

    document.getElementById("btn2").onclick=function(){
    	mostrar_datos(); // llamamos a la Función mostrar los datos de las tablas 
    }

}		
			// almacen para guardar los datos y que se valla incrementando
		function guardardatos(dato1,dato2,dato3,tipo){
			var fila = [dato1,dato2,dato3,tipo];
			datos[contar]=fila;
			contar++;
		}

		function mostrar_datos(){
			//creamos la tabla para mostraserlo al usuario
			var texto= "<table class= 'table'>";
			texto +="<thead><td>Producto Añadido</td><td>Cantidad</td><td>Total A pagar</td></td></thead>";
			for (i=0;i<datos.length;i++){
				texto+="<tr>";
				for (j=0;j<3;j++){
					texto+="<td>";
				texto+= datos[i][j];
					texto+="</td>";
				}
				texto+="</tr>";
			}

			texto+="</table>";
			//Visualización de resultado para el usuario
			document.getElementById("resultado2").innerHTML=texto;


		}


        function analisisT(dato1,dato2,dato3){

        // Mulitplicación de los Productos
	        var TotalApagar=0;
	         TotalApagar=dato2*dato3;

	         //Datos Guardados  lo lleva para mostraserlo

	      guardardatos(dato1,dato2,'$'+ TotalApagar);


		}
		//Funcionaliada

	window.onload=inicio;
