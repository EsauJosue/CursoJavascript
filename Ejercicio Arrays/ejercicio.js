'use strict'
 var array = [];
 //var numeros = new Array(6); Otra manera de declarar arrays
for (let index = 0; index <= 5; index++) {
    array[index] = parseInt(prompt("Ingrese un numero "));
    
}

function mostrarConsola (){
    console.log(array);
}

function mostrarCuerpo() {
    document.write("<br>"+array+"<br>");
}

function ordenarArray() {
    
    var array_order = array.sort(function(a,b){return a-b;});
    document.write("<br> Arreglo ordenado: "+ array_order);
    arrrayInverso(array_order);
}
function arrrayInverso(array_order){
    var array_reverse = array_order.reverse();
    document.write("<br> Array invertido: "+ array_reverse);
}
function longitudArray(){
    var longitud = array.length;
    document.write("<br>La longitud del arreglo es de : "+ longitud);
}
function busquedaElemento(){
    var elemento = parseInt(prompt("Ingrese el valor a buscar: "));
    var posicion = array.findIndex(numero => numero == elemento);
    if(posicion && posicion != -1){
        document.write("<br> El elemento fue localizado en el indice: "+ posicion);
    }else{
        document.write("<br> El elemento no fue localizado");
    }

}

mostrarConsola();
mostrarCuerpo();
ordenarArray();
longitudArray();
busquedaElemento();






