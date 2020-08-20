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
leerDatoscontacto();
function leerDatoscontacto() {
    listacon.innerHTML = "";
    
    db.collection("contacto").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                listacon.innerHTML += `
                
                <div class="til-misi " >
                <h1 class = "mision">Direccion</h1>
                </div>
                <div class="tex-mision" >
                <p >${doc.data().direccion} </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Telefono</h1>
                </div>
                <div class="tex-mision " >
                <p >${doc.data().telefono}  </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Conmutador</h1>
                </div>
                <div class="tex-mision " >
                <p >${doc.data().conmutador} </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Extencion</h1>
                </div>
                <div class="tex-mision" >
                <p >${doc.data().extencion} </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Jefe division</h1>
                </div>
                <div class="tex-mision " >
                <p >${doc.data().jefe}  </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Correo de jefe division</h1>
                </div>
                <div class="tex-mision " >
                <p >${doc.data().correojefe} </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Secretaria</h1>
                </div>
                <div class="tex-mision " >
                <p >${doc.data().secre}  </p>
                </div>

                <div class="til-misi " >
                <h1 class = "mision">Correo de secretaria</h1>
                </div>
                <div class="tex-mision " >
                <p > ${doc.data().correosecre} </p>
                </div>
                

                `;
            });
        })
        .catch(function (error) {
            console.log("Error: ", error);
        });
}