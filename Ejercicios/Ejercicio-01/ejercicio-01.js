'use strict'
solicitud();

function solicitud(){
    var num1 = prompt('Ingresa el primer número');
    var num2 = prompt('Ingresa el segundo número');

    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2)){
        alert('Ingresaste datos incorrectos');
        solicitud();
        
    }
    else{
        comparacion(num1,num2);
    }
    

}
function comparacion(numero1, numero2){
 
    if (numero1 == numero2) {
        document.getElementById('resultado').innerHTML = '<div><p>Los números <strong>son iguales</strong></p></div>';
         
    }
    if (numero1 > numero2){
        document.getElementById('resultado').innerHTML = 'El primer número es mayor'; 
           
    }
    if(numero1 < numero2){
        document.getElementById('resultado').innerHTML = 'El segundo número es mayor';
        
    
    }

}

