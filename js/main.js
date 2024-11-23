// Consultamos la fecha de nacimiento
// const dia = prompt("Introduce tu día de nacimiento (DD):");
// const mes = prompt("Introduce tu mes de nacimiento (MM):");
// const anio = prompt("Introduce tu año de nacimiento (AAAA):");

const mostrarInfo = document.getElementById('mostrarInfo');
const tuNum = document.getElementById('tuNum');
const tuSigno = document.getElementById('tuSigno');
const afines = document.getElementById('afines');

let dia = "";
let mes = "";
let anio = "";
let signo = "";
let numeroDeLaSuerte = "";
let numeroMagico = "";
// **ENTREGA 3 **
function saveBirthdate(){
  dia = document.getElementById('dia').value;
  mes = document.getElementById('mes').value;
  anio = document.getElementById('anio').value;

  if (dia !== "" && mes !== "" && anio !== "") {
    calcularSignoYMostrar();
  } else {
    alert("Ups, parece que ha habido algún error, prueba de nuevo");
  }
  
};

// ** Ejemplo constructor **
/*class Cumple {
  constructor (dia, mes, anio) {
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    }
};
const cumplePersona1 = new Cumple(dia, mes, anio);
*/

// Array con más información de cada signo para poder buscar afines
const detalleDeLosSignos = [
  { 
    nombre: "Aries", 
    numeroSuerte: 7 
  },
  { 
    nombre: "Tauro", 
    numeroSuerte: 3 
  },
  { 
    nombre: "Géminis", 
    numeroSuerte: 5 
  },
  { 
    nombre: "Cáncer", 
    numeroSuerte: 7 
  },
  { 
    nombre: "Leo", 
    numeroSuerte: 9 
  },
  { 
    nombre: "Virgo", 
    numeroSuerte: 3 
  },
  { 
    nombre: "Libra", 
    numeroSuerte: 8 
  },
  { 
    nombre: "Escorpio",  
    numeroSuerte: 7 
  },
  { 
    nombre: "Sagitario", 
    numeroSuerte: 4 
  },
  { 
    nombre: "Capricornio", 
    numeroSuerte: 3 
  },
  { 
    nombre: "Acuario", 
    numeroSuerte: 9 
  },
  { 
    nombre: "Piscis", 
    numeroSuerte: 5 
  }
];


// Paso 5: **ENTREGA 2 ** Buscamos afines con los métodos find, filter y map
function filtrarAfines (){
    const signoEncontrado = detalleDeLosSignos.find(el => el.nombre === signo);
    const numeroSuerte = signoEncontrado.numeroSuerte;
    const signosConMismoNumero = detalleDeLosSignos.filter(el => el.numeroSuerte === numeroSuerte);
    const nombresDeAfines = signosConMismoNumero.map(el => el.nombre);
    mostrarAfines.style.display = '';
    afines.innerText = nombresDeAfines;
}

// Paso 4:  **ENTREGA 2 ** consultamos si quiere buscar afines
/*function buscarAfines() {
    const afines = prompt("¿quieres saber con qué signos tienes más afinidad?");
    if (afines.toLowerCase() === "si" || afines.toLowerCase() === "sí") {
      alert(filtrarAfines(signo));
    } else if (afines.toLocaleLowerCase() === "no" ) {
      prompt("Venga, no mientas, lo estás deseando... di que sí");
    } else {
      alert("Ups, parece que ha habido algún error, prueba de nuevo");
    }
}*/

// Paso 3: Creamos el número mágico de un solo dígito
function calcularNumeroMagico(numero) {
  let suma;
  do {
      suma = 0; 
      const numeroComoTexto = numero.toString();
      for (let i = 0; i < numeroComoTexto.length; i++) {
          suma += parseInt(numeroComoTexto[i]);
      }
      numero = suma;
  } while (numero >= 10); 
  return suma; 
}

//  Paso 2: Función para calcular el signo zodiacal
function obtenerSigno(dia, mes) {
  
  if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = "Acuario";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = "Piscis";
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = "Aries";
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = "Tauro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Géminis";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Cáncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = "Leo";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = "Virgo";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = "Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = "Escorpio";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = "Sagitario";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = "Capricornio";
  } else {
    signo = "Ups parece que perteneces a algo aún desconocido";
  }
  return signo;
}

// Paso 1: Calculamos el signo del zodiaco
function calcularSignoYMostrar() {
    // Obtenemos los valores o el error
        // Convertimos los valores a números y calculamos el número de la suerte
        numeroDeLaSuerte = Number(dia) + Number(mes) + Number(anio);
        signo = obtenerSigno(Number(dia), Number(mes)); // Convertimos a número
        numeroMagico = calcularNumeroMagico(numeroDeLaSuerte); // Ahora pasamos el resultado
        // **ENTREGA 3 **
        mostrarInfo.style.display = '';
        tuNum.innerText = numeroMagico;
        tuSigno.innerText = signo;
}