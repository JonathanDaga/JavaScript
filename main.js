function operacion(numero1, numero2, operador) {
    if (operador === '+') {
        return numero1 + numero2;
    } else if (operador === '-') {
        return numero1 - numero2;
    } else if (operador === '*') {
        return numero1 * numero2;
    } else if (operador === '/') {
        if (numero2 !== 0) {
            return numero1 / numero2;
        } else {
            return 'Error: No se puede dividir por cero';
        }
    } else {
        return 'Error: Operador no válido';
    }
}

function pedirDatos() {
    let numero1 = parseInt(prompt('Ingrese el primer número:'));
    let numero2 = parseInt(prompt('Ingrese el segundo número:'));
    let operador = prompt('Ingrese el operador (+, -, *, /):');

    let resultado = operacion(numero1, numero2, operador);

    alert('El resultado es: ' + resultado);
}

pedirDatos();
