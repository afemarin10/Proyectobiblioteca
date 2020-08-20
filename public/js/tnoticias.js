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

leerTodaNoticias();
function leerTodaNoticias() {
    tnoticias.innerHTML = "";

    db.collection("noticias").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                tnoticias.innerHTML += `
                <div class="img-noticia" >
                    <img src="${doc.data().imagen}" class="card-img-top" alt="">
                </div>
                <div class="til-noticias text-center" >
                    <h4 >${doc.data().titulo}</h4>
                </div>
                 <div class="des-noticia text-justify" >
                        <a class="noti">${doc.data().descripcion}</a>
                 </div>   
                `;
                
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}


function leerDatos() {
    informacion.innerHTML = "";
    btnActualizarinfo.classList.add('d-none');

    db.collection("informacion").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                informacion.innerHTML += `
                    <tr>
                        <td>${doc.data().mision}</td>
                        <td>${doc.data().vision}</td>
                        <td>${doc.data().objetivos}</td>
                        <td>${doc.data().organigrama}</td>
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