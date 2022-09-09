//Variables
let tarifa_tramos;
let tarifa_consumidor;
let impuesto_dolares = 1.65;
let lista_pasajeros = [];
let nombre_pasajero = document.getElementById("nombre_pasajero"); 
let lugar = document.getElementById("lugar_opcion");
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



class Pasajeros {
    constructor (edad) {
        this.edad = edad
    }  

};


//let ingreso = (prompt ("¿A que ciudad vas a viajar?")).toUpperCase ();
function tomar_lugar () {
    //SELECCIONAR LUGAR
    lugar.addEventListener ("change", (e) => {
        e.preventDefault ();

        let tu_destino = e.target.value;
        //return tu_destino;
        console.log (tu_destino)
    })   
};

let ingreso = tomar_lugar();
console.log(ingreso);

function tarifa_impuestos (lugar){
    //Destinos: tarifa_con_impuestos
    let destinos = [lugar1, lugar2, lugar3, lugar4]; //lista de destinos
    let encontrado = destinos.find (Destino => Destino.nombre == lugar)

    return encontrado.impuestos ();
}

let tarifa_con_impuestos = tarifa_impuestos (ingreso);
console.log (tarifa_con_impuestos);

//cant_pasajeros = parseInt (prompt ("¿Cuántos pasajeros van a viajar?"));
function tomar_cantidad () {
    //TOMAR DATO DE CANTIDAD DE PASAJEROS
    let num_pasajeros = parseInt(document.getElementById("num_pasajeros").value);
    return num_pasajeros;
};

let cant_pasajeros = tomar_cantidad ();    


function crear_inputs_edades () {
    //CREAR INPUTS SEGUN CANTIDAD DE PASAJEROS: APARECEN CANTIDAD DE ESPACIOS DE "EDAD" A COMPLETAR
    for (let i = 0; i < cant_pasajeros; i++) { 
        let texto_edades = document.createElement("h2");
        texto_edades.innerText = "3) Ingresá la edad de cada pasajero:";
        document.agregar_texto_edades.appendChild(texto_edades); 
        let completar_edades = document.createElement("input");
        document.agregar_completar_edades.appendChild(completar_edades);
    }
};

let edad = crear_inputs_edades ();  //number? string? .value? completar_edades.value?

for (let i=0; i < cant_pasajeros; i++) {       
    let nuevo_pasajero = new Pasajeros (edad);
    lista_pasajeros.push (nuevo_pasajero);
}

//Tarifa de cada pasajero segun edad:
let INF = tarifa_con_impuestos * 0.1 ;
let CHD = tarifa_con_impuestos * 0.5 ;
let SNR = tarifa_con_impuestos * 0.8 ;
let ADT = tarifa_con_impuestos ;

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

//Para cada edad, calcular que tipo de tarifa le corresponde y hacer un array nuevo
let tarifa_grupal = lista_pasajeros.map((x) => tarifa_edad(x.edad)); 

//Funcion para sumar el array tarifa_grupal 
function sumar_tarifa_grupal (acu, precio) {
    acu = acu + precio ; 
    return acu
};

//Reducir el array a un valor solo
let suma = tarifa_grupal.reduce((a,b,c,d) => sumar_tarifa_grupal (a,b), 0 ) ;

//tramos = prompt ("¿Es un viaje de IDA? Ingrese 1 ¿o es un viaje de IDA y VUELTA? Ingrese 2");
function tipo_de_viaje () {
    //SELECCIONO IDA O IDA Y VUELTA
    let texto_ida = document.createElement("h2");
    texto_ida.innerText = "4) El viaje es ¿sólo Ida o Ida y Vuelta?";
    document.agregar_texto_ida.appendChild(texto_ida);   //consola dice: Uncaught TypeError: Cannot read properties of undefined (reading 'appendChild') at tipo_de_viaje 

    //crear nodo
    let opciones_ida = document.createElement("select");
    opciones_ida.setAttribute("id", "id_opciones_ida");
    document.agregar_opciones_ida.appendChild(opciones_ida);
    
    //crear ida
    let opciones_de_viaje = document.createElement("option");   
    opciones_de_viaje.setAttribute("value", "0");   

    let solo_ida = document.createTextNode("Sólo Ida");
    opciones_de_viaje.appendChild(solo_ida);

    document.getElementById("id_opciones_ida").appendChild(opciones_de_viaje);
    
    //crear ida y vuelta
    let opciones_de_viaje_2 = document.createElement("option");   
    opciones_de_viaje_2.setAttribute("value", "1");   

    let ida_y_vuelta = document.createTextNode("Ida y Vuelta");
    opciones_de_viaje_2.appendChild(ida_y_vuelta);

    document.getElementById("id_opciones_ida").appendChild(opciones_de_viaje_2);
};

let tramos = tipo_de_viaje ();

if (tramos == 1) { //value ??  selectedItem? options?
    tarifa_tramos = suma * 0.75;
} else {
    tarifa_tramos = suma;
}

//pago = prompt ("¿Cómo va a pagar? En efectivo: Ingrese 1; con código QR: Ingrese 2 o con tarjeta de crédito: Ingrese: 3");
function forma_de_pago () {
    //FORMA DE PAGO 
    let como_vas_a_pagar = document.createElement("h2");
    como_vas_a_pagar.innerText = "5) Seleccioná la forma de pago:";
    document.agregar_texto_pago.appendChild(como_vas_a_pagar);

    //crear nodo
    let opciones_pago = document.createElement("select");
    opciones_pago.setAttribute("id", "id_opciones_pago");
    document.agregar_opciones_pago.appendChild(opciones_pago);

    //opcion efectivo
    let opciones_de_pago = document.createElement("option");   
    opciones_de_pago.setAttribute("value", "0");   

    let efectivo = document.createTextNode("Efectivo");
    opciones_de_pago.appendChild(efectivo);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago);
    
    //opcion QR
    let opciones_de_pago_2 = document.createElement("option");   
    opciones_de_pago_2.setAttribute("value", "1");   

    let qr = document.createTextNode("Código QR");
    opciones_de_pago_2.appendChild(qr);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago_2);

    //opcion tarjeta
    let opciones_de_pago_3 = document.createElement("option");   
    opciones_de_pago_3.setAttribute("value", "2");   

    let tarjeta_credito = document.createTextNode("Tarjeta de Crédito");
    opciones_de_pago_3.appendChild(tarjeta_credito);

    document.getElementById("id_opciones_pago").appendChild(opciones_de_pago_3);   
};

let pago = forma_de_pago ();
  
function pago_en_cuotas () {
    //SI FORMA DE PAGO ES TC, APARECEN CUOTAS
    let pago_con_tarjeta = document.createElement("h3");
    pago_con_tarjeta.innerText = "Seleccioná la cantidad de cuotas:";
    document.agregar_en_cuotas.appendChild(pago_con_tarjeta);
    
    //crear nodo
    let opciones_cuotas = document.createElement("select");
    opciones_cuotas.setAttribute("id", "id_opciones_cuotas");
    document.agregar_cantidad_cuotas.appendChild(opciones_cuotas);
    
    //3 cuotas     
    let opciones_de_cuotas = document.createElement("option");   
    opciones_de_cuotas.setAttribute("value", "0");   
    
    let tres_cuotas = document.createTextNode("3 cuotas");
    opciones_de_cuotas.appendChild(tres_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(tres_cuotas);
        
    //6 cuotas
    let opciones_de_cuotas_2 = document.createElement("option");   
    opciones_de_cuotas_2.setAttribute("value", "1");   
    
    let seis_cuotas = document.createTextNode("6 cuotas");
    opciones_de_cuotas_2.appendChild(seis_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(opciones_de_cuotas_2);
    
    //12 cuotas
    let opciones_de_cuotas_3 = document.createElement("option");   
    opciones_de_cuotas_3.setAttribute("value", "2");   
    
    let doce_cuotas = document.createTextNode("12 cuotas");
    opciones_de_cuotas_3.appendChild(doce_cuotas);
    
    document.getElementById("id_opciones_cuotas").appendChild(opciones_de_cuotas_3);    
}

function en_cuantas_cuotas () {  //value ??  selectedItem? options?
    if (pago_en_cuotas (tres_cuotas)) {
    return tarifa_tramos * 1.30;

    } else if (pago_en_cuotas (seis_cuotas)) {
        return tarifa_tramos * 1.6;

    } else { 
        return tarifa_tramos * 2.2;
    }
}

if (forma_de_pago (tarjeta_de_credito)) { //value ??  selectedItem? options?
    pago_en_cuotas ();
}

let cuotas = pago_en_cuotas ();

function ajustar_tarifa_pago () {
    if (pago == opciones_pago[0]) {
        return tarifa_tramos;

    } else if (pago == opciones_pago[1]) {
        return tarifa_tramos * 1.10;

    } else {
        return pago_en_cuotas (); 
    }
}

let tarifa_pago = ajustar_tarifa_pago ();

//consumidor =  prompt ("Si es consumidor final ingrese: 1, sino ingrese: 2");
function tipo_consumidor() {
    //CONSUMIDOR FINAL
    let texto_iva = document.createElement('h4');
    texto_iva.innerText = "Soy Consumidor Final";
    document.agregar_check_uno.appendChild(texto_iva);

    //crear check soy consumidor final    
    let pagas_iva = document.createElement("INPUT");
    pagas_iva.setAttribute("type", "checkbox");
    document.agregar_check_uno.appendChild(pagas_iva); //se lo agrego al mismo padre, no?

    //NO SOY CONSUMIDOR FINAL
    let texto_sin_iva = document.createElement("h4");   
    texto_sin_iva.innerText = "Necesito IVA Discriminado";
    document.agregar_check_dos.appendChild(texto_sin_iva);

    let no_pagas_iva = document.createElement("INPUT");
    no_pagas_iva.setAttribute("type", "checkbox");
    document.agregar_check_dos.appendChild(no_pagas_iva);
} 

function seleccion_consumidor () {
    if (tipo_consumidor(check_uno)) { //sintaxis ok?
        tarifa_consumidor = (tarifa_pago * 1.21).toFixed(2); 
    }
    else {
         tarifa_consumidor = (tarifa_pago).toFixed (2);
    }
}

let consumidor =  seleccion_consumidor();

function precio_total(){
    let doy_total = document.createElement("h2");
    doy_total.innerText = "El total de tu viaje para " + cant_pasajeros + "es de USD: " + tarifa_consumidor;
    document.total_texto.appendChild(doy_total);
}

//BOTONES
function crear_boton_edades () {
    //CREAR BOTON PARA DESPUES DE LAS EDADES
    let boton_con_edades = document.createElement ("button");
    boton_con_edades.innerText = "Continuar";
    document.agregar_boton_edades.appendChild(boton_con_edades);
};

function crear_boton_pago() {
    //CREAR BOTON PARA PAGAR
    let boton_forma_pago = document.createElement ("button");
    boton_forma_pago.innerText = "Obtené tu presupuesto";
    document.agregar_boton_forma_pago.appendChild(boton_forma_pago);
}

//BOTON QUE EXISTE : PRIMER PASO
function enviar_datos_1(e) {
    e.preventDefault();

    tomar_lugar ; //TOMA VALOR DESTINO
    tomar_cantidad ; // TOMA VALOR CANTIDAD PASAJEROS
    crear_inputs_edades ; // CREA INPUT EDADES
    tipo_de_viaje ; //CREA IDA O VUELTA
    forma_de_pago ; //CREA FOMRA DE PAGO
    crear_boton_edades ; // CREA BOTON
};

//BOTON CON EDADES
function enviar_datos_2 (e) {
    e.preventDefault();

    pago_en_cuotas (); //CREA CUOTAS SI ES CON TARJETA
    tipo_consumidor (); //CREA IVA O SIN IVA
    seleccion_consumidor (); //DEVUELVE TIPO DE TARIFA SEGUN CHECKBOX
    crear_boton_pago (); // CREA BOTON PRESUPUESTO
}

//BOTON PRESUPUESTO
function enviar_datos_3(e) {
    e.preventDefault();

   // precio_total (); // DEVUELVE VALOR FINAL
};

//EVENTO BOTON BIENVENIDA
boton_bienvenida.addEventListener ( 'click', guradar_storage);

//EVENTO DEL BOTON QUE TOMA DESTINO Y PASAJEROS
boton_primer_paso.addEventListener("click", enviar_datos_1);

//EVENTO DEL BOTON QUE CREA INPUTS DE EDADES, TIPO DE VIAJE, FORMA DE PAGO, CONSUMIDOR Y BOTON PRESUPUESTO
boton_con_edades.addEventListener("click", enviar_datos_2);    

//EVENTO BOTON QUE DEVUELVE EL PRESUPUESTO
boton_forma_pago.addEventListener ("click", enviar_datos_3);