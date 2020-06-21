'use strict'
var numero = 0;
validacion();


function validacion(){
    numero = parseInt(prompt('Ingrese un número: '));
if (isNaN(numero)) {
   alert('El valor que ingresaste no es número');
    validacion();
}else{
    if(numero%2 == 0){
    document.getElementById('resultado').innerHTML = 'El número que ingresaste es un número par';

    }else{
    document.getElementById('resultado').innerHTML = 'El número que ingresaste es un número impar';

    }
}
}



