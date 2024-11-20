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

// Función para calcular el signo zodiacal
function obtenerSigno(dia, mes) {
    let signo = "";
    
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

// Creamos el número mágico de un solo dígito
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

// **ENTREGA 2 ** Buscamos afines con los métodos find, filter y map
function filtrarAfines (nombreSigno){
    const signoEncontrado = detalleDeLosSignos.find(signo => signo.nombre === nombreSigno);
    const numeroSuerte = signoEncontrado.numeroSuerte;
    const signosConMismoNumero = detalleDeLosSignos.filter(signo => signo.numeroSuerte === numeroSuerte);
    const nombresDeAfines = signosConMismoNumero.map(signo => signo.nombre);
    console.log("Estos son tus signos más afines " + nombresDeAfines);
    return nombresDeAfines;
}

// Pedimos las fechas
function calcularSignoYMostrar() {
    const dia = prompt("Introduce tu día de nacimiento (DD):");
    const mes = prompt("Introduce tu mes de nacimiento (MM):");
    const anio = prompt("Introduce tu año de nacimiento (AAAA):");
    
    // Obtenemos los valores o el error
    if (dia && mes && anio) {
        // Convertimos los valores a números y calculamos el número de la suerte
        const numeroDeLaSuerte = Number(dia) + Number(mes) + Number(anio);
        const signo = obtenerSigno(Number(dia), Number(mes)); // Convertimos a número
        const numeroMagico = calcularNumeroMagico(numeroDeLaSuerte); // Ahora pasamos el resultado
        console.log(`Tu signo del zodiaco es ${signo} y tu número mágico es ${numeroMagico}`);
        alert(`Tu signo del zodiaco es ${signo} y tu número mágico es ${numeroMagico}`);
        // **ENTREGA 2 ** Buscamos los afines
        const afines = prompt("¿quieres saber con qué signos tienes más afinidad?");
        if (afines.toLowerCase() === "si" || afines.toLowerCase() === "sí") {
          alert(filtrarAfines(signo));
        } else if (afines.toLocaleLowerCase() === "no" ) {
          alert("Venga, no mientas, lo estás deseando... di que sí");
        } else {
          alert("Ups, parece que ha habido algún error, prueba de nuevo");
        }
    } else {
        alert("Ups, parece que ha habido algún error, prueba de nuevo");
    }
}

// Calculamos
calcularSignoYMostrar();





