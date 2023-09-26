//////////////////
// VARIABLES
//////////////////
// Tipos de datos
//////////////////
// Numero (int)
var numero = 1
// Cadena de texto (String)
var nombre = 'Yamil'
// Booleano (bool)
var booleano = true
// Arreglo (Array)
var conjunto = [1, 2, 3, 4, 5, 'Palabra', false, new Object(), new Array()]
// Objeto (Object)
var persona = { nombre: 'Carlos', apellido: 'Gomez', edad: 34, es_adulto: true }

/*
Comentario de bloque
para varias líneas
*/

// Comentario de una línea con barras dobles iniciales

var one = 1;
var two = 2;

// Operaciones ariméticas
var result = 4 + 2;
console.log(result);

result = result + 2;
console.log(result);

result = one + two;
console.log(result);

// ESTRUCTURAS DE CONTROL

// Condicional
if (result == 2) {
    console.log('El resultado es igual a 2')
} else if (result == 4) {
    console.log('El resultado es igual a 4')
} else {
    console.log('El resultado no es igual a 2 ni a 4')
}

// Bucles
for (var i = 0; i < 10; i++) {
    console.log(i);
}

while (numero < 10) {
    console.log('Numero es:', numero);
    numero++;
}

do {
    console.log('Do While - Numero es:', numero);
    numero++;
} while (numero < 20)

// Funciones
function saludar(nombre, edad) {
    console.log('Hola ' + nombre);
    console.log('Tu edad es ' + edad);
    var edad_anio_siguiente = edad + 1;
    console.log('El año que viene tendrás ' + edad_anio_siguiente);
}

function suma(a, b) {
    var resultado = a+b;
    console.log('El resultado de tu suma es:', resultado);
}

// Ejecución de funciones
saludar('Juan', 20);
saludar('Carlos', 30);
saludar('Maria', 42);

saludar('Yamil', 30);
suma(10, 14);

// Arreglos y métodos
var numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);
numeros.push(7);
console.log(numeros);

console.log(numeros.length);
var numeros_antes = numeros.pop();
console.log(numeros_antes);
console.log(numeros);
numeros.shift();
console.log(numeros);
numeros.unshift(1);
console.log(numeros);
console.log(numeros.indexOf(2));

console.log('---');

numeros.forEach(function(element){
    console.log(element);
})

console.log('---');

function iterarNumeros(lista) {
    for(var i=0; i < lista.length; i++){
        console.log(lista[i]);
    }
}

console.log('Llamada a función iterarNumeros');
iterarNumeros(numeros);

// Objetos
var persona = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 35,
    nombre_completo: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

saludar(persona.nombre, persona.edad);

console.log(persona.nombre_completo());

function saludo2(){
    return 'Saludo2';
}

var saludo_var = saludo2();
console.log(saludo_var);

