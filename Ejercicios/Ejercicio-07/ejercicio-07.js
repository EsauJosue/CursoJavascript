'use strict'
//Tabla de multiplicar de un numero introducido por usuario
var num = 0;
validacion();



function validacion(){
    num = parseInt(prompt('Ingresa número '))
    if (isNaN(num)) {
        alert('El valor que ingresaste no es válido.')
        validacion()
    }else{
        multiplicacion(num);
    }
}

function multiplicacion(numero){
    for (let x = 1; x <= 10; x++) {
       let multiplo = numero * x;
       console.log(numero+' X '+x+' = '+multiplo)
        
    }

}