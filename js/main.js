let tarifa_base = 1000;
let tarifa_impuestos = tarifa_base * 0.65;

let cant_pasajeros = parseInt (prompt( "¿Cuántos pasajeros van a viajar?"));

/*let edad_pasajero =  "";

for (i=0; i<cant_pasajeros; i++) {
    edad_pasajero = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
}

function tarifa_edad () {
    if(edad_pasajero<2) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0;
    } else if (edad_pasajero >=2 && edad_pasajero <12) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0.5;
    } else if (edad_pasajero >= 65) {
        tarifa_edad = tarifa_impuestos + tarifa_base * 0.8;
    } else {
        tarifa_edad = tarifa_impuestos + tarifa_base;
    }
}

let tarifa_grupal = ""; //sumar la tarifa_edad de cada pasajero segun cant_pasajeros

for (i=0; i < cant_pasajeros; i++) {
    tarifa_grupal = tarifa_edad + 0;
}*/

let tramos = prompt ("¿Es un viaje de IDA? Ingrese 1   ¿o es un viaje de IDA y VUELTA? Ingrese 2");

let tarifa_tramos;

/*if (tramos == 1) {
    tarifa_tramos = tarifa_grupal * 0.75;
} else {
    tarifa_tramos = tarifa_grupal;
}*/

if (tramos == 1) {
    tarifa_tramos = ((tarifa_base + tarifa_impuestos) * cant_pasajeros) * 0.75;
} else {
    tarifa_tramos = ((tarifa_base + tarifa_impuestos) * cant_pasajeros);
}

let pago = prompt ("¿Cómo va a pagar? En efectivo: Ingrese 1; con código QR: Ingrese 2 o con tarjeta de crédito: Ingrese: 3");

let tarifa_pago;

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

let consumidor = prompt ("Si es consumidor final ingrese: 1, sino ingrese: 2");

let tarifa_consumidor;

if (consumidor == 1) {
    tarifa_consumidor = tarifa_pago * 1.21;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor );

} else {
    tarifa_consumidor = tarifa_pago;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor + " sin IVA.");
}







