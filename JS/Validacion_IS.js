$(document).ready(function(){
$("#form1").submit(function(e){
    e.preventdefault();
    var nombre_usuario = $("#correo").val();
    var contrasenav = $("#contrasena").val();

    var mostrarmsj = "";
    let enviar = false;

    if (nombre_usuario.trim().length < 4 || nombre_usuario.trim().length > 10) {
        msjMotrar += "<br>El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }







    if (enviar) {
        $("#mensajeAlert").html(msjMostrar);
    }
    else {
        $("#mensajeAlert").html("Enviado");
    }
})
})