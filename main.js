let carrito = [];

function agregarProductoAlCarrito() {
    let producto = prompt('¿Qué producto estás buscando?');
    carrito.push(producto);
    actualizarCarritoEnDOM();
}

function actualizarCarritoEnDOM() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = ''; // Limpiamos el contenido anterior del carrito

    carrito.forEach((producto) => {
        const productoElement = document.createElement('p');
        productoElement.textContent = producto;
        carritoContainer.appendChild(productoElement);
    });
}

function totalCompra() {
    let total = 0;
    return total;
}

function agregarIVA(total) {
    const IVA = 0.21;
    const totalConIVA = total + (total * IVA);
    return totalConIVA;
}

function ProductosDisponibles() {
    let productos = ['Camiseta seleccion argentina qatar 2022', 'Camiseta seleccion argentina finalissima', 'Camiseta seleccion argentina copa america 2021'];
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
    }
}

function aplicarOperacionACarrito(operacion) {
    carrito.forEach((producto) => {
        operacion(producto);
    });
}

function imprimirProducto(producto) {
    console.log("Producto en el carrito: " + producto);
}

const agregarProductoBtn = document.getElementById('agregar-producto-btn');
agregarProductoBtn.addEventListener('click', agregarProductoAlCarrito);
