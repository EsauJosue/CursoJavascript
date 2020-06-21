'use strict'

var inicio = parseInt(prompt('Ingresa el número inicial del Rango'));
var fin = parseInt(prompt('Ingresa el valor final'));

for (let x = inicio; x < fin; x++) {
    if (x % 2 != 0){
        console.log(x);
    }
    
}