let carrito = [];

let producto = prompt('¿Qué producto estás buscando?');

carrito.push(producto);
console.log('Producto agregado al carrito:' + producto);

function totalCompra() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++);
    return total;
}

function agregarIVA(total) {
    const IVA = 0.21;
    const totalConIVA = total + (total * IVA);
    return totalConIVA;
}

function ProductosDisponibles() {
    let productos = ['Camiseta seleccion argentina qatar 2022' , 'Camiseta seleccion argentina finalissima' , 'Camiseta seleccion argentina copa america 2021'];
    for (let i = 0; i < productos.length; i++)
    console.log(productos[i]);
}

function operacionCarrito(operacion) {
    carrito.forEach((producto) => {
        operacion(producto);
    })
}

function imprimirProducto(producto) {
    console.log("Producto en el carrito: " + producto);
}

aplicarOperacionACarrito(imprimirProducto);

let productos = [
    {nombre:'Camiseta seleccion argentina qatar 2022', precio: 55000},
    {nombre:'Camiseta seleccion argentina finalissima', precio: 52000},
    {nombre:'Camiseta seleccion argentina copa america 2021', precio: 50000}
];