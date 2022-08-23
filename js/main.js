//Variables
let cant_pasajeros; 

let tramos; 

let tarifa_tramos;

let pago; 

let tarifa_pago;

let consumidor;

let tarifa_consumidor;



//Inicio
let ingreso = prompt ("¿A que ciudad vas a viajar?");

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



function tarifa_impuestos (lugar){
    if (lugar == lugar1.nombre) {
        return lugar1.tarifa_base() * 1.65
    } else if (lugar == lugar2.nombre) {
       return lugar2.tarifa_base() * 1.65;
    } else if (lugar  == lugar3.nombre) {
       return lugar3.tarifa_base() * 1.65
    } else if (lugar  == lugar4.nombre) {
       return lugar4.tarifa_base() * 1.65
    } else {
        alert ("No volamos a ese destino");
    }
        
}

tarifa_impuestos (ingreso);

let tarifa_con_impuestos = tarifa_impuestos (ingreso);

console.log (lugar2.tarifa_base()); //ok
console.log (tarifa_impuestos (ingreso));  //ok
console.log (tarifa_con_impuestos);


//Cantidad de pasajeros
cant_pasajeros = parseInt (prompt ("¿Cuántos pasajeros van a viajar?"));

let lista_pasajeros = []; 

class Pasajeros {
    constructor (edad) {
        this.edad = edad
    }
};


for (let i=0; i < cant_pasajeros; i++) {
    
    edad = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
    
    let nuevo_pasajero = new Pasajeros (edad);

    lista_pasajeros.push (nuevo_pasajero);
    
}

console.log (lista_pasajeros); //ok


//Tarifa de todos los pasajeros: tarifa_grupal

//mi arreglo original es lista_pasajeros

function tarifa_edad (edad_pasajero){
    if(edad_pasajero < 2) {
        return tarifa_con_impuestos * 0.1;
       

    } else if (edad_pasajero >= 2 && edad_pasajero < 12) {
        return tarifa_con_impuestos * 0.5;


    } else if (edad_pasajero >= 65) {
        return tarifa_con_impuestos * 0.8;

    } else {
        return tarifa_con_impuestos
    }
}

let tarifazo = lista_pasajeros.map (tarifa_edad (edad)); //tokyo - 1 año es ok 363$ la tarifa!
console.log (tarifazo); //Uncaught TypeError: 363 is not a function at Array.map (<anonymous>) at main.js:113:32 (?????????)







//Sumatoria del array tarifazo : suma

/*function sumar_tarifazo (acu, precio) {
    acu = acu + precio.noseque ; //precio. que????
    return acu
};

let suma = tarifazo.reduce (sumar_tarifazo);
console.log (suma);*/


let suma;

for (let i =0; i < tarifazo.length; i++) {

    suma += tarifazo [i];

}

console.log (suma);


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
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de $AR: " + tarifa_consumidor + " sin IVA.-");
}
