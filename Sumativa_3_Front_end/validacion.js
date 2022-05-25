function validar() {
    var result_val_email = validar_email();
    var result_val_passw = validar_password();
    var result_val_direcc = validar_direcc();
    var result_val_city = validar_city();
    var result_val_postal = validar_postal();
    var result_val_phone = validar_phone();
    var result_val_rpassw = validar_rpassword();
    var result_val_check = validar_checkbox();
    var result_val_comuna = validar_comuna();
    return (result_val_email && result_val_passw && result_val_direcc && result_val_city && result_val_postal && result_val_phone && result_val_rpassw && result_val_check && result_val_comuna);
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_comuna(){
    var comuna = document.getElementById("comuna");
    var div = document.getElementById("msj-comuna");
    if(comuna.selected) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "Debe seleccionar una comuna";
        div.className = "text-danger";
        return false;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_password() {
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-passw");
    if (passw == ""){
        div.innerHTML = "La contraseña no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (passw.search(/[a-z]/i) < 0) {
            div.innerHTML = "La contraseña debe contener al menos una letra";
            div.className = "text-danger";
        } else {
            if (passw.search(/[0-9]/) < 0) {
                div.innerHTML = "La contraseña debe contener al menos un número";
                div.className = "text-danger";
            } else {
                if (passw.length > 6 || passw.length < 3) {
                    div.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
                    div.className = "text-danger";
                    return false;
                } else{
                div.innerHTML = "";
                return true
                }
            }
        }
    }
}

function validar_rpassword(){
    var rpassw = document.getElementById("rpassword").value;
    var passw = document.getElementById("password").value;
    var div = document.getElementById("msj-rpassw");
    if (rpassw == passw){
        div.innerHTML = "";
        return true
    } else{
        div.innerHTML= "La contraseña debe ser igual a la anterior"
        div.className= "text-danger";
        return false
    }
}

function validar_direcc() {
    var direcc = document.getElementById("address").value;
    var div= document.getElementById("msj-direcc")
    if (direcc != "") {
        return true;
    } else {
        div.innerHTML = "La direccion no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}
function validar_city() {
    var city = document.getElementById("city").value;
    var div= document.getElementById("msj-city")
    if (city != "") {
        return true;
    } else {
        div.innerHTML = "La ciudad/localidad no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_postal(){
    var postal = document.getElementById("postal").value;
    var div= document.getElementById("msj-postal")
    if (postal != ""){
        if (isNaN(postal)){
            div.innerHTML = "Solo se pueden ingresar numeros";
            div.className = "text-danger";
            return false;
        } else {
            if (postal.length < 7 || postal.length > 7) {
                div.innerHTML = "El número debe tener 7 digitos";
                div.className = "text-danger";
                return false;
            } else {
                div.innerHTML = "";
                return true;
            }
            
        }
    } else {
        div.innerHTML = "El codigo postal no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }

}

function validar_phone(){
    var phone = document.getElementById("phone").value;
    var phonef = document.getElementById("phonef").value;
    var div= document.getElementById("msj-phone");
    if (phone != "" || phonef != ""){
        if (isNaN (phone) || isNaN (phonef)){
            div.innerHTML = "Solo se pueden ingresar numeros";
            div.className = "text-danger";
            return false
        } else {
            if (phone.length < 9 && phonef.length < 9 || phone.length > 9 || phonef.length > 9) {
                div.innerHTML = "El número debe tener 9 digitos";
                div.className = "text-danger";
                return false
            } else {
                div.innerHTML = "";
                return true
            }
        }
    } else {
        div.innerHTML = "Debe ingresar algun teléfono fijo o móvil válido";
        div.className = "text-danger";
        return false;
    }

}

function validar_checkbox(){
    var div = document.getElementById("msj-check");
    cont = 0;
    if(document.getElementById('Bailar').checked) {
        cont += 1; 
    }
    if(document.getElementById('Cantar').checked) {
        cont += 1;
    }
    if(document.getElementById('Escucharmúsica').checked) {
        cont += 1;
    }
    if(document.getElementById('Vervideos').checked) {
        cont += 1;
    }
    if(document.getElementById('Leer').checked) {
        cont += 1;
    }
    if(document.getElementById('Jugar').checked) {
        cont += 1;
    }
    if(document.getElementById('Ejercicio').checked) {
        cont += 1;
    }
    if(document.getElementById('Perro').checked) {
        cont += 1;
    }
    if(document.getElementById('Viajar').checked) {
        cont += 1;
    }
    if(cont < 2 ){
        document.getElementById("msj-check").style.display = "block"
        
        return 
    } else {
        document.getElementById("msj-check").style.display = "none"
    }
        
}

