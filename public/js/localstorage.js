localstorage = window.localStorage;
var mensaje = document.getElementById('mensaje')
function load() {
    var user = localStorage.getItem('user');
    if (user) {
        mensaje.innerHTML = "Usuario Logeado : " + "  " + user;
    } else {
        mensaje.innerHTML = "No Logeado";
    }
}
window.onload = load