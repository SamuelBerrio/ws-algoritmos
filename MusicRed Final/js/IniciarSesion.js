let Usuarios = [];
const URL = "https://62a8d30dec36bf40bdaed60e.mockapi.io/";
//Evento Iniciar sesion
document.getElementById("IniciarSesion").onclick = function () {
    getUsers();
}
//Funciones Api
const getInfo = async (resource) => {
    const response = await fetch(URL + resource);
    return response.json();
}

async function getUsers() {
    Usuarios = await getInfo("Usuarios");
    let user = document.getElementById("UsuarioI").value;
    let passw = document.getElementById("ContraseñaI").value;
    let band = false;
    Usuarios.forEach(item => {
        if (user == item.usuario && passw == item.contrasena) {
            localStorage.setItem("userActual", JSON.stringify(user));
            localStorage.setItem("CantidadNoconfio", JSON.stringify(0));
            localStorage.setItem("CantidadSecomenta", JSON.stringify(0));
            localStorage.setItem("CantidadSolitario", JSON.stringify(0));
            localStorage.setItem("CantidadUnavez", JSON.stringify(0));
            localStorage.setItem("CantidadCadenas", JSON.stringify(0));
            localStorage.setItem("CantidadIrreal", JSON.stringify(0));
            localStorage.setItem("CantidadCambios", JSON.stringify(0));
            localStorage.setItem("TotalCarrito", JSON.stringify(0));
            localStorage.setItem("Cantidad", JSON.stringify(0));
            document.getElementById("UserActual").innerHTML = user;
            document.getElementById("UsuarioI").value = "";
            document.getElementById("ContraseñaI").value = "";
            band = true;
            alert("Acceso exitoso");
        }
    })
    if (band == false) {
        alert("Usuario y Contraseña Invalidos");
    }
}


