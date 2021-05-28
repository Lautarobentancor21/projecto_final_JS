$(document).ready(function() {
    console.log("el dom esta listo")

    $("#pedidoJquery").css("display", "none") // pongo el display a none , para que luego con los botones , poder mostrar o ocultar el pedido
    $("#container2").css("display", "none")
    $("#container3").css("display", "none")
    $("body > div.contenedor").css("display", "none")



    //---------con el boton pagar , desaparesco el container 2 el div dentro y hago aparecer el formulario para la tarjeta-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    $("#pagar").click(function() {
        $("#container2 > div").css("display", "none")
        console.log()
        $("body > div.contenedor").show("slow2000ms")
    })

    //----------con el boton pagar desaparesco el container2 y le digo al usuario que pague por local----------------------------------------------------------------------------------------------------------------------------------------------------------------

    $("#efectivo").click(function() {
        $("#container2 > div").css("display", "none")

        $("#container2").append(`<h2>pagar por local</h2>`)
        imprimirPdf()
    })

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    $("#radiosi").click(function() {
        let si = $("#radiosi").val() //aca cargo primero los radio button para que al momento de seleccionar una opcion , ya esten esperando el evento "submit"
        datoradio.push(si)
        $("#form > label:nth-child(3)").show("slow20ms")
        $("#localidad").show("slow20ms")
        $("#form > label:nth-child(5)").show("slow20ms")
        $("#altura").show("slow20ms")
        $("#form > label:nth-child(7)").show("slow20ms")
        $("#direccion").show("slow20ms")
        $("#form > label:nth-child(9)").show("slow2000ms")

    })

    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    $("#radiono").click(function() {
        let no = $("#radiono").val()
        $("#localidad").fadeOut("slow2000ms")
        $("#form > label:nth-child(5)").fadeOut("slow2000ms")
        $("#altura").fadeOut("slow2000ms")
        $("#form > label:nth-child(7)").fadeOut("slow2000ms")
        $("#direccion").fadeOut("slow2000ms")
        $("#form > label:nth-child(9)").fadeOut("slow2000ms")

        datoradio.push(no)
    })




    //-----------------------------------------------

    $("#mostrar").click(function() {
        $("#jsonAca").css("display", "")
        $("#jsonAca").css("background-color", "#000000e0")
        guardarArray()
        $(this).prop("disabled", true);

    })

    $("#ocultar").click(function() {
        $("#jsonAca").empty()
        $("#jsonAca").css("background-color", "")
        $("#mostrar").prop("disabled", false);

    })







})

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//------- botones mostrar contenido y ocultar contenido---------------------------------------------------------------------------------------------------------------------

$("#mostrarPedido").click(function() {
    $("#pedidoJquery").show("slow20ms")


})
$("#ocultarPedido").click(function() {
    $("#pedidoJquery").hide("slow20ms")

})


//------- botones mostrar contenido y ocultar contenido---------------------------------------------------------------------------------------------------------------------