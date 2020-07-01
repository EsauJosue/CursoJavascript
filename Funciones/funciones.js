'use strict'
//Funciones
//Una función es una agrupacion reutilizable de un conjunto de instrucciones

function calculadora(numero1, numero2, mostrar = false){
    //Cojunto de instrucciones a ejecutar

    if(mostrar== false){
        console.log("Suma: "+ (numero1+numero2));
        console.log("Resta: "+ (numero1-numero2));
        console.log("Multipliación: "+ (numero1*numero2));
        console.log("División: "+ (numero1/numero2));
        console.log("******************************************");
    }else{
        document.write("Suma: "+ (numero1+numero2)+'<br>');
        document.write("Resta: "+ (numero1-numero2)+'<br>');
        document.write("Multipliación: "+ (numero1*numero2)+'<br>');
        document.write("División: "+ (numero1/numero2)+'<br>');
        document.write("******************************************");

    }
  


   
}
//Invocar o llamar a una función
calculadora(1,4);
calculadora(2,5,true);
