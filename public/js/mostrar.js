var firebaseConfig = {
  apiKey: "AIzaSyB9wYAeBrXYb2ODfV0dJzxTR266jvXQ6bk",
  authDomain: "proyectobibliotecariaudla.firebaseapp.com",
  databaseURL: "https://proyectobibliotecariaudla.firebaseio.com",
  projectId: "proyectobibliotecariaudla",
  storageBucket: "proyectobibliotecariaudla.appspot.com",
  messagingSenderId: "1053389462582",
  appId: "1:1053389462582:web:55163b63619ab60be00c97",
  measurementId: "G-F4VTJBXR4Y",
};
//firebase.initializeApp(firebaseConfig);

//var firebaseConfig = {
//    apiKey: "AIzaSyC4z79Pib0dbdEwhXPkxDFDOAkVKl2NuTA",
//    authDomain: "biblioteca-12681.firebaseapp.com",
//    databaseURL: "https://biblioteca-12681.firebaseio.com",
//    projectId: "biblioteca-12681",
//    storageBucket: "biblioteca-12681.appspot.com",
//    messagingSenderId: "332668126521",
//    appId: "1:332668126521:web:882f21ce2e169a428c54e8"
//  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var idNoticia = document.getElementById("id");
var titulo = document.getElementById("noticia");
var descripcion = document.getElementById("descripcion");
var imagen = document.getElementById("imagen");

leerDatosinicio();
function leerDatosinicio() {
  listaNoticia.innerHTML = "";

  db.collection("noticias")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        listaNoticia.innerHTML += `
                <div class="card text-center" style="width: 18rem;" >
                        <img src="${
                          doc.data().imagen
                        }" class="card-img-top" alt="">
                        <div class="card-body" >
                        <h5>${doc.data().titulo} </h5>
                        <div class="texto-noticia" >
                        <p class="des-noti">${doc.data().descripcion}</p>
                        <button class="btn btn-success" onclick="leerunaNoticias()" >Ir a noticia</button>
                        </div>
                       
                      </div>
                `;
      });
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
}

leerTodaNoticias();
function leerTodaNoticias() {
  tnoticias.innerHTML = "";

  db.collection("noticias")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tnoticias.innerHTML += `
                <div class="img-noticia" >
                    <img src="${doc.data().imagen}" class="card-img-top" alt="">
                </div>
                <div class="til-noticias" >
                    <h4>${doc.data().descripcion} +${doc.data().titulo}</h4>
                </div>
                 <div class="des-noticia" >
                        <p class="noti"> ${doc.data().titulo} ${doc.data().descripcion}</p>
                 </div>   
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
