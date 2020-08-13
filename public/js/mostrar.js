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
                <div class="card">
                <h5>${doc.data().titulo}</h5>
                <p>${doc.data().descripcion}</p>
                <h5>${doc.data().imagen}</h5> 
                </div>
                <br>    
                `;
                
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}

