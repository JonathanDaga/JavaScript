const precio = prompt('Ingrese el precio');
const saldo = 5000;

console.log(precio);
if ( precio > saldo) {
    alert('Fondos insuficientes');

}

else if ( precio < saldo) {
    alert('Compra exitosa');
}



