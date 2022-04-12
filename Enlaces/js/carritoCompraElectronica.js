
window.onload = function () {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Cable para red',
            precio: 30,
            descr:'El cable es el medio que los PC de una red se pueden comunicar. Hay distintitos tipos de cables para hacer una red y diferentes tipos de calidad.'

        },
        {
            id: 2,
            nombre: 'Modulo SB12',
            precio: 2.50,
            descr:'Este modulo para arduino es muy util para poder realizar distintas tareas con el asi mismo poder programarlo y obtener excelentes resultados'
        },
        {
            id: 3,
            nombre: 'Breadboard',
            precio: 10,
            descr:'Un breadboard (protoboard) es un dispositivo para prototipado temporal sin soldadura con componentes electrónicos y probar diseño de circuitos.'
        },
        {
            id: 4,
            nombre: 'Soldador electrico',
            precio: 7,
            descr:'Un soldador eléctrico, también conocido como cautín ,es una herramienta eléctrica usada para soldar. Funciona convirtiendo la energía eléctrica en calor.'
        },
        {
            id: 5,
            nombre: 'Arduino UNO',
            precio: 25,
            descr:'Arduino Uno es una placa electrónica basada en ATmega328. Cuenta con 14 entradas/salidas digitales, de las cuales 6 se pueden utilizar como salida.'
        },
        {
            id: 6,
            nombre: 'Raspberry Pi 3',
            precio: 50,
            descr:'Es una placa base de 85 x 54 milímetros en el que se aloja un chip Broadcom BCM2835 con procesador ARM hasta a 1 GHz de velocidad.'
        },
        {
            id: 7,
            nombre: 'Resistencia',
            precio: 0.95,
            descr:'La resistencia es muy usada para regular la energia estas pueden ser de 4 bandas o 5 bandas eso depende de la utilidad que se le dara y en donde se usara.'
        },

         {
             id: 8,
             nombre: 'Jumper',
             precio: 0.50,
            descr:'Un jumper o saltador es un elemento que permite cerrar el circuito eléctrico del que forma parte dos conexiones. Esto puede hacerse mediante soldadura.'
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
            miNodoPrecio.textContent = '$ '+ info['precio'];
        // Boton
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar Carrito';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            ;
        // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoDes);
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
        alert('Se Agrego correctamente');

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