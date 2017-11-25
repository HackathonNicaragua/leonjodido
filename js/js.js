function carga_sonido(){
    document.write('<embed src="../mp3/click.mp3"/>');
    location.href='login/ingresar.html';
}

/* que la variable correo quede registrdad en la web*/

var correo = function (correo) {
    var correo = document.getElementById(correo).value;
    setTimeout("miFuncion", 3000);
};
/* Fromulario de ingresar a app*/
function ingresar() {
    if (document.myForm1.correo.value == "") {
        myApp.alert("Ingresar Correo");
        document.myForm1.correo.focus();
        return false;
    }
    if (document.myForm1.pass.value == "") {
        myApp.alert("Ingresar contraseña");
        document.myForm1.pass.focus();
        return false;
    }
    /*validacion del formulario se puede observar*/
    var n = 1;
    var v1 = document.myForm1.correo.value;
    var v2 = document.myForm1.pass.value;

    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search("correo");
        if (busca > -1) {
            micookie = lista[i]
        }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual + 1);

    var lista2 = document.cookie.split(";");
    for (i in lista2) {
        var busca2 = lista2[i].search("pass");
        if (busca2 > -1) {
            micookie = lista2[i]
        }
    }
    var igual2 = micookie.indexOf("=");
    var valor2 = micookie.substring(igual2 + 1);
    if (valor == v1) {

    } else {
        myApp.alert("Correo no valido");
        return false;
    }
    if (valor2 == v2) {

    } else {
        myApp.alert("Contraseña no valido");
        return false;
    }
    return ( true );
}
/* Registrar las variables de los cliente*/
function registrar() {
    if (document.myForm2.nombre.value == "") {
        myApp.alert("Ingresar Nombre");
        document.myForm2.nombre.focus();
        return false;
    }
    if (document.myForm2.apellido.value == "") {
        myApp.alert("Ingresar Apellido");
        document.myForm2.apellido.focus();
        return false;
    }
    if (document.myForm2.nacimiento.value == "") {
        myApp.alert("Ingresar Fecha");
        document.myForm2.nacimiento.focus();
        return false;
    }

    if (document.myForm2.correo1.value == "") {
        myApp.alert("Ingresar Correo");
        document.myForm2.correo1.focus();
        return false;
    } else {
        var n4 = document.myForm2.correo1.value;
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(n4)) {

        } else {
            myApp.alert("La dirección de email es incorrecta.");
            return false;
        }
    }

    if (document.myForm2.pass1.value == "") {
        myApp.alert("Ingresar Contraseña");
        document.myForm2.pass1.focus();
        return false;
    } else {
        var n5 = document.myForm2.pass1.value;
        if (n5.length>5) {

        }else {
            myApp.alert("Contraseña Mayor 5 caracteres");
            return false;
        }
    }

    /* Crear las cookies */
    var n1 = document.myForm2.nombre.value;
    var n2 = document.myForm2.apellido.value;
    var n3 = document.myForm2.nacimiento.value;
    var n4 = document.myForm2.correo1.value;
    var n5 = document.myForm2.pass1.value;

    n1.replace('%20');
    n2.replace('%20');
    n3.replace('%20');
    n4.replace('%20');
    n5.replace('%20');

    /*variable cookies*/
    var n11 = 'nombre';
    var n12 = 'apellido';
    var n13 = 'fecha';
    var n14 = 'correo';
    var n15 = 'pass';
    var n = 0;

    nombre0 = n11;
    valor = n1;
    caducidad = 20000;

    if (!caducidad)
        caducidad = 20000;

    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + caducidad);
    document.cookie = nombre0 + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";

    nombre0 = n12;
    valor = n2;
    caducidad = 20000;

    if (!caducidad)
        caducidad = 20000;

    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + caducidad);
    document.cookie = nombre0 + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";

    nombre0 = n13;
    valor = n3;
    caducidad = 20000;

    if (!caducidad)
        caducidad = 20000;

    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + caducidad);
    document.cookie = nombre0 + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";

    nombre0 = n14;
    valor = n4;
    caducidad = 20000;

    if (!caducidad)
        caducidad = 20000;

    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + caducidad);
    document.cookie = nombre0 + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";


    nombre0 = n15;
    valor = n5;
    caducidad = 20000;

    if (!caducidad)
        caducidad = 20000;

    var expireDate = new Date();

    expireDate.setDate(expireDate.getDate() + caducidad);
    document.cookie = nombre0 + "=" + escape(valor) + "; expires=" + expireDate.toGMTString() + "; path=/";

    return (true);
}

function correoenviar() {
    if (document.form3.mensaje.value == "") {
        myApp.alert("Ingresar un mensaje");
        document.form3.mensaje.focus();
        return false;
    }
    return (true);
}

function leer() {
    var lista = document.cookie.split(";");
    for (i in lista) {
        var busca = lista[i].search("nombre");
        if (busca > -1) {
            micookie = lista[i]
        }
    }
    var igual = micookie.indexOf("=");
    var valor = micookie.substring(igual + 1);
    myApp.alert(valor);
    return true;
}

