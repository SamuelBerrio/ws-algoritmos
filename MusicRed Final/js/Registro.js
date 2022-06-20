const URL = "https://62a8d30dec36bf40bdaed60e.mockapi.io/";
let Usuarios = [];
//Mostrar Info
const getInfo = async (resource) => {
    const response = await fetch(URL + resource);
    return response.json();
}
async function getUsers() {
    Usuarios = await getInfo("Usuarios");
}
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
       nuevoUsuario = new info(user, passw, tcredit, mG);
        agregar(nuevoUsuario);
        localStorage.setItem("TotalCarrito", JSON.stringify(0));
        localStorage.setItem("Cantidad", JSON.stringify(0));
        alert("Registro exitoso");
    }
}
function agregar(nuevoUsuario) {
    saveUser(nuevoUsuario);
    localStorage.setItem("userActual", JSON.stringify(nuevoUsuario.usuario));
    document.getElementById("UserActual").innerHTML = nuevoUsuario.usuario;
    localStorage.setItem("CantidadNoconfio", JSON.stringify(0));
    localStorage.setItem("CantidadSecomenta", JSON.stringify(0));
    localStorage.setItem("CantidadSolitario", JSON.stringify(0));
    localStorage.setItem("CantidadUnavez", JSON.stringify(0));
    localStorage.setItem("CantidadCadenas", JSON.stringify(0));
    localStorage.setItem("CantidadIrreal", JSON.stringify(0));
    localStorage.setItem("CantidadCambios", JSON.stringify(0));
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
    document.getElementById("Tcredito").value = "";
    document.getElementById("Gustos").value = "";
}