'use strict'

//Operadores

var numero1 = 7; 
var numero2 = 12;
var operacion = numero1 + numero2; 

console.log('El valor de la operación es de '+ operacion);
//Tipos de datos
var numero_entero = 44;
var cadena_texto = 'Hola que tal';
var verdadero_falso = true;
console.log(cadena_texto);

//Para convertir datos a numeros se usa la funcion Number
var numero_falso = '33';
console.log(numero_falso+' Impresion del número ya que es solo cadena');
//Se utiliza la funcion Number para convertir de cadena de texto a numero. 
console.log(Number(numero_falso)+33);
//Tambien se puede usar la funcion parseInt
console.log(parseInt(numero_falso)+10);
//O bien, se usa parseFloat para los decimales
console.log(parseFloat(numero_falso)+45.7);
//Para convertir de entero a texto se utiliza la funcion String
console.log(String(numero_entero)+" Este es el numero que se convirtio de entero a texto");
//Para conocer el tipo de datos se utiliza typeof
console.log(typeof numero_falso);
console.log(typeof numero_entero);