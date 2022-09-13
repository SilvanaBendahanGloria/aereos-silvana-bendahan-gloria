//Variales
let nombre_pasajero = document.getElementById("nombre_pasajero");
let residencia_pasajero = document.getElementById("residencia_pasajero");
let boton_bienvenida = document.getElementById("boton_bienvenida");



//NOMBRE PASAJERO         
let arreglo_pasajeros = [];

class Pasajero {
    constructor(nombre, residencia) {
        this.nombre = nombre;
        this.residencia = residencia;
    }
}

let recuperando_arreglo;

function guardar_sesion (e) {
    e.preventDefault();

    if (nombre_pasajero.value != "" && residencia_pasajero.value != "") {
        let nuevo_pasajero = new Pasajero (nombre_pasajero.value, residencia_pasajero.value);
        arreglo_pasajeros.push (nuevo_pasajero);

        localStorage.setItem("usuario", nombre_pasajero.value);
        localStorage.setItem("residencia", residencia_pasajero.value);

        window.location.href = "presupuesto.html";
        
    } else alert ("Completá tus datos");
}


function borrar_storage () {
    localStorage.clear(); // no borra el .value de los inputs ??
    
    window.location.href = "#inicio";
}



//EVENTOS

boton_bienvenida.addEventListener("click", guardar_sesion);

boton_reset.addEventListener("click", borrar_storage);