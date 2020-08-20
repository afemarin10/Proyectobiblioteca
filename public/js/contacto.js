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

var idContacto = document.getElementById('idcon');
var direccion = document.getElementById('txtdire');
var telefono = document.getElementById('txttele');
var conmutador = document.getElementById('txtconmu');
var extencion = document.getElementById('txtext');
var jefe = document.getElementById('txtjefe');

var correojefe = document.getElementById('txtcorrjefe');
var secre = document.getElementById('txtsecre');
var correosecre = document.getElementById('txtcorrsecre');

function agregarContacto() {
    leerDatos();
    db.collection("contacto").add({
        direccion: direccion.value,
        telefono: telefono.value,
        conmutador: conmutador.value,
        extencion: extencion.value,
        jefe: jefe.value,
        correojefe: correojefe.value,
        secre: secre.value,
        correosecre: correosecre.value


    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Informacion de Contacto registrada correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
      
}
leerDatos();

function leerDatos() {
    listaContacto.innerHTML = "";
    btnActualizarContacto.classList.add('d-none');

    db.collection("contacto").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaContacto.innerHTML += `
                        <tr>
                            <td>${doc.data().direccion}</td>
                            <td>${doc.data().telefono}</td>
                            <td>${doc.data().conmutador}</td>
                            <td>${doc.data().extencion}</td>
                            <td>${doc.data().jefe}</td>
                            <td>${doc.data().correojefe}</td>
                            <td>${doc.data().secre}</td>
                            <td>${doc.data().correojefe}</td>

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
    db.collection("contacto").doc(id).delete()
        .then(() => {
            console.log("Contacto eliminada");
            leerDatos();
        }).catch((error) => {
            console.error("Error: ", error);
        });
}
function editar(id) {
    btnAgregarContacto.classList.add('d-none');
    btnActualizarContacto.classList.remove('d-none');
    db.collection("contacto").doc(id).get()
        .then((doc) => {
            idContacto.value = id;
            direccion.value = doc.data().direccion;
            telefono.value = doc.data().telefono;
            conmutador.value = doc.data().conmutador;
            extencion.value = doc.data().extencion;
            jefe.value = doc.data().jefe;
            correojefe.value = doc.data().correojefe;
            secre.value = doc.data().secre;
            correosecre.value = doc.data().correosecre
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

}
function actualizarContacto() {
    db.collection("contacto").doc(idContacto.value).update({
        direccion: direccion.value,
        telefono: telefono.value,
        conmutador: conmutador.value,
        extencion: extencion.value,
        jefe: jefe.value,
        correojefe: correojefe.value,
        secre: secre.value,
        correosecre: correosecre.value
    })
        .then(() => {
            limpiarDatos()
            leerDatos();
            btnActualizarContacto.classList.add('d-none');
            btnAgregarContacto.classList.remove('d-none');
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            console.log("Error: ", error);
        });;

}
function limpiarDatos() {
    direccion.value = " ",
        telefono.value = " ",
        conmutador.value = " ",
        extencion.value = " ",
        jefe.value = " ",
        correojefe.value = " ",
        secre.value = " ",
        correosecre.value = " "
}