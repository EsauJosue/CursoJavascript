'use strict'

//Funciones anonimas don aquellas que no tienen nombre

function sumame(numero1, numero2, multiplicacionPorDos, divisionPorDos){
var suma = numero1 + numero2;
multiplicacionPorDos(suma);
divisionPorDos(suma);
}

sumame(10,5, dato =>{ //funcionCallBack
    console.log('La multiplicacion x 2 es igual a: ', dato*2);
}, dato =>{ //funcion de flecha
    console.log('La division entre 2 es igual : ', dato/2);
});