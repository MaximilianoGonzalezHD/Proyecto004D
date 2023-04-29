$(document).ready(function(){
$("#formR").submit(function(e){
    e.preventDefault();
    var correor = $("#emailR").val();
    var nombrer = $("#NombreR").val();
    var contrasenar = $("#ContrasenaR").val();
    var confcontrasenar = $("#ConfirmContrasenaR").val();
    
    var mostrarmsj = "Advertencia:";
    let enviar = false;

    if (nombrer.trim().length < 4 || nombrer.trim().length > 10) {
        mostrarmsj += "<br>- El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }

    var letra = nombrer.trim().charAt(0);
        if (!esMayuscula(letra)) {
            mostrarmsj += "<br>- La primera letra debe ser mayúscula";
            enviar = true;
        }
    
    if (contrasenar != confcontrasenar) {
        mostrarmsj += "<br>- Las contraseñas NO coinciden";
        enviar = true;
    }




    if (enviar) {
        $("#warnings").html(mostrarmsj);
    }
    else {
        $("#warnings").html("Enviado");
    }
})

function esMayuscula(letra) {
    if (letra == letra.toUpperCase()) {
        return true;
    }
    else {
        return false;
    }
}


})