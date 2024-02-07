const productos = [
    {
        id: "CAMPEONESDELMUNDO",
        titulo: "Seleccion Argentina 2022",
        imagen: "images/3Estrellas.jpg",
        precio: 60000
    },
    {
        id: "ALTERNATIVA94",
        titulo: "Seleccion Argentina Alternativa",
        imagen: "images/Alternativa94.jpg",
        precio: 65000
    },
    {
        id: "CAMPEONEDEAMERICA",
        titulo: "Seleccion Argentina 2021",
        imagen: "images/CopaAmerica21.jpg",
        precio: 55000
    },
    {
        id: "ALTERNATIVA22",
        titulo: "Seleccion Argentina Alternativa 2022",
        imagen: "images/CamisetaVioleta.jpg",
        precio: 50000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".botones-categoria");

function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    </div>
        `
        contenedorProductos.append(div);
    })
}

cargarProductos();

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        
        e.currentTarget.classList.add("active");

    })
})