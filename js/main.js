//Variables
let cant_pasajeros; 

let tramos; 

let tarifa_tramos;

let pago; 

let tarifa_pago;

let consumidor;

let tarifa_consumidor;



//Inicio
let ingreso = (prompt ("¿A que ciudad vas a viajar?")).toUpperCase ();

//Destinos: tarifa_base
class Destino {
    constructor (nombre, tarifa, distancia) {
        this.nombre = nombre;
        this.tarifa = tarifa;
        this.distancia = distancia;
    }

    impuestos () {
        return this.tarifa * 1.65;
    }
};
    

let lugar1 = new Destino ("PARIS", 1000, 11043);
let lugar2 = new Destino ("NUEVA YORK", 800, 8521);
let lugar3 = new Destino ("TOKIO", 2200, 18362);
let lugar4 = new Destino ("ESTAMBUL", 1800, 12237);


function tarifa_impuestos (lugar){

    const destinos = [lugar1, lugar2, lugar3, lugar4]; //lista de destinos
    const encontrado = destinos.find (Destino => Destino.nombre == lugar)

    return encontrado.impuestos ();
}

tarifa_impuestos (ingreso);

let tarifa_con_impuestos = tarifa_impuestos (ingreso);

console.log (tarifa_impuestos (ingreso));  //ok
console.log (tarifa_con_impuestos); //ok


//Cantidad de pasajeros

cant_pasajeros = parseInt (prompt ("¿Cuántos pasajeros van a viajar?"));

let lista_pasajeros = []; 

let INF = tarifa_con_impuestos * 0.1 ;
let CHD = tarifa_con_impuestos * 0.5 ;
let SNR = tarifa_con_impuestos * 0.8 ;
let ADT = tarifa_con_impuestos ;



class Pasajeros {
    constructor (edad) {
        this.edad = edad
    }  

   /* set edad (edad) {
        this.edad = edad
    };

    get edad () {
        return this.edad;
    };*/

};


for (let i=0; i < cant_pasajeros; i++) {
    
    let edad = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
    
    let nuevo_pasajero = new Pasajeros (edad);

   /* nuevo_pasajero.edad = x;

    nuevo_pasajero.edad*/

    lista_pasajeros.push (nuevo_pasajero);

}

console.log (lista_pasajeros); //ok


//Tarifa de todos los pasajeros: tarifa_edad y tarifa_grupal

function tarifa_edad (edad){
    if(edad < 2) {
       return INF
    
    } else if ((edad >= 2) && (edad < 12)) {
       return CHD

    } else if (edad >= 65) {
       return SNR

    } else {
       return ADT
    }
}


const tarifa_grupal = lista_pasajeros.map((x) => tarifa_edad(x.edad)); 
console.log (tarifa_grupal); 



//Sumatoria del array tarifa_grupal : suma

function sumar_tarifa_grupal (acu, precio) {
    acu = acu + precio ; 
    return acu
};


const suma = tarifa_grupal.reduce((a,b,c,d) => sumar_tarifa_grupal (a,b), 0 ) ;
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

function ajustar_tarifa_pago () {
    if (pago == 1) {
        return tarifa_tramos;

    } else if (pago == 2) {
        return tarifa_tramos * 1.10;

    } else {
        return tarjeta (); 
    }
}

function tarjeta () {
    let cuotas = parseInt(prompt ("¿En cuántas cuotas va a pagar? Ingrese 3, 6 o 12"));

        if (cuotas == 3) {
            return tarifa_tramos * 1.30;
        } else if (cuotas == 6) {
            return tarifa_tramos * 1.6;
        } else { 
            return tarifa_tramos * 2.2;
        }
}

tarifa_pago = ajustar_tarifa_pago ();

//Con o sin IVA (21%): tarifa_consumidor
consumidor =  prompt ("Si es consumidor final ingrese: 1, sino ingrese: 2");

if (consumidor == 1) {
    tarifa_consumidor = Math.round (tarifa_pago * 1.21);
   alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de USD: " + tarifa_consumidor );

} else {
    tarifa_consumidor = Math.round (tarifa_pago);
    alert ("El total a pagar para " + cant_pasajeros + " pasajero/s es de USD: " + tarifa_consumidor + " sin IVA.-");
}


//DOM

/*BOTON: primer_paso*/
let boton_primer_paso = document.getElementById("primer_paso");

boton_primer_paso.addEventListener("click", enviar_datos_1);

function enviar_datos_1() {
   
    /*SELECCIONAR LUGAR*/
    let lugar = document.getElementById("lugar").form.id;
   
    /*TOMAR DATO DE CANTIDAD DE PASAJEROS*/ 
    let num_pasajeros = document.getElementById("num_pasajeros").value;



    /*SEGUN CANT_PASAJEROS: APARECEN CANTIDAD DE ESPACIOS DE "EDAD" A COMPLETAR" */
            //for of
    let texto_edades = document.createElement("h2");
    texto_edades.innerText = "3) Ingresá la edad de cada pasajero:";
    document.edades.appendChild(texto_edades); 

    let completar_edades = document.createElement("input");
    document.edades.appendChild(completar_edades);


    /*SELECCIONO IDA O IDA Y VUELTA */
    let texto_ida = document.createElement("h2");
    texto_ida.innerText = "4) El viaje es ¿sólo Ida o Ida y Vuelta?";
    document.ida.appendChild(texto_ida);

    let opciones_ida = document.createElement("form");
    /* como creo las opciones? 
     Seleccioná
            <select class="form-select">
                <option value="1">Ida</option>
                <option value="2">Ida y Vuelta</option>
            </select>
    */
    document.ida.appendChild(opciones_ida);


    /*FORMA DE PAGO */

};



/*SI FORMA DE PAGO ES TC, APARECEN CUOTAS*/




/*CONSUMIDOR FINAL O NO */




/*  BOTON PEDIR PRESUPUESTO

let boton = document.getElementById ("boton_enviar");

boton.addEventListener ("click", enviar_datos2);


function enviar_datos2() {
 
    let valor_total = document.createElement ("div");
    div.valor_total.innerText = tarifa_consumidor;
    
    let total = document.getElementById ("total");
    valor_total.appendChild(total);

};*/






/*
document.addEventListener ("DOMContentLoaded", function () {
    mostrar_total ();
});

function mostrar_total () { 
    
}*/



