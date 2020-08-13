var mensaje = document.getElementById('mensaje');
var usuario = document.getElementById('txtusuario1');
var contrasena = document.getElementById('txtcontrasena');
localstorage=window.localStorage;

function login(){
    if (usuario.value == "admin" && contrasena.value == "admin") {
        localstorage.setItem('user',usuario.value);
        location.href = "administrador.html";
    }
    else { 
        location.href = "Login.html";
    }
}
function cerrar(){
    localStorage.removeItem('user');
    location.href = "index.html";

}
