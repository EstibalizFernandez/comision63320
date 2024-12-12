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


// SESSION y LOCAL STORAGE
/*
    Ambos son JSON
    Si seteas un valor para una clave que ya existe, pisa el valor
    Los métodos son los mismos para localStorage que para sessionStorage
    Todos los valores se van a guardar como String, incluídos los arrays, recogerá los valores y los guardará como un único valor separador por comas
*/
localStorage.setItem("clave", "valor"); // Para guardar
localStorage.getItem("clave"); // Para recuperar el valor


localStorage.clear(); // Elimina toda la información
const transformamosEnArray = localStorage.getItem("clave").split(",");
for (let i = 0; i < localStorage.length; i++) {
    const recogerLaClave = localStorage.key(i); // Así recuperaríamos todas las claves
    const recogerElValor = localStorage.getItem(i); // Así recuperaríamos todos los valores
}

const ejemploJSON = {
    clave1: "valor1",
    clave2: "valor2",
    clave3: "valor3"
};

// Local Storage. Se almacenan de forma indefinida hasta que eliminemos todos del navegador

// Session Storage. Se almacenan hasta que el usuario cierra el navegador

// OPERADORES TERNARIAS

let num = 5;
num += 10;
num -= 10;

// OPERADOR LÓGICO &&
confirmarNum = (num <10) && "es mayor que 10"; // le asigna el valor del && si es verdader o le da valor false

// OPERADOR LÓGICO || FALSY
// Si es distinto de 0, null, undenfined, NaN... devuleve el operador 1 y sono el 2
// Ejemplos de Falsy
console.log( 0 || "Falsy"); 
console.log( null || "Falsy");
console.log( undefined || "Falsy");
console.log( "" || "Falsy");
console.log( NaN || "Falsy");
console.log( false || "Falsy");
// Ejemplos devuelven el primer valor
console.log( 40 || "Falsy");
console.log( "hola" || "Falsy");
console.log( true || "Falsy");

// OPERADOR LÓGICO || NULLISH Como el || pero más acotado
// Ejemplos de Nullish
console.log( null ?? "Nullish"); 
console.log( undefined ?? "Nullish"); 
console.log( "" ?? "Nullish"); 
console.log( NaN ?? "Nullish"); 
// Ejemplos devuelven el primer valor
console.log( 0 ?? "Nullish"); 
console.log( 40 ?? "Nullish"); 
console.log( "hola" ?? "Nullish"); 
console.log( true ?? "Nullish"); 
console.log( false ?? "Nullish"); 

// Acceso condicional a objetos. En caso de que no exista, no me devuelvas error
const persona = {
    nombre: "x",
    profesion: {
        nombre: "x",
        categoria: "x"
    }
};
console.log(persona.profesion?.nombre) // Consulta si existe la propiedad nombre dentro de prosión del JSON persona. Si no existe trae undefined en vez de explotar

// Desestructurar un JSON con objetos anidados. Tiene una estructura pácticamente igual a la del JSON original
const { 
    nombre, 
    profesion: { 
        nombre: nombre_profesion, 
        categoria}
    } = persona; // crea una variable nombre y otra persona con los valores del JSON anterior
   // al nombre de la profesion le ponemos un alias porque no puede haber 2 variables con la misma clave 
   
   // DESESTRUCTURAR EN UNA FUNCIÓN
    const desestructurar = ( {nombre, profesion} ) => {
        console.log(nombre, profesion)
    };

    desestructurar(persona);

    // DESESTRUCTURACIÓN DE ARRAYS
    let nombres = ["javier", "ana", "koldo"];
    let [pers1, pers2, pers3, pers4] = nombres; // La 4 nos devuelve undefined
    let [, , pers3] = nombres; // Nos va a pintar solo a Koldo, nos salta los que dejemos vacíos

    // OPERADOR SPREAD
    const nombres2 = ["javier", "ana", "koldo"];
    console.log(nombres2); // Lo pinta como un Array
    console.log(...nombres2); // Pasa la info a string

// ejemplo spread con números
    Math.max(1,2,3,4,5,6);
    Math.min(1,2,3,4,5,6);

    const numeros2 = [1, 2, 3. 4];
    // funciona correctamente
    Math.max(...numeros2);
    Math.min(...numeros2);
    // fallaría porque le inserta un array y lo que necesita son parámetros individuales
    Math.max(numeros2);
    Math.min(numeros2);

    // también sirve para concatenar arrys
    const nombres3 = ["javier", "ana", "koldo"];
    const nombres4 = ["javier", "ana", "koldo"];
    const concatrenados = nombres3.concat(nombres4);
    const concatrenados2 = [...nombres3, ...nombres4]; // tú indicas que es array y luego desparramas la info dentro

    // objetos
    const persona1 = {
        nombre: "Galder",
        edad: "22"
    }

    const persona2 = {
        nombre: "Galder",
        edad: "22",
        ...persona1
    } // se pisan las propiedades que has puesto en origen
    const persona3 = {
        ...persona1,
        hijo: "Galder",
        edad_hijo: "22",
    } // hace añaden las propiedades

// En funciones
 function imprimirnombres(saludo, ...nombres){ // podemos pasarle infinitos valores
    console.log(nombres); // imprime un array
    for (const nombre of nombres) {
        console.log(`${saludo} ${nombre}`); // saludo se imprime fijo y el resto de forma dinámica en formato string, pueden haber tantos fijos como se quiera, siempre delante del spreed
    }
 }
 imprimirnombres("juana", "josefa", "paca", "lola");

 // ASINCRONÍA
 // timeout, función que recibe 2 parámetros, una función y un tiempo
 setTimeout( () => {
    console.log("espera 3 segundos");
 }, 3000);

 // setInterval, ejecuta constantemente cada los milisegundos que le indiques
 setInterval( () => {
    console.log("espera 3 segundos");
 }, 3000);

// Limpiar setInterval o setTimeout
clearTimeout(x); // Le tenemos que pasar lo que queremos limpiar
clearInterval(y);// Le tenemos que pasar lo que queremos limpiar


 // para forzar un punto de ruptura
 debugger; // añadimos esto en la línea de código, función... que queremos parar

 // PROMESAS
 // tiene 2 funciones, la primera es OK y la segunda KO que podemos utilizar cuando necesitemos
 const numero = 5;
 const promesa = new Promise ((resolve, reject) => {
    if (numero === 5) {
        resolve(numero++);
    } else {
        reject(numero--);
    }
 });

 // tienen 2 métodos disponibles, then() y catch(), para que ejecute cuando sea OK o KO
 promesa
    .then( (numeroNuevo) => {console.log("fue OK, puedo recibir parámetros", numeroNuevo) })
    .catch((nuevoNumero) => {console.log("fue KO, puedo recibir parámetros", nuevoNumero) })
    .finally( () => { console.log("terminó OK o KO pero no puede recibir parámetros"); });
 
    
// ASYNC - AWAIT
// solo se puede ejectuar en funciones
// hace que las promesas se resuelvan de forma síncrina, bloquea
