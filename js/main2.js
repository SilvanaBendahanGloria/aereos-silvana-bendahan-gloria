//Variables
let tarifa_tramos;
let tarifa_consumidor;
let impuesto_dolares = 1.65;
let lista_pasajeros = [];
let nombre_pasajero = document.getElementById("nombre_pasajero"); 
let lugar = document.getElementById("lugar_opcion");
let num_pasajeros_2 = document.getElementById("num_pasajeros_2").value;
let num_pasajeros_11 = document.getElementById("num_pasajeros_11").value;
let num_pasajeros_64 = document.getElementById("num_pasajeros_64").value;
let num_pasajeros_65 = document.getElementById("num_pasajeros_65").value;
let agregar_texto_edades = document.getElementById ("texto_edades");
let agregar_completar_edades = document.getElementById ("completar_edades");
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
let tu_destino;

function tomar_lugar () {
    lugar.addEventListener("change", (e) => {
        e.preventDefault ();

        tu_destino = e.target.value;
        console.log(tu_destino);
            
        for (let destino of destinos) {
            if (tu_destino === destino.nombre)  {
                return destino.impuestos();
            }
        }
    }) 
};



let pasajero_inf = Number(num_pasajeros_2) * Number(tomar_lugar * 0.1);
let pasajero_chd = Number(num_pasajeros_11) * Number(tomar_lugar * 0.5);
let pasajero_adt = Number(num_pasajeros_64) * Number(tomar_lugar);
let pasajero_snr = Number(num_pasajeros_65) * Number(tomar_lugar * 0.8);


function suma () {
   let sumar = pasajero_inf + pasajero_chd + pasajero_adt + pasajero_snr;
   return sumar;
}


boton_primer_paso.addEventListener("click", tomar_lugar);
boton_primer_paso.addEventListener("click", suma);
