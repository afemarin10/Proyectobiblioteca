var mensaje = document.getElementById('mensaje');
var usuario = document.getElementById('txtusuario1');
var contrasena = document.getElementById('txtcontrasena');
localstorage=window.localStorage;

function login(){
    location.href = "Login.html"
}
function cerrar(){
    localStorage.removeItem('user');
    location.href = "../index.html";

}
function cerrar1(){
    localStorage.removeItem('user');
    location.href = "../index.html";

}

function noticias(){
    location.href = "../vistas/Noticias.html";
}