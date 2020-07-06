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

var busqueda = text1.indexOf("curso");  //indexOf Busca una palabra o letra en la variable correspondiente
var busqueda2 = text2.lastIndexOf("curso"); //lastIndexOf Busca la última palabra o letra enla variable correspondiente
var busqueda3 = text2.search("curso"); //search Busca una palabra o letra enla variable correspondiente
var busqueda4 = text2.match("curso"); //match Busca una palabra o letra enla variable correspondiente y arroja como resultado un array de resultados como el inpit completo, en que caracter esta la palabra o letra busqueda y además cuantos resultados se obtienen. 
var busqueda5 = text2.substr(14,5); //saca las palabras o letras que están a partir del primer rango y hasta el ultmo rango
var busqueda6 = text2.charAt(44); //Busca la letra que está en la posición especificada. 
var busqueda7 = text2.startsWith("Vitor"); //Busca la palabra o letra al inicio de la palabra especificada y arroja true si la encontró y false si no la encontró
var busqueda8 = text1.includes("JavaScript"); //Busca una palabra o una letra y arroja true o false si la encuentra o no

//Remplazo de texto

var reemplazo = text1.replace("Bienvenido", "Hola"); //Reemplaza la palabra Bienvenido por la de Hola
var cortar_string = text1.slice(14,22); //Corta a partir del caracter especificado hasta el segundo parametro
var separador = text1.split(" "); //Separa las palabras (super usado para generar busquedas)
var quita_espacios = text1.trim(); //quita espacios al inicio y al final 

console.log(separador);