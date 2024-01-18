function Producto( nombre, precio ){
    this.nombre = nombre;
    this.precio = precio;
    this.precioFINAL = 0;
    this.sumarIVA = function(){
        this.precioFINAL = this.precio * 1.21;
        alert('El precio es $' + this.precio + ' | Con IVA es $' + this.precioFinal)
    }
}

const producto1 = new Producto('Camiseta Argentina Mundial 2022' , 55000);
const producto2 = new Producto('Camiseta Argentina Copa America 2021' , 48000);
const producto3 = new Producto('Camiseta Argentina Finalissima 2022' , 50000);

producto1.sumarIVA();

console.log( producto1);
console.log( producto1.nombre);