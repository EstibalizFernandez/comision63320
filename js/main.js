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

// **Entrega 4 librerías**
var DateTime = luxon.DateTime;
const fecha = DateTime.now().toFormat('MMMM dd, yyyy');
document.getElementById("fecha").innerText  = fecha;

// ENTREGA 3 Revisión del formulario

const diaInput = document.getElementById("dia");
const mesInput = document.getElementById("mes");
const anioInput = document.getElementById("anio");
const guardadoEnLocal = localStorage.getItem("cumpleanios");
// Validar el día
diaInput.addEventListener("change", () => {
    const dia = parseInt(diaInput.value, 10);
    (dia < 1 || dia > 31) ? alert("El valor es erróneo") : console.log(dia); // **Entrega 4 if**
});
// Validar el mes
mesInput.addEventListener("change", () => {
    const mes = parseInt(mesInput.value, 10);
    (mes < 1 || mes > 12) ? alert("El valor es erróneo") : console.log(mes); // **Entrega 4 if**
});
// Validar el año
anioInput.addEventListener("change", () => {
    const anio = parseInt(anioInput.value, 10);
    ( anio < 1924 || anio > 2024) ? alert("El valor es erróneo") : console.log(anio); // **Entrega 4 if**
});


// ENTREGA 3 
const birthdateForm = document.getElementById('birthdateForm');
birthdateForm.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    dia = document.querySelector("input[name='dia']").value;
    mes = document.querySelector("input[name='mes']").value;
    anio = document.querySelector("input[name='anio']").value;

    const cumpleanios = {
      "dia": dia,
      "mes": mes,
      "anio": anio
  };
  localStorage.setItem("cumpleanios", JSON.stringify(cumpleanios));
    calcularSignoYMostrar();
  }
);

// Ejemplo constructor 
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

// **ENTREGA 4 ** spreed
function ejemploSpreed(...afines) {
  for ( const afin of afines) {
    console.log(afin);
  }
}

// **ENTREGA 4 ** librerías
function mostrarAlerta(titulo, texto, icono, confirm) {
  Swal.fire({
    title: titulo,
    text: texto,
    icon: icono,
    confirmButtonText: confirm
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if ((titulo == "Eliminado") && result.isConfirmed) {
      location.reload(true);
    }
  });
}

function mostrarToast(text, position){
  Toastify({
    text: text,
    duration: 1500,
    position: position,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    }).showToast();
}
// Entrega 3 Borrar local storage

const borrarDatos = document.getElementById('borrarDatos');
borrarDatos.addEventListener(
  "click",
  () => {
    // **Entrega 4** librerías
    localStorage.removeItem("cumpleanios");
    mostrarAlerta("Eliminado", `tus datos se han borrado correctamente`, "info" , "OK");
  }
);
// Paso 5: ENTREGA 2 Buscamos afines con los métodos find, filter y map
const filtrarAfines = document.getElementById('filtrarAfines');
filtrarAfines.addEventListener(
  "click",
  () => {
    const signoEncontrado = detalleDeLosSignos.find(el => el.nombre === tuSigno);
    const { colorSuerte } = signoEncontrado; // **ENTREGA 4 ** Desestructuración de objetos
    const signosConMismoNumero = detalleDeLosSignos.filter(el => el.colorSuerte === colorSuerte);
    const listadoAfines = signosConMismoNumero.map(el => el);
    ejemploSpreed(listadoAfines); // **ENTREGA 4 ** spreed
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
    mostrarToast("Afinidad total!", "right");  // **Entrega 4** librerías
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
        // ENTREGA 3
        mostrarInfoDOM.style.display = '';
        tuNumDOM.innerText = `Tu número mágico es: ${tuNumeroMagico}`;
        tuSignoDOM.innerText = `Tu signo del zodiaco es: ${tuSigno}`;
        // **Entrega 4** librerías
        mostrarAlerta("Enhorabuena", `ya sabemos tu número mágico: ${tuNumeroMagico}`, "success" , "Genial");
        mostrarToast("Tu signo es el mejor ;)", "left");
}
//ENTREGA 3
function leerLocalStorage() {
    const datosDeLocal = JSON.parse(localStorage.getItem("cumpleanios"));
    if (datosDeLocal) {
      dia = datosDeLocal.dia;
      mes = datosDeLocal.mes;
      anio = datosDeLocal.anio;
      document.getElementById("dia").value = dia;
      document.getElementById("mes").value = mes;
      document.getElementById("anio").value = anio;
      calcularSignoYMostrar();
    } 
}

leerLocalStorage();
