// ***OBJETOS***

// Clases
class Producto {
    constructor (nombre, precio, vendido = false) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = vendido;
    }

    calcularIVA() {
        return this.precio * 0.21;
    }
}

// Funciones

const productoNuevo = new Producto("leche", 30);
// Inicio del programa

console.log(productoNuevo.calcularIVA());

// ***ARRAY***

const letras = ["a", "b", "c", "d"];
letras.push("e"); // añade al final
letras.unshift("z"); // añade al inicio

for (let i  = 0; i < letras.length; i++) {
    console.log("añadidas", letras[i]);
}

letras.pop(); // elimina y devuelve el último 
const pop = letras.pop(); 
letras.shift(); // elimina y devuelve el primero
const shift = letras.shift(); 

console.log("POP", pop, "SHIFT", shift);

for (let i  = 0; i < letras.length; i++) {
    console.log("eliminadas", letras[i]);
}

const numeros = [1,2,3,4,5,6,7,8,9];
const slice = numeros.splice(1,2); // desde index 1 déjame 2, modifica el array original
console.log("SLICE", slice);

const join = numeros.join("-"); // devuelve string con los elementos separados por el caracter que le pase
console.log("JOIN", join);

const concat = numeros.concat(numeros);
console.log("concat", concat); // devuelve un nuevo array con la concatenacion, no cambia el original

const indexof  = numbers.indexOf(5); // devuelve -1 si no lo encuentra
const includes  = numbers.includes(5); // devuelve true o false
const reverse  = numbers.reserve(); // altera el elemento original
// FUNCIONES DE ORDEN SUPERIOR

array = ["perro", "pájaro", "`periquito", "tortuga"];

const print = array.forEach(element => {
    console.log(element);
});

const find = array.find(element => {
    return true;
});

const filter = array.filter( (el) => {
    return el == "pájaro"
}); // Genera un nuevo array con los elementos que cumplen la condición o array vacío

const some = array.some( (el) => {
    return el == "pájaro"
}); // devuelve true o false

const map = array.map( (newel) => {
    return el + " el mejor";
}); // clona y transforma

const reduce = array.reduce((acumulador, el) => {
    return acumulador.push(el);
}, []); // recibe 2 params, 

const sort = array.sort((a, b) => {
    if (a.tolowecase() < b.tolowecase()) {
        return -1;
    } else if ( a.tolowecase() > b.tolowecase()) {
        return 1;
    } else {
        return 0;
    }
}); // Ordena el array original

// FUNCIONES DE ORDEN SUPERIOR 2
// operar
// length
// replace
// trim
// array
// slice
// toString
// push
// join
// concat

// MATH
const E = Math.E;
const PI = Math.PI;

const max = Math.min(1, Infinity, 3, 4, 5); // minimo
const min = Math.max(1, 2, -Infinity, 4, 5); // maximo

const ceil = Math.ceil(1.1); // redondea para arriba, devuelve 2
const floor = Math.floor(2.99); // redondea para abajo, devuelve 2
const round = Math.round(2.51); // redondea al entero más próximo hacia arriba o abajo, devuelve 3

const sqrt = Math.sqrt(1.1); // devuelve la raíz cuadrada X o NAN

const abs = Math.abs(1.1); // devuelve el valor absoluto de un número

const random = Math.random(); // devuelve un random entre 0 y 0.99
const randomModificado = Math.random() * 30 + 20; // devuelve un random entre 20 y 50
const randomModificadoRedondeando = Math.floor(Math.random() * 30 + 20); // devuelve un random entre 20 y 50 sin decimales

// DATE
const hoy = new Date();
const ayer = new Date(
    2024, 10, 11, 10, 20, 30
); // Año, mes enero es 0, día, hora, minutos, segundos
const ayer2 = new Date("November 11, 2024 10:20:30"); // otra forma de hacerlo
const año = hoy.getFullYear();
const mes = hoy.getMonth();
const dia = hoy.getDay();
const horas = hoy.getHours();
const minutos = hoy.getMinutes();
const segundos = hoy.getSeconds();
const minisegundos = hoy.getMilliseconds(); // muchas más
// formatear la fecha
const strig = hoy.toDateString(); // abreviatura en texto
const formatoLocal = hoy.toLocaleString(); // formato del país
const fechaLocal = hoy.toLocaleDateString(); // como la anterior pero solo fecha
const tiempoLocal = hoy.toTimeString(); // como Locale pero solo el tiempo sin la fecha



