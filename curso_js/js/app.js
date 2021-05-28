//-----------------------------------------------------------------------------------------------------------------------------
//evento de envio de formulario
$("form").submit(function(e) { //evento submit
    e.preventDefault();
    $("#jsonAca").empty()
    guardarPedido();

})

//obtener el dato de "pedido" y lo guardo en la array "hamburguesa"
function guardarPedido() {
    let pedido = $("#pedido").val();

    hamburguesa.push(pedido)
    $("#pedido").val("")

    pedidoHamburguesa()
}

//-------arrays--------------------------------------------------------------------------------------------------------

let hamburguesa = []
let datoradio = []
let arrayDireccion = []
let datos = [];

//---------------------------------------------------------------------------------------------------------------

function pedidoHamburguesa() {
    //en una funcion , define el patron y un parametro(que es mi objeto , conteniendo la info de la hamburguesa),
    // que seguia en toda las posibilidades que se me dieran y con un if(), 
    //dependiendo lo que el usuario ingrese,sera a cual if() entrara.

    for (nombreHamburguesa of hamburguesa) {
        nombreHamburguesa
    }

    function pedido(dato) {
        localStorage.setItem("hamburguesa", (JSON.stringify(dato)))
        datos.push(dato)
        envioADomicio()
    }


    if (nombreHamburguesa === "completa") {
        pedido(hamburguesa_completa)

    } else if (nombreHamburguesa === "simple") {
        pedido(hamburguesa_simple)

    } else if (nombreHamburguesa === "especial") {
        pedido(hamburguesa_especial)

    } else if (nombreHamburguesa === "hamburguesa del dia") {
        pedido(hamburguesa_deldia)

    }
    //---------------------------------------------------------------------------------------------------------------

} //


function envioADomicio() { // depende de lo que seleccionado el usuario , se ejecuta el "IF" o el "ELSE IF"
    for (dato of datoradio) {
        if (dato == "si") {
            dametuDomicio()
        } else if (dato == "no") {
            $("#pedidoJquery").prepend(`<h2> pasar por el local </h2>`)
            console.log("pasar por local")
        }
    }
    imprimirMensaje()

}
//----------declaracion de funciones ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function dametuDomicio() {
    //recolecto de los imputs , los valores que necesito
    let direccion = $("#direccion").val();
    let altura = $("#altura").val();
    let localidad = $("#localidad").val();


    //ya con la clase definida Direccion, creo un objeto para luego enviarlo a la array "ARRAYDIRECCION" para pasar a la funcion "imprimirMensaje()"
    let datosImportantes = new Direccion(direccion, altura, localidad)
    arrayDireccion.push(datosImportantes)

    $("#direccion").val(""); //limpio los imputs
    $("#altura").val(""); //limpio los imputs
    $("#localidad").val(""); //limpio los imputs

    //guardo mi objeto en localStorage primero pasandolo a JSON y luego seteandolo con "setItem"
    let direccionJson = JSON.stringify(datosImportantes)
    localStorage.setItem("direccion_envio", direccionJson)

}

//---------------------------------------------------------------------------------------------------------------

function imprimirMensaje() {
    let c = $("#cantidad").val()

    //genero elementos en el body, que le indican mediante el boton mostrar pedido, lo que ordeno, "FALTARIA METER UN RADIO BUTTON PARA QUE ME INDIQUE LA CANDIDA QUE LLEVARIA"

    //RECORRO EL ARRAY QUE TIENE LA INFORMACION DE LA HAMBURGUESA
    for (item of datos) {

        $("#pedidoJquery").prepend(` <h3 id="h3" > pedido:<span> ${item.nombre_hamburguesa} </span></h3>
    <p id="p">  precio: <span> ${item.precio_hamburguesa*c} $ </span> </p>
    <p id="p">  cantidad: <span> ${c}  </span> </p>`);
    }

    //RECORRP EL ARRAY QUE TIENE LA INFORMACION DE LA DIRRECION
    for (direccion of arrayDireccion) {
        $("#pedidoJquery").append(`<h3 id="h3"> direccion: <span> ${direccion.direccion} </span> </h3>
   <p id="p">  altura n:<span> ${direccion.altura} </span> </p>
 <p id="p">   localidad: <span> ${direccion.localidad} </span>  </p>`);

    }

    $("#mostrarPedido").css("background-color", "green")

    //GENERO UN H2 Y UN BOTON CON UN EVENTO CLICK PARA PASAR A LA SIGUIENTE FUNCION "formaCobro"
    $("#botonEnvio").append(`<h2 id="h2Guardado"> pedido guardado  </h2>`)
    $("#botonEnvio").append(`<a href="#"><button type="button" id="pedir">comprar</button></a>`)

    $("#pedir").click(function() {
        $("#jsonAca").empty()
        formaCobro()

    })



}

//---------------------------------------------------------------------------------------------------------------
function guardarArray() {
    //traigo de un archivo json estatico , informacion para mostrar en pantalla, con un get
    const local = "json/info.json"
        // const APIURL = 'https://jsonplaceholder.typicode.com/posts'

    $.getJSON(local, function(respuesta, estado) {

        if (estado === "success") {
            let datos = respuesta
            for (info of datos) {
                $("#jsonAca").prepend(`<div>
                                    <h2> ${info.hamburguesa} </h3>
                                    <h3> precio: ${info.precio} $ </h3>
                                    <h3> #pedido: ${info.codigo} </h3>
                                     </div>`)

            }

        }
    })

}
//------------depende la opcion que aparesca , aparece una o la otra---------------------------------------------------------------------------------------------------
function formaCobro() {
    for (dato of datoradio) {
        if (dato == "si") {
            $("#container1").fadeOut("slow")
            $("#container2").fadeIn("slow")
        } else if (dato == "no") {
            $("#container1").fadeOut("slow")
            $("#container2").fadeIn("slow")

        }

    }
}
//-------------codigo de tarjeta de credito 3d(copiado)--------------------------------------------------------------------------------------------------
const tarjeta = document.querySelector("#tarjeta"),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // Volteamos la tarjeta para que el usuario vea el frente.
    mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});

//------------------------------------------------------------------------------------------------------------------------------

$("#enviaR").click(() => {
    $("body > div.contenedor").fadeOut("slow2000ms")
    comprarCompleta()
})

function comprarCompleta() {

    let number = $("#inputNumero").val();
    let name = $("#inputNombre").val();
    let mes = $("#selectMes").val();
    let year = $("#selectYear").val();
    let ccv = $("#inputCCV").val();


    //cree una clase tarjeta para crear un objeto y asi mandar al sessionStorage con sus propiedades
    let tarjeta = new Tarjeta(number, name, mes, year, ccv)
    sessionStorage.setItem("tarjeta", (JSON.stringify(tarjeta)))

    //limpio los imputs
    $("#inputNumero").val();
    $("#inputNombre").val();
    $("#selectMes").val();
    $("#selectYear").val();
    $("#inputCCV").val();

    //imprimo el cartel , que la compra se realizo con exito
    $("#container2").append(`<h2>la compra fue realizada con exito</h2>
                             <h2>la entrega llega en 30m</h2>                                       `)
    imprimirPdf()
}

function imprimirPdf() {
    let c = $("#cantidad").val()
    for (algo of datos) {
        $("#container2").prepend(`<div id="boleta">
                                    <h2>Pedido final de compra</h2>
                                    <h3>Pedido: ${algo.nombre_hamburguesa}</h3>
                                    <h3>Precio: ${algo.precio_hamburguesa} $ </h3>
                                    <h3>Cantidad de pedido: ${c} </h3>
                                    <h3>Precio total: ${algo.precio_hamburguesa*c} $ </h3>
                                                                            </div>`)

    }

    for (algo of arrayDireccion) {
        $("#boleta").append(`<h3> direccion: ${algo.direccion}  </h3>
                             <h3> altura:    ${algo.altura}     </h3>
                             <h3> localidad: ${algo.localidad}  </h3>`)
    }



}