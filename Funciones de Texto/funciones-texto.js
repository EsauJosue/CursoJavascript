'use strict'
//Funciones de texto
//Transformacion de textos

var numero = 444;
var text1 = "Bienvenido al curso de JavaScript";
var text2 = "Es muy buen curso";

var dato = numero.toString();
    dato = text1.toUpperCase(); // convierte a mayusculas
    dato = text2.toLowerCase(); // Convierte a minusculas

var nombre = "HOla";

console.log(nombre.length);
// .lenth calcula la longitud de la variable y tambien para contar elementos en un array
//console.log(typeof dato);
console.log(dato)

//Concatenar - Unir Textos 

var textoTotal = text1 + text2; 
var textotOTAL2 = text1.concat(" " + text2); //uso de la funcion Concat

console.log(textoTotal);