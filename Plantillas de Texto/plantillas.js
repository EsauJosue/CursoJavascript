'use strict'

var nombre = prompt('Ingrese su nombre:');
var apellidos = prompt('ingresa tus apellidos: ');
//Las plantillas de texto se definen con comillas invertidas
var texto =`<h1>Hola que tal</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);