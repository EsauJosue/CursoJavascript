'use strict'
//Funciones
//Una función es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2){
    //Cojunto de instrucciones a ejecutar
    console.log("Suma: "+ (numero1+numero2));
    console.log("Resta: "+ (numero1-numero2));
    console.log("Multipliación: "+ (numero1*numero2));
    console.log("División: "+ (numero1/numero2));
    console.log("******************************************")
    return 'Hola soy una calculadora';


   
}
//Invocar o llamar a una función
for (let i = 0; i <= 10; i++) {
    calculadora(i,8);
    
}
