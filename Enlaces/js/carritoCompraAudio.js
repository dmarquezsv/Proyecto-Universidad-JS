
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Parlante SONY' ,
            precio: 30,
            descr:'Entrada de audio y de bluetooth capaz de iluminar como si fuese una bola de disco a  solo a:'

        },
        {
            id: 2,
            nombre: 'Parlantes AOC',
            precio: 20,
            descr:'Diseño unicos en nuestra tienda capaz de soportar bluetooth,de igual manera tiene entrada para audio a solo a:'
        },
        {
            id: 3,
            nombre: 'Camara Cannon',
            precio: 188,
            descr:'Ideal para la familia con una resolución Full HD y de gran alcance para las fotografias a solo:'
        },
        {
            id: 4,
            nombre: 'Parlante Mini',
            precio: 16,
            descr:'Paralante de bluetooth para niños a solo:'
        },
        {
            id: 5,
            nombre: 'Parlante pc',
            precio: 10,
            descr:'Parlante solo PC con una calidad de sonido a solo:'
        },
        {
            id: 6,
            nombre: 'Camara Samsung',
            precio: 100,
            descr:'Camara de seguirdad que trasminte en vivo, con una resolución HD a solo:'
        },
        {
            id: 7,
            nombre: 'Camara Profesional',
            precio: 500,
            descr:'Ideal para los fotos y videos Profesionales especialemte para Multimedia a a solo:'
        },

         {
             id: 8,
             nombre: 'Camara mini',
             precio: 130,
            descr:'Ideal para la familia con una resolución Full HD y de gran alcance para las fotografias a solo:'
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
            miNodoDes.textContent = info['descr'];    
        // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$ ' + info['precio'];
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