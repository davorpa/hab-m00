;(function() { //IIFE
'use strict';

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


// No he asignado ningún valor a esta variable, por tanto, JavaScript le asignará automáticamente el valor de undefined. 
let numeroDeDiasHastaElSiguienteCumpleanos; 

console.log(typeof(numeroDeDiasHastaElSiguienteCumpleanos));


// A diferencia de undefined, null es un valor que el programador debe definir, no es asignado de forma automática. 
const fechaDeRecepcion = null;

console.log(typeof(fechaDeRecepcion));


let numA = 4;  
let numB = 2;

// Sumar
let suma = numA + numB;
console.log('suma', suma);

// Restar
let resta = numA - numB;
console.log('resta', resta);

// Multiplicar
let multiplica = numA * numB;
console.log('multiplica', multiplica);

// Cociente división
let cociente = numA / numB;
console.log('cociente', cociente);

// Resto de una división
let resto = numA % numB;
console.log('resto división', resto);

// Elevar "numA" a la potencia de "numB"
let potencia = numA ** numB;
console.log('potencia', potencia);

// Incrementar el valor de "numA" en una unidad.
numA++; // Es lo mismo que hacer "numA = numA + 1;" o "numA += 1;"

// Asignar a la variable "numB" el resultado de sumar "numB" más 15.
numB += 15; // Es lo mismo que hacer "numB = numB + 15;"


// En JavaScript se sigue la misma prioridad matemática a la hora de operar,
// primero se priorizan las multiplicaciones y las divisiones,
// luego van las sumas y las restas
console.log("4 + 2 * 3 =", 4 + 2 * 3); // 10 

// Ahora veamos que pasa si priorizamos la suma manualmente.
console.log("(4 + 2) * 3 =", (4 + 2) * 3); // 18


// Operadores lógicos y relacionales

// igualdad e identidad estricta (identidad + type)
console.log("false == 0 =",   false == 0); // true
console.log("false === 0 =",  false === 0); // false
console.log("false == '' =",  false == ''); // true
console.log("false === '' =", false === ''); // false
console.log("false == [] =",  false == []); // true
console.log("false === [] =", false === []); // false
console.log("10 == '10' =",   10 == "10"); // true
console.log("10 === '10' =",  10 === "10"); // false

// diferencia
console.log("10 !== '10' =",  10 !== "10"); // true

// mayor y menor que
console.log("10 < 9 =",  10 < 9); // false
console.log("10 < 12 =",  10 < 12); // true
console.log("10 > 12 =",  10 > 8); // true
console.log("10 > 5 =",  10 > 5); // false
console.log("10 <= 10 =",  10 <= 10); // true
console.log("10 <= '10' =",  10 <= "10"); // true
console.log("10 <= 8 =",  10 <= 8); // false
console.log("10 <= '9' =",  10 <= "9"); // false
console.log("10 >= '9' =",  10 >= "9"); // true
console.log("10 >= 9 =",  10 >= 9); // true

// conjuncion
console.log("10 >= 9 && false == 0 =",  10 === 9 && false == 0); // false

// disyuncion
console.log("10 >= 9 || false == 0 =",  10 >= 9 || false == 0); // true

// negacion
console.log("!false",  !false); // true
console.log("!undefined",  !undefined); // true
console.log("!0",  !0); // true
console.log("!!0",  !!0); // false
console.log("!''",  !''); // true


{
    // Condición "If else"
    let mayorDeEdad = true; 
    // Si la condición es cierta... 
    if (mayorDeEdad) { 
        // ¡Ejecuta este bloque de código! 
        console.log('La persona es mayor de edad.'); 
    // De lo contrario... 
    } else { 
        // ¡Ejecuta este bloque de código! 
        console.log('La persona es menor de edad.'); 
    }
}

{
    // Condición "If else" anidada
    let numero = 2;
    if (numero === 0) { 
        console.log('El número es el 0!');
    } else if (numero === 1) { 
        console.log('¡El número es el 1!');
    } else if (numero === 2) { 
        console.log('¡El número es el 2!');
    } else { 
        console.log('La variable tiene un valor distinto a 0, 1 o 2.');
    }
}


// Lo más común sería encontrarse con un 'i++' en lugar de 'i = i + 1'. En JS es exactamente lo mismo. 
console.log("Bucles...");
for (let i = 0; i <= 10; i = i + 1) { 
    console.log(i); 
}


}).call(this);