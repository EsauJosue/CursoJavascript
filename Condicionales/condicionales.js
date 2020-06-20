'use strict'

var edad1 = 30;
var edad2 = 12;
var edad = 71;
var nombre = 'Esaú'; 
//Condicional IF
//Operadores relacionales
/*
Mayor que >
Menor que <
Mayor o igual >=
Menor o igual <=
Igual ==
Distinto !=

*/ 
if (edad1 > edad2) {
    console.log('Edad 1 es mayor que edad 2');
} else {
    console.log('La edad es inferior');
}

if (edad >= 18) {
    console.log('Eres mayor de edad');
    if (edad >=33) {
        console.log('Todavia eres Milenial');
    }else if (edad >= 70){
        console.log('Eres un anciano');
    }else{
        console.log('Ya no eres milenial');
    }
    
}else{
    console.log(nombre + ' aún es menor de edad, tiene '+ edad+ ' años');
}