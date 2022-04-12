

$(document).ready(function(){ // cuando este listo va ejecutar una función
	// llamamos las etiquetas de html del primer enlace
	$('ul.tabs li a:first').addClass('active'); // para agregarle una clase active para acitvar el color
	$('.secciones article').hide();//Ocultar todos los articulos
	$('.secciones article:first').show(); // solo muestre el primero
    // cada vez que haga clic al enlace 
	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');// vamos remover la clase actual
		$(this).addClass('active');// le va agregar la clase al dar clic
		$('.secciones article').hide();


		var activeTab = $(this).attr('href'); // va atreaer el valor del atributo de href
		console.log(activeTab);// verificar a la consola
		$(activeTab).show();// Muestra la información al click seleccionado
		
		return false;
	});
});