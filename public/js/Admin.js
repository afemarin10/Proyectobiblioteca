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
var idUsuario = document.getElementById('id');
var nombre = document.getElementById('nombre');
var contraseña = document.getElementById('contraseña');
var contraseña_2 = document.getElementById('contraseña2');
var rol = document.getElementById('rol');

function agregarUsuario(user) {
  leerUsuarios();
  db.collection("usuarios").add({
      nombre: nombre.value,
      contraseña: contraseña.value   ,
      contraseña2 :  contraseña2.value ,
      rol : rol.value   
  })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          alert('Usuario registrado correctamente', docRef.id);
          limpiarDatos();
      })
      .catch((error) => {
          console.error("Error: ", error);
      });
  }

leerUsuarios();

function leerUsuarios() {
  listaUsuario.innerHTML = "";
    Actualizar.classList.add('d-none');
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


function eliminar(id) {
    db.collection("usuarios").doc(id).delete()
        .then(() => {
            console.log("Usuario eliminado");
            leerDatos();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}

function editar(id) {
    btnAgregar.classList.add('d-none');
    Actualizar.classList.remove('d-none');
    db.collection("usuarios").doc(id).get()
        .then((doc) => {
            idUsuario.value = id;
            nombre.value = doc.data().nombre;
            contraseña.value = doc.data().contraseña;
            contraseña2.value = doc.data().contraseña2;
            rol.value = doc.data().rol;
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
}

function actualizarUsuario() {
    db.collection("usuarios").doc(idUsuario.value).update({
      nombre: nombre.value,
      contraseña: contraseña.value   ,
      contraseña2 :  contraseña2.value ,
      rol : rol.value    
    })
        .then(() => {
            limpiarDatos()
            leerUsuarios();
            Actualizar.classList.add('d-none');
            Agregar.classList.remove('d-none');
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        });;

}


function limpiarDatos() {
  nombre.value = "";
  contraseña.value = "";
  contraseña_2.value = "";
  rol.value = "";
}