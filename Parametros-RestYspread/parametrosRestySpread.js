'use strict'

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
    //...resto_de_frutas los 3 puntos ayudan para cachar todos los valores que no están definidos en el paso de parametros dentro de la función. 
    console.log('Fruta 1: ', fruta1);
    console.log('Fruta 2: ', fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melón", "Coco");
var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas, "Sandia", "Pera", "Melón", "Coco");
//los 3 puntos antes de frutas indica que se está pasando el array frutas pero es cachado como 2 elementos diferentes y no como array. Esto es Spread
//Spread es cuando se envian arrays y para que sean cachados como elementos independientes
//Rest para que sean cachados elementos que no son contemplados en el paso de parametros. 
