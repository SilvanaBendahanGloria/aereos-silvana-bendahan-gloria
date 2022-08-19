//Variables
let ingreso; 

let impuestos;

let cant_pasajeros; 

let edad_pasajero;

let tramos; 

let tarifa_tramos;

let pago; 

let tarifa_pago;

let consumidor;

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

let lugar1 = new Destino ("París", 1000, 11043);
let lugar2 = new Destino ("Nueva York", 800, 8521);
let lugar3 = new Destino ("Tokyo", 2200, 18362);
let lugar4 = new Destino ("Ciudad del Cabo", 1800, 6865);

//console.log (lugar1.tarifa_base());

ingreso = prompt ("¿A que ciudad vas a viajar?");

//Tarifa Impuestos
function tarifa_impuestos (){
    if (ingreso = lugar1.nombre) {
        impuestos = lugar1.tarifa_base() * 1.65
    } else if (ingreso = lugar2.nombre) {
        impuestos = lugar2.tarifa_base() * 1.65
    } else if (ingreso = lugar3.nombre) {
        impuestos = lugar3.tarifa_base() * 1.65
    } else if (ingreso = lugar4.nombre) {
        impuestos = lugar4.tarifa_base() * 1.65
    } alert ("No volamos a ese destino")
};


//Cantidad de pasajeros
cant_pasajeros = parseInt (prompt ("¿Cuántos pasajeros van a viajar?"));

let lista_pasajeros = []; //lista_pasajeros = [40 (años), 5 (años), 30 (años)]

class Pasajeros {
    constructor (edad) {
        this.edad = edad
    }
};

for (let i=0; i < cant_pasajeros; i++) {
    edad = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
}

for (let i=0; i<cant_pasajeros; i++) {
    
    let nuevo_pasajero = new Pasajeros (edad);

    lista_pasajeros.push (nuevo_pasajero);
};

//Edades: tarifa_edad
function tarifa_edad () {
    if(edad<2) {
        tarifa_edad = impuestos * 0.1;
    } else if (edad >= 2 && edad < 12) {
        tarifa_edad = impuestos * 0.5;
    } else if (edad >= 65) {
        tarifa_edad = impuestos * 0.8;
    } else {
        tarifa_edad = impuestos;
    }
};

//Tarifa de todos los pasajeros: tarifa_grupo
let tarifa_grupal = [];  //tarifa_grupal = [($) 1500, ($) 2000, ($) 1800]

class Grupo {
    constructor (tarifa) {
        this.tarifa = tarifa;  //????
    }
}

for (let i=0; i < cant_pasajeros; i++) {
    tarifa_edad = new Grupo (tarifa);
    tarifa_grupal.push (tarifa_edad);
}

//Sumatoria de los objetos (Grupo) del arreglo (tarifa_grupal):
let suma;
for (let i =0; i < tarifa_grupal.length; i++) {
    suma += tarifa_grupal [i];
}

//Ida o I/V: tarifa_tramos
tramos = prompt ("¿Es un viaje de IDA? Ingrese 1 ¿o es un viaje de IDA y VUELTA? Ingrese 2");

if (tramos == 1) {
    tarifa_tramos = suma * 0.75;
} else {
    tarifa_tramos = suma;
}


//Forma de pago: tarifa_pago
pago = prompt ("¿Cómo va a pagar? En efectivo: Ingrese 1; con código QR: Ingrese 2 o con tarjeta de crédito: Ingrese: 3");

if (pago == 1) {
    tarifa_pago = tarifa_tramos;
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

//Con o sin IVA (21%): tarifa_consumidor
consumidor =  prompt ("Si es consumidor final ingrese: 1, sino ingrese: 2");

if (consumidor == 1) {
    tarifa_consumidor = tarifa_pago * 1.21;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor );

} else {
    tarifa_consumidor = tarifa_pago;
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor + " sin IVA.");
}

