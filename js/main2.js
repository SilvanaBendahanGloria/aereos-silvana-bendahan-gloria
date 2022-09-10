//Variables
let tarifa_tramos;
let tarifa_consumidor;
let impuesto_dolares = 1.65;
let lista_pasajeros = [];
let nombre_pasajero = document.getElementById("nombre_pasajero"); 

let agregar_texto_ida = document.getElementById("texto_ida");
let agregar_opciones_ida = document.getElementById("opciones_ida");


let agregar_texto_pago = document.getElementById("texto_pago");
let agregar_opciones_pago = document.getElementById ("opciones_pago");
let agregar_en_cuotas = document.getElementById("en_cuotas");
let agregar_cantidad_cuotas = document.getElementById("cantidad_cuotas");
let agregar_check_uno = document.getElementById("check_uno");
let agregar_check_dos = document.createElement("check_dos");
let agregar_total_texto = document.getElementById("total_texto");
let boton_primer_paso = document.getElementById("primer_paso");
let agregar_boton_edades = document.getElementById("boton_edades");
let agregar_boton_forma_pago = document.getElementById("boton_forma_pago");

//Clases
class Destino {
    constructor (nombre, tarifa, distancia) {
        this.nombre = nombre;
        this.tarifa = tarifa;
        this.distancia = distancia;
    }

    impuestos () {
        return this.tarifa * impuesto_dolares;
    }   
};
    
let lugar1 = new Destino ("PARIS", 1000, 11043);
let lugar2 = new Destino ("NUEVA YORK", 800, 8521);
let lugar3 = new Destino ("TOKIO", 2200, 18362);
let lugar4 = new Destino ("ESTAMBUL", 1800, 12237);

let destinos = [lugar1, lugar2, lugar3, lugar4]; 


function tomar_lugar () {
    let tu_destino= document.getElementById("lugar_opcion").value;

    console.log(tu_destino)

    for (let destino of destinos){

        if (destino.nombre === tu_destino){

            console.log(destino.impuestos());

            return destino.impuestos();
        }
    }
};


let tu_viaje = document.getElementById('tipo_de_viaje');
let seleccion_viaje;

function tipo_de_viaje () {
    
    tu_viaje.addEventListener("change", (e) => {
        e.preventDefault();
        seleccion_viaje = e.target.value;
        
    });
    //return seleccion_viaje;
    console.log(seleccion_viaje);
}



let num_pasajeros_2;
let num_pasajeros_11;
let num_pasajeros_64;
let num_pasajeros_65;


function tomar_edades(){
    num_pasajeros_2 = document.getElementById("num_pasajeros_2").value;
    num_pasajeros_11 = document.getElementById("num_pasajeros_11").value;
    num_pasajeros_64 = document.getElementById("num_pasajeros_64").value;
    num_pasajeros_65 = document.getElementById("num_pasajeros_65").value;

    //return Number(num_pasajeros_2), Number(num_pasajeros_11), Number(num_pasajeros_64), Number(num_pasajeros_65);
    console.log (Number(num_pasajeros_2), Number(num_pasajeros_11), Number(num_pasajeros_64), Number(num_pasajeros_65)) 
}



boton_primer_paso.addEventListener("click", tomar_lugar);
boton_primer_paso.addEventListener("click", tomar_edades);
boton_primer_paso.addEventListener("click", tipo_de_viaje);



/*
pasajero_inf = num_pasajeros_2 * tomar_lugar() * 0.1;
pasajero_chd = num_pasajeros_11 * tomar_lugar() * 0.5;
pasajero_adt = num_pasajeros_64 * tomar_lugar();
pasajero_snr = num_pasajeros_65 * tomar_lugar() * 0.8;

let sumar;

function suma () {
   sumar = pasajero_inf + pasajero_chd + pasajero_adt + pasajero_snr;
   return sumar;
}
*/