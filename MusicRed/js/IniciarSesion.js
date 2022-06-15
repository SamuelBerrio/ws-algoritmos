import { URL } from './Registro.js';
document.getElementById("IniciarSesion").onclick = function () {
    let user = document.getElementById("UsuarioI").value;
    let passw = document.getElementById("ContraseñaI").value;
    fetch(URL + "Usuarios")
        .then(response => response.json())
        .then(data =>
            data.forEach(i => {
                if (user == i.usuario || passw == i.contrasena) {
                    console.log(user);
                }

            })
        );
}
