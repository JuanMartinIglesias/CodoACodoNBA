(function(){

    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');


    var validarNombre = function(e){
        if (formulario.fnombre.value == 0){
            alert("Completa el campo Nombre");
            e.preventDefault();
            //https://www.w3schools.com/jsref/event_preventdefault.asp
            //Evita que un enlace abra la URL
        }
    };

    var validarApellido = function(e){
        if (formulario.fapell.value == 0){
            alert("Completa el campo Apellido");
            e.preventDefault();
        }
    };

    var validarNacimiento = function(e){
        if (formulario.fnacimiento.value == 0){
            alert("Completa el campo Nacimiento");
            e.preventDefault();
        }
    };

    var validarCorreo = function(e){
        if (formulario.femail.value == 0){
            alert("Completa el campo Correo");
            e.preventDefault();
        }
    };

    
    var validarCheckbox = function(e){
        if (formulario.fterminos.checked == false){
            alert("Firmanos la escritura! Acepta los términos y condiciones para continuar");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarApellido(e);
        validarNacimiento(e);
        validarCorreo(e);
        validarCheckbox(e);
    };
    
    formulario.addEventListener("submit", validar);

}())