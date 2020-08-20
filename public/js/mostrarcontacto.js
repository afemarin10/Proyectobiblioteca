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
                        <a href="vistas/Noticiaindividual.html" class="btn btn-success">Ir a noticia</a>
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
                <p class = "texto-footer text-center">${doc.data().direccion}<br>
                ${doc.data().telefono} ${doc.data().conmutador} ${doc.data().extencion}<br>
                ${doc.data().jefe} ${doc.data().correojefe}<br>
                ${doc.data().secre} ${doc.data().correosecre}<br>
		        2020.Todos los derechos reservados
                </p>                  
                `;
                
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

function leerunaNoticias(id) {
    location.href = "../vistas/Noticiaindividual.html"
    informacionnoticia.innerHTML = "";

  db.collection("noticias")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().id == id) {
            informacionnoticia.innerHTML += `
                <div class="img-noticia" >
                    <img src="${doc.data().imagen}" class="card-img-top" alt="">
                </div>
                <div class="til-noticias" >
                    <h4>${doc.data().titulo}</h4>
                </div>
                 <div class="des-noticia" >
                        <p class="noti">${doc.data().descripcion}</p>
                 </div>   
                `;
        }
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

function dirigir(){
    location.href = "vistas/NoticiaIndivual.html"
}