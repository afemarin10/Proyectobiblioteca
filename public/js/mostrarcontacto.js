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

var idNoticia = document.getElementById('id');
var titulo = document.getElementById('noticia');
var descripcion = document.getElementById('descripcion');
var imagen = document.getElementById('imagen');

leerDatosinicio();
function leerDatosinicio() {
    listaNoticia.innerHTML = "";
    
    db.collection("noticias").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaNoticia.innerHTML += `
                <div class="card text-center" style="width: 18rem;" >
                        <img src="${doc.data().imagen}" class="card-img-top" alt="">
                        <div class="card-body" >
                        <h5>${doc.data().titulo}</h5>
                        <div class="texto-noticia" >
                        <p class="des-noti">${doc.data().descripcion}</p>
                        <a href="https://chaira.uniamazonia.edu.co/chaira/View/Public/Biblioteca/OPAC.aspx" class="btn btn-success">Ir a noticia</a>
                        </div>
                       
                      </div>
                `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

mostrarContacto();
function mostrarContacto() {
    listaContacto.innerHTML = "";

    db.collection("contacto").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listaContacto.innerHTML += `
                <section class="container text-center">
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