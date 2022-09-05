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

let impuesto_dolares = 1.65;

//Destinos: tarifa_base
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


function tarifa_impuestos (lugar){

    const destinos = [lugar1, lugar2, lugar3, lugar4]; //lista de destinos
    const encontrado = destinos.find (Destino => Destino.nombre == lugar)

    return encontrado.impuestos ();
}


let tarifa_con_impuestos = tarifa_impuestos (ingreso);


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

};


for (let i=0; i < cant_pasajeros; i++) {
    
    let edad = parseInt(prompt("Ingrese la edad de/del los pasajero/s"));
    
    let nuevo_pasajero = new Pasajeros (edad);

    lista_pasajeros.push (nuevo_pasajero);

}


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


//Sumatoria del array tarifa_grupal : suma

function sumar_tarifa_grupal (acu, precio) {
    acu = acu + precio ; 
    return acu
};


const suma = tarifa_grupal.reduce((a,b,c,d) => sumar_tarifa_grupal (a,b), 0 ) ;


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

function tomar_lugar () {
    //SELECCIONAR LUGAR
    let lugar = document.getElementById("lugar_opcion").selectedIndex;
    let opcion_elegida = lugar.options [lugar];
    let valor_elegido = opcion_elegida.value;
    
    return valor_elegido;
};

//let ingreso = tomar_lugar();


function tomar_cantidad () {
    //TOMAR DATO DE CANTIDAD DE PASAJEROS
    let num_pasajeros = document.getElementById("num_pasajeros").value;
    return num_pasajeros;
};

//cant_pasajeros = tomar_cantidad ();



function crear_inputs_edades () {
    //CREAR INPUTS SEGUN CANTIDAD DE PASAJEROS: SEGUN CANT_PASAJEROS: APARECEN CANTIDAD DE ESPACIOS DE "EDAD" A COMPLETAR"
    for (let i = 0; i < cant_pasajeros; i++) { 

        let texto_edades = document.createElement("h2");
        texto_edades.innerText = "3) Ingresá la edad de cada pasajero:";
        document.texto_edades.appendChild(texto_edades); 

        let completar_edades = document.createElement("input");
        document.completar_edades.appendChild(completar_edades);
    }
};

//let edad = crear_inputs_edades ();



function tipo_de_viaje () {
    //SELECCIONO IDA O IDA Y VUELTA
    let texto_ida = document.createElement("h2");
    texto_ida.innerText = "4) El viaje es ¿sólo Ida o Ida y Vuelta?";
    document.texto_ida.appendChild(texto_ida);

    let opciones_ida = document.createElement("select");
    opciones_ida.setAttribute("id", "id_opciones_ida");
    document.opciones_ida.appendChild(opciones_ida);
     
    let opciones_de_viaje = document.createElement("option");   
    opciones_de_viaje.setAttribute("value", "0");   

    let solo_ida = document.createTextNode("Sólo Ida");
    opciones_de_viaje.appendChild(solo_ida);

    document.getElementById("id_opciones_ida").appendChild(opciones_de_viaje);
    
    let opciones_de_viaje_2 = document.createElement("option");   
    opciones_de_viaje_2.setAttribute("value", "1");   

    let ida_y_vuelta = document.createTextNode("Ida y Vuelta");
    opciones_de_viaje_2.appendChild(ida_y_vuelta);

    document.getElementById("id_opciones_ida").appendChild(opciones_de_viaje_2);
};

// tramos = tipo_de_viaje ();



function forma_de_pago () {
    //FORMA DE PAGO 
    let como_vas_a_pagar = document.createElement("h2");
    como_vas_a_pagar.innerText = "5) Seleccioná la forma de pago:";
    document.texto_pago.appendChild(como_vas_a_pagar);


    let opciones_pago = document.createElement("select");
    opciones_pago.setAttribute("id", "id_opciones_pago");
    document.opciones_pago.appendChild(opciones_pago);

     
    let opciones_de_pago = document.createElement("option");   
    opciones_de_pago.setAttribute("value", "0");   

    let efectivo = document.createTextNode("Efectivo");
    opciones_de_pago.appendChild(efectivo);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago);
    

    let opciones_de_pago_2 = document.createElement("option");   
    opciones_de_pago_2.setAttribute("value", "1");   

    let qr = document.createTextNode("Código QR");
    opciones_de_pago_2.appendChild(qr);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago_2);


    let opciones_de_pago_3 = document.createElement("option");   
    opciones_de_pago_3.setAttribute("value", "2");   

    let tarjeta_credito = document.createTextNode("Tarjeta de Crédito");
    opciones_de_pago_3.appendChild(tarjeta_credito);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago_3);   
};


// pago = forma_de_pago ();


function crear_boton_edades () {
    //CREAR BOTON PARA DESPUES DE LAS EDADES
    let boton_con_edades = document.createElement ("button");
    boton_con_edades.innerText = "Continuar";
    document.boton_edades.appendChild(boton_con_edades);
};


function enviar_datos_1() {
    tomar_lugar ();
    tomar_cantidad ();
    crear_inputs_edades ();
    tipo_de_viaje ();
    forma_de_pago ();
    crear_boton_edades ();
};


//BOTON: primer_paso
let boton_primer_paso = document.getElementById("primer_paso");

boton_primer_paso.addEventListener("click", enviar_datos_1);
 




function en_cuantas_cuotas () {

    if (tres_cuotas == true) {
    return tarifa_tramos * 1.30;

    } else if (seis_cuotas == true) {
        return tarifa_tramos * 1.6;

    } else { 
        return tarifa_tramos * 2.2;
    }
}


function pago_en_cuotas () {
    //SI FORMA DE PAGO ES TC, APARECEN CUOTAS
    let pago_con_tarjeta = document.createElement("h3");
    pago_con_tarjeta.innerText = "Seleccioná la cantidad de cuotas:";
    document.en_cuotas.appendChild(pago_con_tarjeta);
    
    
    let opciones_cuotas = document.createElement("select");
    opciones_cuotas.setAttribute("id", "id_opciones_cuotas");
    document.cantidad_cuotas.appendChild(opciones_cuotas);
    
         
    let opciones_de_cuotas = document.createElement("option");   
    opciones_de_cuotas.setAttribute("value", "0");   
    
    let tres_cuotas = document.createTextNode("3 cuotas");
    opciones_de_cuotas.appendChild(tres_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(tres_cuotas);
        
    
    let opciones_de_cuotas_2 = document.createElement("option");   
    opciones_de_cuotas_2.setAttribute("value", "1");   
    
    let seis_cuotas = document.createTextNode("6 cuotas");
    opciones_de_cuotas_2.appendChild(seis_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(opciones_de_cuotas_2);
    
    
    let opciones_de_cuotas_3 = document.createElement("option");   
    opciones_de_cuotas_3.setAttribute("value", "2");   
    
    let doce_cuotas = document.createTextNode("12 cuotas");
    opciones_de_cuotas_3.appendChild(doce_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(opciones_de_cuotas_3);    

    en_cuantas_cuotas ();
    }



if (forma_de_pago (tarjeta_de_credito)) {
    pago_en_cuotas ();
}



/*function tipo_consumidor() {
    //CONSUMIDOR FINAL O NO
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
  }*/
    

function crear_boton_pago() {
    //CREAR BOTON PARA PAGAR
    let boton_forma_pago = document.createElement ("button");
    boton_forma_pago.innerText = "Obtené tu presupuesto";
    document.boton_forma_pago.appendChild(boton_forma_pago);
}


function enviar_datos_2 () {
    pago_en_cuotas ();
    tipo_consumidor ();
    crear_boton_pago ();
}


boton_con_edades.addEventListener("click", enviar_datos_2);





function precio_total(){
    let doy_total = document.createElement("h2");
    doy_total.innerText = "El total de tu viaje para " + cant_pasajeros + "es de USD: ";
    document.total_texto.appendChild(doy_total);

    let valor_total = document.createElement ("div");
    div.valor_total.innerText = tarifa_consumidor;
    document.total_numero.appendChild(valor_total);
}


function enviar_datos_3() {
    precio_total ();
};
    

boton_forma_pago.addEventListener ("click", enviar_datos_3);











