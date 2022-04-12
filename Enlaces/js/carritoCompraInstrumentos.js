
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Piano' ,
            precio: 200,
            descri: 'El piano es un instrumento de cuerda percutida porque suena cuando se golpean las cuerdas. Se toca con un teclado de teclas blancas que hacen notas y sobre todo buena calidad.'
        },
        {
            id: 2,
            nombre: 'Armonica Ranchera',
            precio: 15,
            descri: 'Es un instrumento de viento, del grupo de instrumentos de viento-madera y del se toca soplando o aspirando el aire sobre uno de sus agujeros individuales o sobre múltiples agujeros.'
        },
        {
            id: 3,
            nombre: 'Acordeon',
            precio: 175,
            descri: 'El acordeón forma parte del grupo de los instrumentos de viento. Dispone de un fuelle cerrado por cajas en sus extremos, que albergan distintas teclas o llaves dentro del mismo.'
        },
        {
            id: 4,
            nombre: 'Violin',
            precio: 125,
            descri: 'Es un instrumento de origen italiano de cuerda frotada o percusión que tiene cuatro cuerdas. Es el más pequeño y agudo de la familia de los instrumentos de cuerda clásicos.'
        },
        {
            id: 5,
            nombre: 'Flauta ocarina',
            precio: 50,
            descri: 'La ocarina es un instrumento antiguo bastante parecido a la flauta.Por lo general, está formado por un cuerpo oval y puede tener desde cuatro a trece perforaciones para colocar los dedos'
        },
        {
            id: 5,
            nombre: 'Bateria Yamaha',
            precio: 100,
            descri: 'Es un instrumento musical que pertenece a la familia de percusión. Este equipo estándar se usa en la música pop, el blues, el jazz, el rock, el heavy metal (en casi todos los géneros musicales).'
        },
        {
            id: 5,
            nombre: 'Caja',
            precio: 75,
            descri: 'Tambor de caja prolongada, sin bordones en la cara inferior, usado en las orquestas y bandas militares es un instrumento muy conocido y sobre todo de buena calidad.'
        },

         {
             id: 6,
             nombre: 'Tuba',
             precio: 95,
            descri: 'Por sus medidas y calidad sonora son ideales tanto para los estudiantes como para los músicos que están buscando una tuba manejable , fácil , buena afinación y con un sonido grande.'
         },

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
        // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'container');
        // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
        // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
        // Descripcion
            let miNodoDes = document.createElement('p');
            miNodoDes.classList.add('card-text');
            miNodoDes.textContent = info['descri'];    
        // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' + info['precio'];
        // Boton
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar Carrito';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            ;
        // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoDes);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);


        }
    }
    function anyadirCarrito() {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(this.getAttribute('marcador'))
        // Calculo el total
        calcularTotal();
        // Renderizamos el carrito
        renderizarCarrito();
        alert('Se ha agregado con exito');
    }

    function renderizarCarrito() {
        // Vaciamos todo el html
        $carrito.textContent = '';
        // Generamos los Nodos a partir de carrito
        carrito.forEach(function (item, indice) {
            // Obtenemos el item que necesitamos de la variable base de datos
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${miItem[0]['nombre']} - ${miItem[0]['precio']}$`;
            // Boton de borrar
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'Eliminar';
            miBoton.setAttribute('posicion', indice);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        })
    }

    function borrarItemCarrito() {
        // Obtenemos la posicion que hay en el boton pulsado
        let posicion = this.getAttribute('posicion');
        // Borramos la posicion que nos interesa
        carrito.splice(posicion, 1);
        // volvemos a renderizar
        renderizarCarrito();
        // Calculamos de nuevo el precio
        calcularTotal();
    }

    function calcularTotal() {
        // Limpiamos precio anterior
        total = 0;
        // Recorremos el array del carrito
        for (let item of carrito) {
        // De cada elemento obtenemos su precio
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
        let totalDosDecimales = total.toFixed(2);
        // Renderizamos el precio en el HTML
        $total.textContent = totalDosDecimales;
    }
    // Eventos

    // Inicio
    renderItems();
}