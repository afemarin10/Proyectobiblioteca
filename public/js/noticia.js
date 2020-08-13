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

  function agregarNoticia(user) {
    leerDatos();
    db.collection("noticias").add({
        titulo: titulo.value,
        descripcion: descripcion.value   ,
        imagen :  imagen.value    
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert('Noticia registrada correctamente', docRef.id);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    }

    leerDatos();

    function leerDatos() {
        listaNoticia.innerHTML = "";
        btnActualizar.classList.add('d-none');
    
        db.collection("noticias").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    listaNoticia.innerHTML += `
                        <tr>
                            <td>${doc.data().titulo}</td>
                            <td>${doc.data().descripcion}</td>
                            <td>${doc.data().imagen}</td>
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
        db.collection("noticias").doc(id).delete()
            .then(() => {
                console.log("Noticia eliminada");
                leerDatos();
            }).catch((error) => {
                console.error("Error: ", error);
            });
    }

    function editar(id) {
        btnAgregar.classList.add('d-none');
        btnActualizar.classList.remove('d-none');
        db.collection("noticias").doc(id).get()
            .then((doc) => {
                idNoticia.value = id;
                titulo.value = doc.data().titulo;
                descripcion.value = doc.data().descripcion;
                imagen.value = doc.data().imagen;
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    function actualizarNoticia() {
        db.collection("noticias").doc(idNoticia.value).update({
        titulo: titulo.value,
        descripcion: descripcion.value,
        imagen :  imagen.value  
        })
            .then(() => {
                limpiarDatos()
                leerDatos();
                btnActualizar.classList.add('d-none');
                btnAgregar.classList.remove('d-none');
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.log("Error: ", error);
            });;
    
    }





    function limpiarDatos() {
        titulo.value = "";
        descripcion.value = "";
        imagen.value = "";
    }

