//Variables
let impuesto_dolares = 1.75;

let boton_primer_paso = document.getElementById("boton_primer_paso");
let boton_reset = document.getElementById("boton_reset");


function borrar_storage (e) {
    e.preventDefault();
    
    Swal.fire({
        imageUrl: 'https://placeimg.com/200/200/tech/grayscale',
        imageAlt: 'imágen random',
        title: '¿Estás seguro?',
        text: "Se borrarán todas tus cotizaciones!",
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'grey',
        confirmButtonText: 'Si, seguro!'
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            window.location.href = "index.html",
            localStorage.clear(),
            )}
        },
)}; //Para este Alert que necesita interrumpir el flujo y requiere una respuesta por parte del usuario es mejor elección Sweet Alert


let convertidor;

fetch ("https://api.bluelytics.com.ar/v2/latest")
.then (response => response.json())
.then (data => {
    
    console.log (data)
    convertidor = data.oficial.value_sell;
    return convertidor;
    //console.log (convertidor);
})


//CIUDADES
class Destino {
    constructor (nombre, tarifa, distancia) {
        this.nombre = nombre;
        this.tarifa = tarifa;
        this.distancia = distancia;
    }

    impuestos () {
        //console.log (this.tarifa * convertidor * impuesto_dolares);
        return this.tarifa * convertidor * impuesto_dolares;
    }   
};
    
let lugar1 = new Destino ("PARIS", 1000, 11043);
let lugar2 = new Destino ("NUEVA YORK", 800, 8521);
let lugar3 = new Destino ("TOKIO", 2200, 18362);
let lugar4 = new Destino ("ESTAMBUL", 1800, 12237);
let lugar5 = new Destino ("LOS ANGELES", 1500, 9846);
let lugar6 = new Destino ("LIMA", 850, 3134);
let lugar7 = new Destino ("SYDNEY", 1900, 11794);
let lugar8 = new Destino ("DOHA", 2500, 13306);
let lugar9 = new Destino ("REIKIAVIK", 1750, 11429);
let lugar10 = new Destino ("BONAIRE", 1400, 5305);

let destinos = [lugar1, lugar2, lugar3, lugar4, lugar5, lugar6, lugar7, lugar8, lugar9, lugar10]; 

let tu_destino;
let precio1;

function tomar_lugar (e) {
    //e. preventDefault();

    tu_destino = document.getElementById("lugar_opcion").value;
    console.log(tu_destino)

    for (let destino of destinos){
        if (destino.nombre === tu_destino){
            //console.log(destino.impuestos());
            precio1 = destino.impuestos();
            return precio1;
        }
    }
};


//IDA Y VUELTA
let tu_viaje;
let precio2;

function tipo_de_viaje (e) {
    e. preventDefault();

    tu_viaje = document.getElementById("tipo_de_viaje").value;
    //return tu_viaje
    //console.log (tu_viaje);

    if (tu_viaje === "IDA") {

        precio2 = precio1 * 0.75;
        return precio2;
        //console.log (precio2);

    } else {

        precio2 = precio1; 
        return precio2;
        //console.log (precio2);
    }
}


//EDADES
let num_pasajeros_2;
let num_pasajeros_11;
let num_pasajeros_64;
let num_pasajeros_65;

let precio3;

function tomar_edades(e){
    e. preventDefault();

    num_pasajeros_2 = document.getElementById("num_pasajeros_2").value;
    num_pasajeros_11 = document.getElementById("num_pasajeros_11").value;
    num_pasajeros_64 = document.getElementById("num_pasajeros_64").value;
    num_pasajeros_65 = document.getElementById("num_pasajeros_65").value;

    //return Number(num_pasajeros_2), Number(num_pasajeros_11), Number(num_pasajeros_64), Number(num_pasajeros_65);
    //console.log (Number(num_pasajeros_2), Number(num_pasajeros_11), Number(num_pasajeros_64), Number(num_pasajeros_65)) 
    let precio3_inf = Number(num_pasajeros_2) * precio2 * 0.10;
    let precio3_chd = Number(num_pasajeros_11) * precio2 * 0.5;
    let precio3_adt = Number(num_pasajeros_64) * precio2;
    let precio3_snr = Number(num_pasajeros_65) * precio2 * 0.8;

    precio3 = precio3_inf + precio3_chd + precio3_adt + precio3_snr;

    return precio3;
    //console.log(precio3);   
}


//FORMA DE PAGO
let tu_pago;
let texto_cuotas;
let cantidad_cuotas;

let precio4;

function forma_de_pago (e) {
    e. preventDefault();

    tu_pago = document.getElementById("forma_de_pago").value;
    //console.log (tu_pago);
    if (tu_pago === "EFECTIVO") {

        precio4 = precio3;
        return precio4;
        //console.log (precio4);

    } else if (tu_pago === "QR") {

        precio4 = precio3 * 1.20;
        return precio4;
        //console.log (precio4);

    } else {
        texto_cuotas = document.getElementById("texto_cuotas");
        let titulo_cuotas;
        titulo_cuotas = '<h4> ¿En cuantas cuotas vas a pagar? </h4>';
        texto_cuotas.innerHTML = titulo_cuotas;

        cantidad_cuotas = document.getElementById("cantidad_cuotas");
        let num_cuotas;
        num_cuotas = '<select id="cantidad_cuotas_js" class="form-select"> <option value="">Seleccioná la cantidad de cuotas</option> <option value="3 CUOTAS">3 cuotas</option> <option value="6 CUOTAS">6 cuotas</option> <option value="12 CUOTAS">12 cuotas</option></select>';
        cantidad_cuotas.innerHTML = num_cuotas;  
   }    
};

function cuotas_js () {

    let cantidad_cuotas_js = document.getElementById('cantidad_cuotas_js').value;
  
    //console.log(cantidad_cuotas_js);
    //return cantidad_cuotas_js;   

    if (cantidad_cuotas_js === "3 CUOTAS") {
        precio4 = precio3 * 2;
        return precio4;
        //console.log (precio4);

    } else if (cantidad_cuotas_js === "6 CUOTAS") {
        precio4 = precio3 * 2.5;
        return precio4;
        //console.log (precio4);

    } else {
        precio4 = precio3 * 3;
        return precio4;
        //console.log (precio4);
    }
};



//TIPO CONSUMIDOR
let texto_consumidor;
let tipo_consumidor;

function tipo_de_consumidor (e) {
    e. preventDefault();

    texto_consumidor = document.getElementById("texto_consumidor");
    let titulo_consumidor;
    titulo_consumidor = '<h3> 5) ¿Que tipo de factura necesitas? </h3>';
    texto_consumidor.innerHTML = titulo_consumidor;


    tipo_consumidor = document.getElementById("tipo_consumidor");
    let forma_consumidor;
    forma_consumidor = '<select id="tipo_consumidor_js" class="form-select"> <option value="">Seleccioná que tipo de consumidor sos</option> <option value="CON IVA">Consumidor final</option> <option value="SIN IVA">Necesito IVA discriminado</option></select>';
    tipo_consumidor.innerHTML = forma_consumidor;  
} 



let forma_consumidor_js;

function consumidor_js () {
    forma_consumidor_js = document.getElementById('tipo_consumidor_js').value;
    
    //console.log(forma_consumidor_js);
    return forma_consumidor_js;
}

let precio5;

function calculo_final () {

    if (forma_consumidor_js === "CON IVA") {

        precio5 = Math.round(precio4 * 1.21);
        //console.log (precio5);
        return precio5;

    } else {

        precio5 = Math.round(precio4);
        //console.log (precio5);
        return precio5;
    }
}



//BOTON FINAL
let boton_de_pago;
let texto_boton_pago;

function boton_pago (e) {
    e. preventDefault();

    boton_de_pago = document.getElementById("boton_final");
    texto_boton_pago = '<button id="boton_pagar" type="button" onclick= "consumidor_js(), cuotas_js(), calculo_final(), calcular_presupuesto();" class="btn btn-light center">Calculá tu viaje</button>';
    boton_de_pago.innerHTML = texto_boton_pago; 
}


//DEVOLUCION PRESUPUESTO

function calcular_presupuesto(){
    let texto_final;
    let texto_presupuesto;

    texto_final = document.getElementById("total_texto");
    texto_presupuesto = '<h2> <span id="pasajero_js"></span>: El total de tu viaje desde <span id="residencia_js"></span> a <span id="tu_destino_js"></span> es de $ARS: <span id="total_js"> </span></h2>';
    texto_final.innerHTML = texto_presupuesto;
   
    let pasajero_recuperado_js = document.getElementById ("pasajero_js");
    let texto_pasajero = localStorage.getItem("usuario").toUpperCase();
    pasajero_recuperado_js.innerHTML = texto_pasajero;
   
    let residencia_recuperado_js = document.getElementById ("residencia_js"); 
    let texto_residencia_recuperado_js = localStorage.getItem ("residencia").toUpperCase();
    residencia_recuperado_js.innerHTML = texto_residencia_recuperado_js;

    let destino_recuperado_js = document.getElementById ("tu_destino_js");
    destino_recuperado_js.innerHTML = tu_destino;

    let total_recuperado_js = document.getElementById ("total_js");
    total_recuperado_js.innerHTML = precio5.toLocaleString('es');;
    
} 


//Eventos
boton_reset.addEventListener("click", borrar_storage);

boton_primer_paso.addEventListener("click", tomar_lugar);
boton_primer_paso.addEventListener("click", tipo_de_viaje);
boton_primer_paso.addEventListener("click", tomar_edades);
boton_primer_paso.addEventListener("click", forma_de_pago);
boton_primer_paso.addEventListener("click", tipo_de_consumidor);
boton_primer_paso.addEventListener("click", boton_pago);

boton_primer_paso.addEventListener("click", () => {
    Toastify({
        text: "Por viajes en Argentina clickeá acá",
        duration: 3000,
        destination: "https://sbg-viajes.netlify.app/",
        newWindow: true,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        delay: 5000,
        style: {
            fontSize: "1em",
            background: "violet",
        }
    }) .showToast ();
});  //Para esta acción informativa es mejor Toastify ya que no interrumpe el flujo y es más discreta.


//el boton de pago tiene funciones onclick en html generado en js

//el id del html
$('#boton_final').on('click', (function(){

    Toastify({
        text: "Consultá el clima en tu destino",
        duration: 5000,
        destination: "https://www.meteored.com.ar/",
        newWindow: true,
        gravity: "top",
        position: "right",
        
        style: {
            fontSize: "1em",
            background: "violet",
        }
    }) .showToast (); 
}));
//JQuery para capturar un botón generado dinámicamente

