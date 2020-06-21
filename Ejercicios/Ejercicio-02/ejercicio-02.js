'use strict'
var suma = 0;
var promedio = 0;

var count = parseInt(prompt('Cuantos números quieres ingresar para calcular?'));

if(! isNaN(count)){
   var array = [count];
for (let x = 1; x <= count; x++) {
    var num = parseInt(prompt('Ingresa el valor: '+ x));
    suma = parseInt(suma) + num; 
}

promedio = parseFloat(suma / count);
document.getElementById('cantidad').innerHTML = 'Cantidad de numeros ingresados es de: <strong>' + count+'</strong>';
document.getElementById('suma').innerHTML = 'La suma total de los valores es de: <strong>' + suma + '</strong>';
document.getElementById('media').innerHTML = 'El promedio es de: <strong>' + promedio + '</strong>';

}else{

    alert('Ingresa un valor valido');
}