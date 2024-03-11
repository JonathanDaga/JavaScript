// PRODUCTOS

const productos = [
    {
        id: "camiseta-titular-mundial-2022",
        titulo: "Camiseta titular mundial 2022",
        imagen: "./img/3 estrellas.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50000
    },
    {
        id: "camiseta-suplente-mundial-2022",
        titulo: "Camiseta suplente mundial 2022",
        imagen: "./img/CamisetaVioleta.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50000
    },
    {
        id: "camiseta-finalissima-2022",
        titulo: "Camiseta Finalissima 2022",
        imagen: "./img/Finalissima.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50000
    },
    {
        id: "camiseta-copa-america-2021",
        titulo: "Camiseta Copa America 2021",
        imagen: "./img/CopaAmerica21.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 50000
    },
    {
        id: "camiseta-alternativa-mundial-1994",
        titulo: "Camiseta alternativa mundial 1994",
        imagen: "./img/Alternativa94.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 60000
    },
    {
        id: "camiseta-alternativa-mundial-1990",
        titulo: "Camiseta alternativa mundial 1990",
        imagen: "./img/Retro1.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 60000
    },
    {
        id: "camiseta-alternativa-mundial-1986",
        titulo: "Camiseta alternativa mundial 1986",
        imagen: "./img/Retro2.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 60000
    },
    {
        id: "camiseta-titular-mundial-2006",
        titulo: "Camiseta titular mundial 2006",
        imagen: "./img/Retro3.jpg",
        categoria: {
            nombre: "Retro",
            id: "retro"
        },
        precio: 60000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".botones-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classListAdd("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            
            tituloPrincipal.innerText = "Todos los productos";

            const productosBoton = productos.filter(producto => producto.categoria.id = e.currentTarget.id);
            cargarProductos(productosBoton);
        }
        else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
}else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find (producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
