'use strict'

var numero = parseInt(prompt('Ingresa un número: '));

for (let x = 0; x <= numero; x++) {
    if (numero%x == 0) {
        console.log('Divisor: '+ x);
    }
    
}