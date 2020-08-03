
//var firebaseConfig = {
 //   apiKey: "AIzaSyB9wYAeBrXYb2ODfV0dJzxTR266jvXQ6bk",
 //   authDomain: "proyectobibliotecariaudla.firebaseapp.com",
 //   databaseURL: "https://proyectobibliotecariaudla.firebaseio.com",
 //   projectId: "proyectobibliotecariaudla",
 //   storageBucket: "proyectobibliotecariaudla.appspot.com",
 //   messagingSenderId: "1053389462582",
 //   appId: "1:1053389462582:web:55163b63619ab60be00c97",
 //   measurementId: "G-F4VTJBXR4Y"
//};
//firebase.initializeApp(firebaseConfig);

var firebaseConfig = {
    apiKey: "AIzaSyC4z79Pib0dbdEwhXPkxDFDOAkVKl2NuTA",
    authDomain: "biblioteca-12681.firebaseapp.com",
    databaseURL: "https://biblioteca-12681.firebaseio.com",
    projectId: "biblioteca-12681",
    storageBucket: "biblioteca-12681.appspot.com",
    messagingSenderId: "332668126521",
    appId: "1:332668126521:web:882f21ce2e169a428c54e8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var txtusuario = document.getElementById('txtusuario');
var txtcontra1 = document.getElementById('txtcontraseña1');
var txtcontra2 = document.getElementById('txtcontraseña2');
var rol = document.getElementById('rol');
var btnAgregar = document.getElementById('btnregistro');
var btniniciar = document.getElementById('iniciar');
var listaUsuario = document.getElementById('listaUsuario');

function RegistroUsuario(user) {
    //leerDatosUsuario();
    db.collection("usuarios").add({
        nombre: txtusuario.value,
        contraseña: txtcontra1.value,
        contraseña2: txtcontra2.value,
        rol: rol.value
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Usuario registrado correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    //console.log(`El nombre es: ${txtname.value} y el apellido es: ${apellidos.value}`);
}


function IniciarSesion(){
    var usuario = document.getElementById("txtusuario1");
    var contraseña = document.getElementById("txtcontraseña");
    db.collection("usuarios").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if( usuario==doc.data().nombre && contraseña==doc.data().contraseña){                    
                    location.href = "estudiante.html";
                }else{
                    location.href = "administrador.html";
                }
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });


}


function limpiarDatos() {
    txtusuario.value="",
    txtcontra1.value="",
    txtcontra2.value=""
    
}
