'use strict'

var num1 = prompt('Ingresa el primer número');
var num2 = prompt('Ingresa el segundo número'); 

if (num1 == num2) {
    document.getElementById('resultado').innerHTML = '<div><p>Los números <strong>son iguales</strong></p></div>';
     
}
if (num1 > num2){
    document.getElementById('resultado').innerHTML = 'El primer número es mayor'; 
    

}
if(num1 < num2){
    document.getElementById('resultado').innerHTML = 'El segundo número es mayor';
    

}