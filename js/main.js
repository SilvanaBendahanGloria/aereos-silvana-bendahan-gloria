//Variables
let lugar1 = new Destino ("París", 1000, 11043);
let lugar2 = new Destino ("Nueva York", 800, 8521);
let lugar3 = new Destino ("Tokyo", 2200, 18362);
let lugar4 = new Destino ("Ciudad del Cabo", 1800, 6865);

let tarifa_impuestos;

let ingreso = prompt ("¿A que ciudad vas a viajar?");

let cant_pasajeros = parseInt (prompt( "¿Cuántos pasajeros van a viajar?"));

let edad_pasajero =  "";

let tramos = prompt ("¿Es un viaje de IDA? Ingrese 1   ¿o es un viaje de IDA y VUELTA? Ingrese 2");

let tarifa_tramos;

let pago = prompt ("¿Cómo va a pagar? En efectivo: Ingrese 1; con código QR: Ingrese 2 o con tarjeta de crédito: Ingrese: 3");

let tarifa_pago;

let consumidor = prompt ("Si es consumidor final ingrese: 1, sino ingrese: 2");

let tarifa_consumidor;


//Destinos: tarifa_base

class Destino {
    constructor (nombre, tarifa, distancia) {
        this.nombre = nombre;
        this.tarifa = tarifa;
        this.distancia = distancia;
    }

    tarifa_base () {
        return this.tarifa;
    }
};


if (ingreso == this.nombre) {
    let tarifa_impuestos = this.tarifa_base () * 0.65;
} else {
    alert ("No volamos a ese destino");  
}; 


//Cantidad de pasajeros: tarifa_edad

for (i=0; i<cant_pasajeros; i++) {
    edad_pasajero = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
}
/*
function tarifa_edad () {
    if(edad_pasajero<2) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0;
    } else if (edad_pasajero >=2 && edad_pasajero <12) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0.5;
    } else if (edad_pasajero >= 65) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0.8;
    } else {+
        tarifa_edad = tarifa_impuestos + tarifa_base;
    }
}

let tarifa_grupal = ""; //sumar la tarifa_edad de cada pasajero segun cant_pasajeros

for (i=0; i < cant_pasajeros; i++) {
    tarifa_grupal = tarifa_edad + 0;
}*/



/*if (tramos == 1) {
    tarifa_tramos = tarifa_grupal * 0.75;
} else {
    tarifa_tramos = tarifa_grupal;
}*/

if (tramos == 1) {
    tarifa_tramos = ((tarifa_base () + tarifa_impuestos) * cant_pasajeros) * 0.75;
} else {
    tarifa_tramos = ((tarifa_base () + tarifa_impuestos) * cant_pasajeros);
}



if (pago == 1) {
    tarifa_pago = tarifa_tramos * 1;
} else if (pago == 2) {
    tarifa_pago = tarifa_tramos * 1.10;
} else {
    let cuotas = parseInt(prompt ("¿En cuántas cuotas va a pagar? Ingrese 3, 6 o 12"));
    if (cuotas == 3) {
        tarifa_pago = tarifa_tramos * 1.30;
    } else if (cuotas == 6) {
        tarifa_pago = tarifa_tramos * 1.6;
    } else { 
        tarifa_pago = tarifa_tramos * 2.2;
    }
}



if (consumidor == 1) {
    tarifa_consumidor = tarifa_pago * 1.21;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor );

} else {
    tarifa_consumidor = tarifa_pago;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor + " sin IVA.");
}







