;(function() { //IIFE

console.log("Hola mundo!");


// Podemos utilizar números pero no en la primera posición.
let numero_1 = 3;

// Esta nomenclatura no es correcta.
// let 1numero = 3;

// Debemos evitar el uso de acentos.
let numero_2 = 4;

// Mala idea.
let número_3 = 6;

// Debemos evitar el uso de la "ñ".
const patasArana = 8;


// Damos por hecho que en esta variable se va a guardar el resultado de una suma.
let resultadoSuma = 5 + 5;

// No hay que preocuparse si el nombre es demasiado largo. Si es descriptivo está justificado.
let numeroDeDiasHastaElRetiro = 345;


// Antes de ECMAScript 6 todas las variables eran declaradas de esta manera. 
var totalDeAlumnos = 24;

let edad = 13;

// Debemos usar const siempre que nos sea posible. Solo emplearemos let en caso de que no nos quede otro remedio. 
const name = 'Pablo';


// Para definir una variable tipo string es obligatorio rodear el texto entre comillas. 
const nombre = 'Pablo'; 

// En JS no importa si usas comillas dobles o simples. 
const saludo = "¡Hola! ¿Cómo estás?";

console.log(typeof(nombre));
console.log(typeof(saludo));


// En el caso de las variables tipo number no debemos rodear el número entre comillas. 
let edad1 = 39; 

// Esta variable sería tipo string y no tipo number, ¿entiendes el por qué? 
let edad2 = '39';

console.log(typeof(edad1));
console.log(typeof(edad2));


// En este caso tenemos una variable tipo booleano que es verdadera. 
const mayorDeEdad = true;

console.log(typeof(mayorDeEdad));


}).call(this);