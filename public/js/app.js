
var firebaseConfig = {
    apiKey: "AIzaSyB9wYAeBrXYb2ODfV0dJzxTR266jvXQ6bk",
    authDomain: "proyectobibliotecariaudla.firebaseapp.com",
    databaseURL: "https://proyectobibliotecariaudla.firebaseio.com",
    projectId: "proyectobibliotecariaudla",
    storageBucket: "proyectobibliotecariaudla.appspot.com",
    messagingSenderId: "1053389462582",
    appId: "1:1053389462582:web:55163b63619ab60be00c97",
    measurementId: "G-F4VTJBXR4Y"
};
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
    leerDatosUsuario();
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
leerDatosUsuario();
function leerDatosUsuario() {
    listaDocente.innerHTML = "";
    btnActualizar.classList.add('d-none');

    db.collection("usuarios").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaUsuario.innerHTML += `
                    <tr>
                        <td>${doc.data().nombre}</td>
                        <td>${doc.data().contraseña}</td>
                        <td>${doc.data().rol}</td>
                        <td>
                            <button onclick="eliminar('${doc.id}')" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                            <button onclick="editar('${doc.id}')" class="btn btn-info"><i class="far fa-edit"></i></button>
                        </td>
                    </tr>           
                `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}
function IniciarSesion(){
    var usuario = document.getElementById("txtusuario1");
    var contraseña = document.getElementById("txtcontraseña");
    db.collection("docentes").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(doc.data().nombre==usuario && doc.data().contraseña==contraseña ){
                    location.href = "administrador.html";
                }else{
                    location.href = "estudiante.html";
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
