let corredores = {
    // Team Visma | Lease a Bike
    "Jonas Vingegaard": 1,
    "Steven Kruijswijk": 2,
    "Sepp Kuss": 3,
    "Loe van Belle": 4,
    "Johannes Staune-Mittet": 5,
    "Ben Tulett": 6,
    "Milan Vader": 7,

    // Soudal Quick-Step
    "Remco Evenepoel": 11,
    "Gil Gelders": 12,
    "James Knox": 13,
    "Mikel Landa": 14,
    "William Junior Lecerf": 15,
    "Pieter Serry": 16,
    "Louis Vervaeke": 17,

    // Movistar Team
    "Alexander Aranburu": 21,
    "Jon Barrenetxea": 22,
    "Davide Formolo": 23,
    "Pelayo Sanchez": 24,
    "Gregor Mühlberger": 25,
    "Nelson Oliveira": 26,
    "Gonzalo Serrano": 27,

    // Bora-Hansgrohe
    "Primož Roglič": 31,
    "Roger Adria": 32,
    "Emanuel Buchmann": 33,
    "Jai Hindley": 34,
    "Bob Jungels": 35,
    "Maximilian Schachmann": 36,
    "Matteo Soberro": 37,

    // EF Education - EasyPost
    "Rigoberto Uran": 41,
    "Alexander Cepeda": 42,
    "Esteban Chaves": 43,
    "Sean Quinn": 44,
    "Archie Ryan": 45,
    "James Shaw": 46,
    "Markel Beloki": 47,

    // Arkéa-B&B Hotels
    "Clément Champoussin": 51,
    "Elie Gesbert": 52,
    "Alessandro Verre": 53,
    "Anthony Delaplace": 54,
    "Laurens Huys": 55,
    "Lukasz Owsian": 56,
    "Kévin Vauquelin": 57,

    // Team Jayco Alula
    "Lucas Hamilton": 61,
    "Davide De Pretto": 62,
    "Edward Dunbar": 63,
    "Felix Engelhardt": 64,
    "Rudy Porter": 65,
    "Juul Jensen": 66,
    "Mauro Schmid": 67,

    // Lidl-Trek
    "Mattias Skjelmose": 71,
    "Andrea Bagioli": 72,
    "Julien Bernard": 73,
    "Fabio Felline": 74,
    "Tao Geoghegan Hart": 75,
    "Bauke Mollema": 76,
    "Natnael Tesfazion": 77,

    // Groupama-FDJ
    "David Gaudu": 81,
    "Lorenzo Germani": 82,
    "Romain Gregoire": 83,
    "Quentin Pacher": 84,
    "Rémy Rochas": 85,
    "Clément Russo": 86,
    "Reuben Thompson": 87,

    // Cofidis
    "Ion Izagirre": 91,
    "Thomas Champion": 92,
    "Simon Geschke": 93,
    "Gorka Izagirre": 94,
    "Jonathan Lastra": 95,
    "Stefano Oldani": 96,
    "Harrison Wood": 97,

// Bahrain Victorious
    "Juan Ayuso": 101,
    "Igor Arrieta": 102,
    "Sjoerd Bax": 103,
    "Isaac Del Toro": 104,
    "Brandon McNulty": 105,
    "Marc Soler": 106,
    "Jay Vine": 107,

    // Intermarché - Wanty
    "Pello Bilbao": 111,
    "Yukiya Arashiro": 112,
    "Nikias Arndt": 113,
    "Santiago Buitrago": 114,
    "Johan Price": 115,
    "Jasha Sütterlin": 116,
    "Edoardo Zambanini": 117,

    // Astana Qazaqstan Team
    "Louis Du Bouisson Meintjes": 121,
    "Vito Braet": 122,
    "Alexy Faure Prost": 123,
    "Tom Paquot": 124,
    "Kevin Colleoni": 125,
    "Lorenzo Rota": 126,
    "Rein Taaramäe": 127,

    // TotalEnergies
    "Samuele Battistella": 131,
    "Gleb Brussenskiy": 132,
    "Igor Chzhan": 133,
    "Gianmarco Garofoli": 134,
    "Harold Lopez": 135,
    "Ide Schelling": 136,
    "Anton Kuzmin": 137,

    // Team DSM-Firmenich PostNL
    "Mathieu Burgaudeau": 141,
    "Steff Cras": 142,
    "Fabien Doubey": 143,
    "Jordan Jegat": 144,
    "Alan Jousseaume": 145,
    "Fabien Grellier": 146,
    "Alexis Vuillermoz": 147,

    // Ineos Grenadiers
    "Warren Barguil": 151,
    "Romain Combaud": 152,
    "Gijs Leemreize": 153,
    "Enzo Leijnse": 154,
    "Edgar Onley": 155,
    "Martijn Tusveld": 156,
    "Emils Liepins": 157,

    // Euskaltel-Euskadi
    "Carlos Rodriguez": 161,
    "Jonathan Castroviejo": 162,
    "Omar Fraile": 163,
    "Ethan Hayter": 164,
    "Michal Kwiatkowski": 165,
    "Thomas Pidcock": 166,
    "Brandon Rivera": 167,
    // Decathlon AG2R La Mondiale Team
    "Gotzon Martin": 171,
    "Iker Mintegi": 172,
    "Victor De La Parte": 173,
    "Xabier Berasategi": 174,
    "Txomin Juaristi": 175,
    "James Fouche": 176,
    "Enekoitz Azparren": 177,

    // Equipo Kern Pharma
    "Felix Gall": 181,
    "Bruno Armirail": 182,
    "Alex Baudin": 183,
    "Jaakko Hänninen": 184,
    "Valentin Retailleau": 185,
    "Paul Lapeira": 186,
    "Nans Peters": 187,

    // Alpecin-Deceuninck
    "Unai Iribar": 191,
    "Pablo Castrillo": 192,
    "Ivan Cobo": 193,
    "Jon Agirre": 194,
    "Mikel Retegi": 195,
    "Pau Miquel": 196,
    "Ibon Ruiz": 197,

    // Caja Rural-SegurosRGA
    "Nicola Conci": 201,
    "Quinten Hermans": 202,
    "Jimmy Janssens": 203,
    "Juri Hollmann": 204,
    "Jason Osborne": 205,
    "Stan Van Tricht": 206,
    "Luca Vergallito": 207,

    // Burgos-BH
    "Orluis Aular": 211,
    "Sebastian Berwick": 212,
    "Joseba Lopez": 213,
    "Joel Nicolau": 214,
    "Eduard Prades": 215,
    "Guillermo Silva": 216,
    "Gorka Sorarrain": 217,

    // Q36.5 Pro Cycling Team
    "Jose Manuel Diaz": 221,
    "Victor Langellotti": 222,
    "Karel Vacek": 223,
    "Jesus Ezquerra": 224,
    "Aaron Gate": 225,
    "Antonio Fagundez": 226,
    "Jetse Bol": 227,

    // Team Q36.5 Pro Cycling Team
    "Xabier Azparren": 231,
    "Matteo Badilatti": 232,
    "Filippo Conca": 233,
    "David De La Cruz": 234,
    "Mark Donovan": 235,
    "Carl Hagen": 236,
    "Damien Howson": 237
};

    let clasificacionFinal =[
        "Juan Ayuso",
        "Carlos Rodríguez",
        "Mattias Skjelmose",
        "Marc Soler",
        "Brandon McNulty",
        "Pello Bilbao",
        "Isaac Del Toro",
        "Kevin Vauquelin",
        "Ion Izagirre",
        "Alex Baudin",
        "Santiago Buitrago",
        "Jai Hindley",
        "Maximilian Schachmann",
        "Victor Langellotti",
        "Alex Aranburu",
        "Esteban Chaves",
        "Jordan Jegat",
        "Ethan Hayter",
        "Edgar Onley",
        "Bruno Armirail",
        "Rigoberto Urán",
        "Simon Geschke",
        "Quentin Pacher",
        "Victor de la Parte",
        "William Junior Lecerf",
        "Brandon Smith Rivera",
        "Bauke Mollema",
        "Luca Vergallito",
        "Ibon Ruiz",
        "Edoardo Zambanini",
        "Gijs Leemreize",
        "Emanuel Buchmann",
        "Lucas Hamilton",
        "Nelson Oliveira",
        "Edward Dunbar",
        "Jose Manuel Diaz Gallego",
        "Mark Donovan",
        "Romain Gregoire",
        "Archie Ryan",
        "Louis Meintjes",
        "Sepp Kuss",
        "Orluis Aular",
        "Tao Geoghegan Hart",
        "Alexander Cepeda",
        "Davide Formolo",
        "Nicola Conci",
        "Gianmarco Garofoli",
        "Warren Barguil",
        "Joel Nicolau",
        "James Shaw",
        "Rudy Porter",
        "Antonio Eric Fagundez Lima",
        "Johannes Staune-Mittet",
        "Gregor Mühlberger",
        "Jonathan Castroviejo Nicolas",
        "Jason Osborne",
        "Clément Champoussin",
        "Steven Kruijswijk",
        "Damien Craig Howson",
        "David de la Cruz Melgarejo",
        "Igor Arrieta Lizarraga",
        "Txomin Juaristi Arrieta",
        "Jimmy Janssens",
        "Kevin Colleoni",
        "Carl Fredrik Hagen",
        "Jesus Ezquerra Muela",
        "Jon Barrenetxea Golzarri",
        "Martijn Tusveld",
        "Anthony Delaplace",
        "Rémy Rochas",
        "Unai Iribar Jauregi",
        "Milan Vader",
        "Rein Taaramäe",
        "Harold Martin Lopez Granizo",
        "Alexis Vuillermoz",
        "Xabier Berasategi Garmendia",
        "Alexy Faure Prost",
        "Juul Christopher Jensen",
        "Alessandro Verre",
        "Fabien Doubey",
        "Sjoerd Bax",
        "Jaakko Hänninen",
        "Iker Mintegi Claver",
        "Gotzon Martin Sanz",
        "Enekoitz Azparren Irurzun",
        "Nans Peters",
        "Harrison Wood",
        "Reuben Thompson",
        "Markel Beloki Fernandez",
        "Alan Jousseaume",
        "Bob Jungels",
        "Aaron Murray Gate",
        "Thomas Champion",
        "Jasha Sütterlin",
        "Romain Combaud",
        "Jetse Bol",
        "Filippo Conca",
        "Gorka Sorarrain Agirrezabala",
        "Joseba Lopez Cuesta",
        "Mathieu Burgaudeau",
        "Lorenzo Germani",
        "Stan Van Tricht",
        "Fabien Grellier",
        "Mikel Retegi Goñi",
        "Xabier Mikel Azparren Irurzun",
        "Laurens Huys",
        "James Fouche",
        "Ivan Cobo Cayon",
        "Enzo Leijnse"
    ]

//FIN ARRAY


//Botón 1 Registro de Corredores

/* Declaración de variables*/
let nombreEquipo = "";  
let corredor = [];  
let equipoRegistrado = false; 

// Función que maneja el registro del equipo y sus corredores
function registrarEquipo() {
    let equipoInput = document.getElementById("RegistroEquipo").value;
    let corredorInput = document.getElementById("RegistroNombre").value;

// Verificar si el nombre del equipo ha sido introducido
    if (!equipoRegistrado && equipoInput !== "") {

// Asignar nombre del equipo
        nombreEquipo = equipoInput; 
        equipoRegistrado = true; 

// Marcar como equipo registrado
        corredor = [];  // Reiniciar la lista de corredores

// Resetear la lista de corredores
        alert("Equipo " + nombreEquipo + " registrado. Ahora ingresa los corredores.");

// Limpiar el campo del nombre del equipo
        document.getElementById("RegistroEquipo").value = "";  
    }

// Para verificar si el nombre del corredor ha sido introducido
    if (equipoRegistrado && corredorInput !== '') {

// Si no se han puesto el máximo de 7 corredores
        if (corredor.length < 7) {  
            corredor.push(corredorInput); 
            mostrarEquipo(); 
        } else {
            alert('Ya se han registrado 7 corredores. No puedes añadir más.');
        }

// Limpiar el input del corredor después de agregarlo
        document.getElementById("RegistroNombre").value = "";
    } else if (!equipoRegistrado) {
        alert("Debes ingresar un nombre para el equipo.");
    } else if (corredorInput === '') {
        alert("Debes ingresar el nombre de un corredor.");
    }

// Cuando todos los 7 corredores hayan sido registrados
    if (corredor.length === 7) {
        alert("Todos los corredores del equipo han sido registrados.");

// Limpiar el equipo y corredores para permitir registrar otro equipo
        nombreEquipo = "";
        corredor = [];
        equipoRegistrado = false;

// Limpiar los campos de entrada
        document.getElementById("RegistroEquipo").value = "";
        document.getElementById("RegistroNombre").value = "";

// Limpiar el resultado mostrado
        document.getElementById("resultado").innerHTML = "";

// Habilitar nuevamente el input para agregar corredores (si estaba deshabilitado)
        document.getElementById("RegistroNombre").disabled = false;
    }
}

// Función para mostrar el equipo y sus corredores registrados
function mostrarEquipo() {
    let resultado = document.getElementById("resultado");
    let corredorTexto = corredor.join(", ");  

    resultado.innerHTML = "El equipo " + nombreEquipo + " está compuesto por los corredores: " + corredorTexto;
}

//Botón 2 Estadística

function consultarEstadisticas() {
    let totalIniciaron = 168;
    let totalTerminados = clasificacionFinal.length;
    let porcentajeTerminados = ((totalTerminados / totalIniciaron) * 100).toFixed(2);

// Número de corredores terminados y porcentaje
    let linea1 = "Número de corredores que han terminado: " + totalTerminados + " (" + porcentajeTerminados + "%)";

// Nombres de los 10 primeros corredores
    let top10Corredores = clasificacionFinal.slice(0, 10);
    let linea2 = "Los 10 primeros corredores son: \n" + top10Corredores.join("\n");

// Nombre del corredor en la posición intermedia
    let posicionIntermedia = Math.floor(clasificacionFinal.length / 2);
    let corredorIntermedio = clasificacionFinal[posicionIntermedia];
    let linea3 = "Corredor en la posición intermedia: " + corredorIntermedio;

// Nombre del último corredor
    let ultimoCorredor = clasificacionFinal[clasificacionFinal.length - 1];
    let linea4 = "Último corredor: " + ultimoCorredor;

// Mostrar resultado en un prompt (aunque lo normal sería usar innerText o innerHTML)
    let resultado = linea1 + "\n\n" + linea2 + "\n\n" + linea3 + "\n\n" + linea4;
    
// Aquí puedes mostrarlo de una manera más adecuada
    document.getElementById("resultado").innerText = resultado;
}

//Boton 3 Posición
function consultarPosicion() {
    // Capturar el valor del input
    let input = document.getElementById("posicion").value;

    // Verificar si el input está vacío
    if (input === "") {
        alert("Por favor, introduce un dorsal o nombre.");
        
    }

    let corredor;
    let dorsal = parseInt(input);

    if (!isNaN(dorsal)) {
// Es un dorsal
        corredor = Object.keys(corredores).find(nombre => corredores[nombre] === dorsal);
        if (!corredor) {
// Si el dorsal no existe
            document.getElementById("resultado").innerText = "El dorsal " + dorsal + " no está en la lista de dorsales.";
            
        }
    } else {
 // Es un nombre
        corredor = input;
        dorsal = corredores[corredor];
        if (!dorsal) {
// Si el nombre no existe
            document.getElementById("resultado").innerText = "El corredor " + corredor +  " no está en la lista.";
            
        }
    }
    document.getElementById("posicion").value = ""; 

    // Verificar si el corredor ha terminado la carrera
    let posicion = clasificacionFinal.indexOf(corredor);

    if (posicion === -1) {
        document.getElementById("resultado").innerText = "El dorsal "  + dorsal +  " no tiene clasificación ya que no ha terminado la carrera.";
    } else {
        posicion += 1; // Ajustar a 1-indexado
        document.getElementById("resultado").innerText = "El dorsal " + dorsal + " le corresponde al corredor " + corredor + " que ha quedado en el puesto " + posicion +".";
    }



}
//Botón 4 Apuestas
function registrarApuesta() {
    // Capturar los valores de los inputs
    let importe = document.getElementById("importe").value.trim();
    let clasificado1 = document.getElementById("clasificado1").value.trim();
    let clasificado2 = document.getElementById("clasificado2").value.trim();
    let clasificado3 = document.getElementById("clasificado3").value.trim();

    // Convertir importe a número y validar su rango
    importe = parseFloat(importe);
    if (isNaN(importe) || importe < 100 || importe > 300) {
        document.getElementById("resultado").innerText = "La apuesta debe estar entre 100€ y 300€.";
        return;
    }

    // Convertir dorsales a números y validar su rango
    let dorsales = [clasificado1, clasificado2, clasificado3].map(dorsal => parseInt(dorsal));
    if (dorsales.some(dorsal => isNaN(dorsal) || dorsal < 1 || dorsal > 237)) {
        document.getElementById("resultado").innerText = "Los dorsales deben estar entre 1 y 237.";
        return;
    }

    // Validar que no se repitan dorsales
    if (new Set(dorsales).size !== dorsales.length) {
        document.getElementById("resultado").innerText = "Los dorsales no pueden repetirse.";
        return;
    }

    // Comprobar los aciertos limitados a los tres primeros corredores
    let aciertos = [];
    let posiciones = [];
    dorsales.forEach(dorsal => {
        let corredor = Object.keys(corredores).find(nombre => corredores[nombre] === dorsal);
        if (corredor) {
            let posicion = clasificacionFinal.indexOf(corredor);
            if (posicion >= 0 && posicion <= 2) { // Solo considerar los primeros tres
                aciertos.push(dorsal);
                posiciones.push(posicion + 1); // Convertir a posición 1-indexada
            }
        }
    });

    // Generar el mensaje en función de los aciertos
    let ganancias = 0;
    let mensaje = "";

    if (aciertos.length === 0) {
        mensaje = "LO SENTIMOS, no has acertado ninguno de los dorsales de los tres primeros.";
    } else if (aciertos.length === 1) {
        ganancias = importe * 2;
        mensaje = "GENIAL, el dorsal " + aciertos[0] + " ha quedado en la posición " + posiciones[0] + ", por lo que has ganado " + ganancias + " €.";
    } else if (aciertos.length === 2) {
        ganancias = importe * 4;
        mensaje = "GENIAL, el dorsal " + aciertos[0] + " y el dorsal " + aciertos[1] + " han quedado en las posiciones " + posiciones[0] + " y " + posiciones[1] + ", por lo que has ganado " + ganancias + " €.";
    } else if (aciertos.length === 3) {
        ganancias = importe * 6;
        mensaje = "GENIAL, has acertado todos los dorsales (" + aciertos.join(", ") + "), por lo que has ganado " + ganancias + " €.";
    }

    // Mostrar el mensaje en el párrafo debajo del botón
    document.getElementById("resultado").innerText = mensaje;

    // Limpiar los inputs después de procesar
    document.getElementById("importe").value = "";
    document.getElementById("clasificado1").value = "";
    document.getElementById("clasificado2").value = "";
    document.getElementById("clasificado3").value = "";
}

//Boton 5 Sorteo Itzulia

/*Declaración de variables*/

const dorsales = Object.values(corredores);
const registrados = [];

//Función sorteo dorsal
function sorteoItzulia() {
    const dniInput = document.getElementById("dni").value;
    const dorsalInput = parseInt(document.getElementById("dorsal").value); 
    const resultadoParrafo = document.getElementById("resultado");

    if (!dniInput || isNaN(dorsalInput)) {
        resultadoParrafo.textContent = "Por favor, introduce un DNI válido y un dorsal válido.";
        
    }

    if (registrados.includes(dniInput)) {
        resultadoParrafo.textContent = "Ya has participado en el sorteo. No puedes hacer otra apuesta.";
       
    }

    if (!dorsales.includes(dorsalInput)) {
        resultadoParrafo.textContent = "El dorsal elegido no es válido. Inténtalo de nuevo.";
        
    }
 
    registrados.push(dniInput); 

// Limpiar los campos de entrada después de validación
    document.getElementById("dorsal").value = "";
    document.getElementById("dni").value = "";

// Mostrar el resultado
//Operación matemática para que salga aleatorio
    const dorsalGanador = dorsales[Math.floor(Math.random() * dorsales.length)];
    if (dorsalInput === dorsalGanador) {
        resultadoParrafo.innerHTML = `GENIAL, has elegido el dorsal ${dorsalInput} y has acertado la apuesta, por lo que has ganado un lote de productos de la Itzulia.`;
    } else {
        resultadoParrafo.innerHTML = `Lo siento, el dorsal ganador era ${dorsalGanador} ¡Sigue participando!`;
    }

}