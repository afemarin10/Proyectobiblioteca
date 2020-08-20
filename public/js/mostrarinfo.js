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


 var idinfo = document.getElementById('idinfo');
  var mision = document.getElementById('mision');
  var vision = document.getElementById('vision');
  var objetivos = document.getElementById('objetivos');
  var organigrama = document.getElementById('organigrama');

mostrarinfo();
function mostrarinfo() {
    informacionorganizacional.innerHTML = "";
    db.collection("informacion").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                informacionorganizacional.innerHTML += `
                <div class="til-misi text-center" >
                <h1 class = "mision">Misión</h1>
                </div>
                <div class="tex-mision text-justify" >
                <p >${doc.data().mision} </p>
                </div>
                <div class="til-visi text-center" >
                <h1 class = "vision">Visión</h1>
                </div>
                <div class="tex-vision text-justify" >
                <p>${doc.data().vision} </p>
                </div>
                <div class="til-obj text-center" >
                <h1 class = "objetivos">Objetivos</h1>
                </div>
                <div class="tex-obj text-justify" >
                <p>${doc.data().objetivos} </p>
                </div>
                <div class="til-orga text-center" >
                <p>${doc.data().organigrama}</p> 
                </div>
                `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}