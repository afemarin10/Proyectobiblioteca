Inciar();
function Inciar() {
  var SesionAbierta = sessionStorage.getItem("Inicio");
  if (SesionAbierta == "Si") {
    document.getElementById("mensaje1").innerHTML = "Usuario Logueado";
  } else {
    document.getElementById("mensaje1").innerHTML = "Invitado";
  }
}


function cerrar(){
  location.href= "Login.html";
}