'use strict'

//Uso de Arrays o arreglos

var nombre = "Josue";
var nombres = ["Josue Martínez", "Esau", "Martinez" , 36, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres);
console.log(lenguajes[0]); //Imprime el array lenguajes en el indice
console.log(lenguajes.length); //Imprime la longitud del arrray

var elemento = parseInt(prompt("Que elemento del array quieres?: ",0));
if (elemento >= nombres.length) {
    alert("No hay tantos elementos");
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

document.write("Los lenguajes de programación son: ");
//Para recorrer un array
/* for (let i = 0; i < lenguajes.length; i++) { 
   document.write(lenguajes[i]+ "<br> ");
    
} */

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - "+elemento+"</li>");
});