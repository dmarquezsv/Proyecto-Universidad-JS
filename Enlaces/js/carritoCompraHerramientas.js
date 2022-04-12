
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Cortadora BOSCH',
            precio: 195.50,
            descr:'Esta cortadora es la las optima para cualquier trabajo que la requiera con su motor potente hace que su desempeno sea extraordinario y su precio es de'

        },
        {
            id: 2,
            nombre: 'Caja de Herramientas',
            precio: 55,
            descr:'Es una caja de Herramientas economica, duradera y muy espaciosa para todas las herramientas que tenga y lo puedes obtener a un precio de:'
        },
        {
            id: 3,
            nombre: 'Carro caja de herramientas',
            precio: 125,
            descr:'Este Carro de herramientas es muy espacioso para todas sus herramientas y de facil movimiento por sus ruedas y lo puedes obtener a un precio de:'
        },
        {
            id: 4,
            nombre: 'Juegos de llaves Combinadas',
            precio: 27,
            descr:'Este juego de llaves combinadas le contiene de diferentes medidas de llave para su diferente actividad en que las requiera y lo puede obtener a un precio de:'
        },
        {
            id: 5,
            nombre: 'Caja de herramientas profecional IRWIN',
            precio: 10,
            descr:'Esta caja de herramientas es para todas personas que deseen tener todas sus herramientas ordenadas dentro de dicha caja, su precio es de:'
        },
        {
            id: 5,
            nombre: 'Mini Pulidora DEWALT',
            precio: 99.95,
            descr:'Esta mini pulidora es una de las mas potentes de su tamano y optimiza el trabajo que se tenga que realizar con ella, su precio es de:'
        },
        {
            id: 5,
            nombre: 'Taladro WATTS',
            precio: 110,
            descr:'Este taldro es uno de los mejores en su clase ya que es potente y de facil uso para cualquier trabajo que lo necesite, su precio es de:'
        },

         {
             id: 6,
             nombre: 'Carreta de Contruccion',
             precio: 45.50,
            descr:'Esta carreta de contruccion es de las mas vendidas por su duracion de utilidad y su precio es de:'
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
        // Titulo
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