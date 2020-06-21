/*Calculadora de 2 números*/
'use strict'
validacion();

function validacion(){
    var num1 = parseInt(prompt('Ingresa el primer número'));
    var num2 = parseInt(prompt('Ingresa el segund número'));

    if(isNaN(num1) || isNaN(num2)){
        alert('Uno de los valores que ingresaste es incorrecto');
    }else{
        operaciones(num1,num2);
    }
}

function operaciones(numero1, numero2){
    //Suma
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2; 

    document.getElementById('resultado1').innerHTML = 'El resultado de la suma es :'+ suma;
    document.getElementById('resultado2').innerHTML = 'El resultado de la resta es :'+ resta;
    document.getElementById('resultado3').innerHTML = 'El resultado de la multiplicacion es :'+ multiplicacion;
    document.getElementById('resultado4').innerHTML = 'El resultado de la division es :'+ division;

    console.log('El resultado de la suma es :'+ suma);
    console.log('El resultado de la resta es :'+ resta);
    console.log('El resultado de la multiplicacion es :'+ multiplicacion);
    console.log('El resultado de la division es :'+ division);


}