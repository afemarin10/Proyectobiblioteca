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

mostrarContacto();
function mostrarContacto() {
    listaContacto.innerHTML = "";

    db.collection("contacto").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaContacto.innerHTML += `
                <section class="">
               
                <p>${doc.data().direccion}</p>
                <p>${doc.data().telefono}</p>
                <p>${doc.data().conmutador}</p> 
                <p>${doc.data().extencion}</p> 
                <p>${doc.data().jefe}</p> 
                <p>${doc.data().correojefe}</p> 
                <p>${doc.data().secre}</p> 
                <p>${doc.data().correosecre}</p> 

                </section>
                  
                `;
                
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}