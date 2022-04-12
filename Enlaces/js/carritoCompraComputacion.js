
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'b250m Gaming Pro',
            precio: 115,
            descr:'Placa madre b250m Gaming Pro, es uno de los mejores productos para los aficionados a los juegos en PC, su rendimiento es uno de los mejores en el mercado y lo puedo obtener al precio economico'

        },
        {
            id: 2,
            nombre: 'Procesador Intel Core i7-6700 3.4 GHz Quad-Core',
            precio: 306,
            descr:'El Procesador  Intel Core i7, es uno de los procesadores mas potentes y con mayor demanda en el mercado de este tiempo por su optimizacion y rendimiento y su precio es de:'
        },
        {
            id: 3,
            nombre: 'GV-R929XOC-4GD',
            precio: 175,
            descr:'Targeta Grafica GV-R929XOC-4GD, es una de las mas buscadas por los gamers por su alto rendimiento y su funcionalidad al momento de correr juegos instalados en la PC de gama media-alta y lo puedes tener por:'
        },
        {
            id: 4,
            nombre: 'GV-R785OC-2GD',
            precio: 85,
            descr:'Targeta Grafica GV-R785OC-2GD, es una de las mas adecuadas para los gamers por su alto rendimiento y su funcionalidad al momento de correr juegos instalados en la PC de gama media-baja y lo puedes tener por:'
        },
        {
            id: 5,
            nombre: 'HP 23ER 23-INCH DISPLAY',
            precio: 10,
            descr:'Pantalla HP, es una de las pantallas con mejor resolucion en la actualidad ya que es de la marca ya reconocida HP es una muy cotizada por las peronas y su precio es de:'
        },
        {
            id: 6,
            nombre: 'Monitor LG 24MP59G Gaming',
            precio: 99.99,
            descr:'Pantalla LG, es una de las pantallas con mejor resolucion en la actualidad ya que es de la marca ya reconocida LG a nivel mundial es una muy cotizada por los gamers y su precio es de:'
        },
        {
            id: 7,
            nombre: 'CASE GAMING KIT COMBO',
            precio: 1679,
            descr:'PC Mouse + Teclado + Parlante + Audifonos. A un economico precio para los amantes de las PCs a un precio de:'
        },

         {
             id: 8,
             nombre: 'GA-Z270-Gaming 3',
             precio: 197.90,
            descr:'Placa madre GA-Z270-Gaming 3, es un producto potente para los aficionados a los juegos en PC, su rendimiento es uno de los mejores en el mercado y lo puedo obtener al precio economico'
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