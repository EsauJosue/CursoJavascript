'use strict'

var generos = ["Terror", "Suspenso", "Comedia", "Drama", "Ciencia Ficción", "Acción", "Animadas"];
var titulos = ["La dama y el vagabundo", "Barrio 13", "Titanic", "Jamaica bajo cero", "Ace Ventura"];
var lenguajes = ["PHP", "GO", "JAVA", "C++"];

var cine = [generos, titulos];

console.log(cine[1][1]);

titulos.push("Batman"); //Ingresa nuevos elementos al array
titulos.pop(); //Elimina el ultimo elemento del array

var indice = titulos.indexOf('Barrio 13');

if(indice > -1 ){
    titulos.splice(indice, 1); //Elimina el elemento del array (indice, hasta donde se tiene que eliminar, en este caso solo está eliminando eñ indice de la pelicula Barrio 13 que es el 1)
}

var peliculas_string = titulos.join(); //convierte los elementos de un array en una cadena de texto

var cadena ="texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //Convierte cadena de texto en array dependiendo de lo que este adentro de los parentesis
console.log(peliculas_string);

titulos.sort(); //Ordena el array por orden alfabetico
titulos.reverse(); //Invierte el orden de un array

for(let lenguaje in lenguajes){
    document.write(lenguajes[lenguaje]);
}


//Busquedas de Array

var busqueda = lenguajes.find(function (lenguaje) {
    return lenguajes == "PHP";
});

console.log(busqueda);

var precios = [10,20,30,40,80,120];
var busqueda = precios.some(precio => precio > 40); //some busca si hay un precio que cumpla con la condicíon, en este caso que precio > que 40
console.log(busqueda);