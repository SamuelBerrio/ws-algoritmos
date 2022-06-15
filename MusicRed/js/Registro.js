export const URL = "https://62a8d30dec36bf40bdaed60e.mockapi.io/";
export let Usuarios = [];
console.log(Usuarios);
//Mostrar Info
fetch(URL + "Usuarios")
    .then(response => response.json())
    .then(data => console.log(data));
//Guardar Usuarios Funcion
function saveUser(user) {
    fetch(URL + "Usuarios", {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
document.getElementById("Registrarse").onclick = function () {
    function info(usuario, contrasena, tarjetacredito, gustomusical) {
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.tarjetacredito = tarjetacredito;
        this.gustomusical = gustomusical;
    }
    var user = document.getElementById("Usuario").value;
    var passw = document.getElementById("Contraseña").value;
    var tcredit = document.getElementById("Tcredito").value;
    var mG = document.getElementById("Gustos").value;
    //Creo el array con los datos ingresados por el usuario
    if (user == "" || passw == "" || tcredit == "" || mG == "") {
        alert("Complete los campos solicitados para el registro");
    } else {
        let nuevoUsuario = new info(user, passw, tcredit, mG);
        agregar(nuevoUsuario);
    }
}
function agregar(nuevoUsuario) {
    saveUser(nuevoUsuario);
    document.getElementById("UserActual").innerHTML = nuevoUsuario.usuario;
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
    document.getElementById("Tcredito").value = "";
    document.getElementById("Gustos").value = "";
}