//Variables
let tarifa_tramos;
let tarifa_consumidor;
let impuesto_dolares = 1.65;
let lista_pasajeros = [];
let nombre_pasajero = document.getElementById("nombre_pasajero"); 


let agregar_en_cuotas = document.getElementById("en_cuotas");
let agregar_cantidad_cuotas = document.getElementById("cantidad_cuotas");
let agregar_check_uno = document.getElementById("check_uno");
let agregar_check_dos = document.createElement("check_dos");
let agregar_total_texto = document.getElementById("total_texto");
let boton_primer_paso = document.getElementById("primer_paso");
let agregar_boton_edades = document.getElementById("boton_edades");
let agregar_boton_forma_pago = document.getElementById("boton_forma_pago");

//CIUDADES
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

//IDA Y VUELTA
let tu_viaje;

function tipo_de_viaje () {
    tu_viaje = document.getElementById("tipo_de_viaje").value;
    console.log (tu_viaje);
}


//EDADES
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


//FORMA DE PAGO

let tu_pago;
let texto_cuotas;
let cantidad_cuotas;

function forma_de_pago () {
    tu_pago = document.getElementById("forma_de_pago").value;
    console.log (tu_pago);

    if (tu_pago === "TARJETA") {
        texto_cuotas = document.getElementById("texto_cuotas");
        let titulo_cuotas;
        titulo_cuotas += '<h3> ¿En cuantas cuotas vas a pagar? </h3>';
        texto_cuotas.innerHTML = titulo_cuotas;
/*
        cantidad_cuotas = document.getElementById("cantidad_cuotas");
        
        let agregar_cuotas = () => {
            let num_cuotas = document.createElement('select');
            num_cuotas.id = "cantidad_cuotas";
            
            let tres_cuotas = document.createElement('option');
            tres_cuotas.value = "1";
            tres_cuotas.text = "3 cuotas";
            let seis_cuotas = document.createElement('option');
            seis_cuotas.value = "2";
            seis_cuotas.text = "6 cuotas";
            let doce_cuotas = document.createElement('option');
            doce_cuotas.value = "3";
            doce_cuotas.text = "12 cuotas";
            
            num_cuotas.appendChild(tres_cuotas);
            num_cuotas.appendChild(seis_cuotas);
            num_cuotas.appendChild(doce_cuotas);
            
            let cantidad_cuotas.appendChild("agregar_cuotas"); 
        } */
    };    
}

let tipo_consumidor;
let texto_consumidor;

function tipo_de_consumidor () {
    tipo_consumidor = document.getElementById("texto_consumidor");
    texto_consumidor += '<h2> 5) ¿Que tipo de factura necesitas? </h2>';
    tipo_consumidor.innerHTML = texto_consumidor;
}


let boton_de_pago;
let texto_boton_pago;

function boton_pago () {
    boton_de_pago = document.getElementById("boton_pago");
    texto_boton_pago += '<button type="button" class="btn btn-dark center">Calculá tu viaje</button>';
    boton_de_pago.innerHTML = texto_boton_pago; 
}


boton_primer_paso.addEventListener("click", tomar_lugar);
boton_primer_paso.addEventListener("click", tipo_de_viaje);
boton_primer_paso.addEventListener("click", tomar_edades);
boton_primer_paso.addEventListener("click", forma_de_pago);
boton_primer_paso.addEventListener("click", tipo_de_consumidor);
boton_primer_paso.addEventListener("click", boton_pago);



