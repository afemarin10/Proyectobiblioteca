var mensaje1;
var mensaje = document.getElementById("mensaje1");

function Inciar() {
  var usuario = document.getElementById("txtusuario");
  var contraseña = document.getElementById("txtcontraseña");
  if (usuario.value == "admin" && contraseña.value == "admin") {
    sessionStorage["Inicio"]="Si";
  } else {
    sessionStorage["Inicio"]="No";
  }
  location.href = "index.html";
 }

