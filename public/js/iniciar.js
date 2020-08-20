var mensaje = document.getElementById('mensaje');
var usuario = document.getElementById('txtusuario1');
var contrasena = document.getElementById('txtcontrasena');
localstorage=window.localStorage;

function login(){
    if (usuario.value == "admin" && contrasena.value == "admin") {
        localstorage.setItem('user',usuario.value);
        location.href = "../vistas/admi.html";
    }
    else { 
        location.href = "../vistas/Login.html";
    }
}
function cerrar(){
    localStorage.removeItem('user');
    location.href = "../index.html";

}

function noticias(){
    location.href = "../vistas/Noticias.html";
}