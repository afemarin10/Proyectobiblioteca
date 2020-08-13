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

  function agregarinfo() {
    leerDatos();
    db.collection("informacion").add({
        mision: mision.value,
        vision: vision.value   ,
        objetivos: objetivos.value   ,
        organigrama :  organigrama.value    
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.idinfo);
            alert('Informacion registrada correctamente', docRef.idinfo);
            limpiarDatos();
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
    }

    leerDatos();

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


    function eliminar(id) {
        db.collection("informacion").doc(id).delete()
            .then(() => {
                console.log("informacion eliminada");
                leerDatos();
            }).catch((error) => {
                console.error("Error: ", error);
            });
    }

    function editar(id) {
        btnAgregarinfo.classList.add('d-none');
        btnActualizarinfo.classList.remove('d-none');
        db.collection("informacion").doc(id).get()
            .then((doc) => {
                idinfo.value = id;
                mision.value = doc.data().mision;
                vision.value = doc.data().vision;
                objetivos.value = doc.data().objetivos;
                organigrama.value = doc.data().organigrama;
            })
            .catch((error) => {
                console.log("Error: ", error);
            });
    }

    function actualizarinfo() {
        db.collection("informacion").doc(idinfo.value).update({
        mision: mision.value,
        vision: vision.value,
        objetivos :  objetivos.value,  
        organigrama :  organigrama.value  
        })
            .then(() => {
                limpiarDatos()
                leerDatos();
                btnActualizarinfo.classList.add('d-none');
                btnAgregarinfo.classList.remove('d-none');
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                console.log("Error: ", error);
            });;
    
    }





    function limpiarDatos() {
        mision.value = "";
        vision.value = "";
        objetivos.value = "";
        organigrama.value = "";
    }