// Consultamos la fecha de nacimiento
// const dia = prompt("Introduce tu día de nacimiento (DD):");
// const mes = prompt("Introduce tu mes de nacimiento (MM):");
// const anio = prompt("Introduce tu año de nacimiento (AAAA):");

// Variables de DOM
const mostrarInfoDOM = document.getElementById('mostrarInfoDOM');
const tuNumDOM = document.getElementById('tuNumDOM');
const tuSignoDOM = document.getElementById('tuSignoDOM');
const mostrarAfinesDOM = document.getElementById('mostrarAfinesDOM');
const h3DOM = document.createElement("h3DOM");
// Variables de funciones
let dia = "";
let mes = "";
let anio = "";
let tuSigno = "";
let tuNumeroDeLaSuerte = "";
let numeroMagico = "";

// **ENTREGA 3 **
const saveBirthdate = document.getElementById('saveBirthdate');
saveBirthdate.addEventListener(
  "click",
  () => {
    dia = document.getElementById('dia').value;
    mes = document.getElementById('mes').value;
    anio = document.getElementById('anio').value;
  
    if (dia !== "" && mes !== "" && anio !== "") {
      calcularSignoYMostrar();
    } else {
      alert("¡Ups!, parece que ha habido algún error, prueba de nuevo");
    }
  }
);

// ** Ejemplo constructor **
class signoCompatible {
  constructor (suSigno, suNum) {
    this.suSigno = suSigno;
    this.suNum = suNum;
    }
};
// Array con más información de cada signo para poder buscar afines
const detalleDeLosSignos = [
  { 
    nombre: "Aries", 
    colorSuerte: "amarillo"
  },
  { 
    nombre: "Tauro", 
    colorSuerte: "amarillo"
  },
  { 
    nombre: "Géminis", 
   colorSuerte: "verde"
  },
  { 
    nombre: "Cáncer", 
    colorSuerte: "amarillo"
  },
  { 
    nombre: "Leo", 
    colorSuerte: "azul"
  },
  { 
    nombre: "Virgo", 
    colorSuerte: "blanco" 
  },
  { 
    nombre: "Libra", 
    colorSuerte: "rojo"
  },
  { 
    nombre: "Escorpio",  
    colorSuerte: "blanco" 
  },
  { 
    nombre: "Sagitario", 
    colorSuerte: "verde"
  },
  { 
    nombre: "Capricornio", 
    colorSuerte: "blanco" 
  },
  { 
    nombre: "Acuario", 
    colorSuerte: "verde"
  },
  { 
    nombre: "Piscis", 
    colorSuerte: "rojo"
  }
];


// Paso 5: **ENTREGA 2 ** Buscamos afines con los métodos find, filter y map
const filtrarAfines = document.getElementById('filtrarAfines');
filtrarAfines.addEventListener(
  "click",
  () => {
    const signoEncontrado = detalleDeLosSignos.find(el => el.nombre === tuSigno);
    const colorSuerte = signoEncontrado.colorSuerte;
    const signosConMismoNumero = detalleDeLosSignos.filter(el => el.colorSuerte === colorSuerte);
    const listadoAfines = signosConMismoNumero.map(el => el);
    const p = document.createElement("p");
    p.innerText = `vuestro color de la suerte es: ${colorSuerte}`;
    for ( const afin of listadoAfines) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${afin.nombre}</td>
      `;
      mostrarAfinesDOM.append(tr);
      mostrarAfinesDOM.append(p);
    }
  }
);

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
    tuSigno = "Acuario";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    tuSigno = "Piscis";
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    tuSigno = "Aries";
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    tuSigno = "Tauro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    tuSigno = "Géminis";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    tuSigno = "Cáncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    tuSigno = "Leo";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    tuSigno = "Virgo";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    tuSigno = "Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    tuSigno = "Escorpio";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    tuSigno = "Sagitario";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    tuSigno = "Capricornio";
  } else {
    tuSigno = "Ups parece que perteneces a algo aún desconocido";
  }
  return tuSigno;
}

// Paso 1: Calculamos el signo del zodiaco
function calcularSignoYMostrar() {
    // Obtenemos los valores o el error
        // Convertimos los valores a números y calculamos el número de la suerte
        numeroDeLaSuerte = Number(dia) + Number(mes) + Number(anio);
        tuSigno = obtenerSigno(Number(dia), Number(mes)); // Convertimos a número
        tuNumeroMagico = calcularNumeroMagico(numeroDeLaSuerte); // Ahora pasamos el resultado
        // **ENTREGA 3 **
        mostrarInfoDOM.style.display = '';
        tuNumDOM.innerText = `Tu número mágico es: ${tuNumeroMagico}`;
        tuSignoDOM.innerText = `Tu signo del zodiaco es: ${tuSigno}`;
}