const URL = "https://62a8d30dec36bf40bdaed60e.mockapi.io/";
let Usuarios = [];
let control = [0, 0, 0, 0, 0, 0, 0];
var Total = JSON.parse(localStorage.getItem("TotalCarrito"));
var Cantidad = JSON.parse(localStorage.getItem("Cantidad"));
var CantidadNoconfio = JSON.parse(localStorage.getItem("CantidadNoconfio"));
var CantidadSecomenta = JSON.parse(localStorage.getItem("CantidadSecomenta"));
var CantidadSolitario = JSON.parse(localStorage.getItem("CantidadSolitario"));
var CantidadUnavez = JSON.parse(localStorage.getItem("CantidadUnavez"));
var CantidadCadenas = JSON.parse(localStorage.getItem("CantidadCadenas"));
var CantidadIrreal = JSON.parse(localStorage.getItem("CantidadIrreal"));
var CantidadCambios = JSON.parse(localStorage.getItem("CantidadCambios"));
var userEnuso = JSON.parse(localStorage.getItem("userActual"));
var lista = document.getElementById("lista");
var Comprar = document.getElementById("Comprar");
//Autocompletado
if (CantidadNoconfio > 0 && control[0] == 0) {
    control[0] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/No confio.png" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">No confio</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 100 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadNoconfio}</p>
    `;
    lista.appendChild(li);
} if (CantidadSecomenta > 0 && control[1] == 0) {
    control[1] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Se comenta.jpg" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Se comenta</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 160 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadSecomenta}</p>
    `;
    lista.appendChild(li);
} if (CantidadSolitario > 0 && control[2] == 0) {
    control[2] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Solitario.jpg" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Solitario</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 70 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadSolitario}</p>
    `;
    lista.appendChild(li);
} if (CantidadUnavez > 0 && control[3] == 0) {
    control[3] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Una vez.png" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Una vez</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 240 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadUnavez}</p>
    `;
    lista.appendChild(li);
} if (CantidadCadenas > 0 && control[4] == 0) {
    control[4] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Cadenas.jpg" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Cadenas</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 120 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadCadenas}</p>
    `;
    lista.appendChild(li);
} if (CantidadIrreal > 0 && control[5] == 0) {
    control[5] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Irreal.jpg" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Irreal</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 140 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadIrreal}</p>
    `;
    lista.appendChild(li);
} if (CantidadCambios > 0 && control[6] == 0) {
    control[6] = 1;
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="imgs/Cambios.jpg" class="PortadasCarrito">
                        <h5 class="Carrito-Nombre-Canciones" id="NombreBeat">Cambios</h5>
                        <h5 class="Carrito-Nombre-Canciones" id="PrecioBeat">Precio : 230 $</h5>
                        <p class="Carrito-Nombre-Canciones" id="CantidadBeat">${CantidadCambios}</p>
    `;
    lista.appendChild(li);
}
document.getElementById("TotalHTML").innerHTML = Total + " $";
document.getElementById("CantidadProductosHTML").innerHTML = Cantidad;
//Eventos
Comprar.onclick = function () {
    if (userEnuso != null) {
        crearFactura();
        lista.innerHTML = "";
    }
    else if (userEnuso == null) {
        alert("Inicie sesion para continuar la compra");
    }
}
//Funciones
function saveFactura(factura) {
    fetch(URL + "/RegistroCompra", {
        method: 'POST',
        body: JSON.stringify(factura),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
function agregarFactura(factura) {
    saveFactura(factura);
}
const getInfo = async (resource) => {
    const response = await fetch(URL + resource);
    return response.json();
}
async function crearFactura() {
    Usuarios = await getInfo("Usuarios");
    Usuarios.forEach(item => {
        if (userEnuso == item.usuario) {
            function fac(Valorcompra, Cantidadproductos, userID) {
                this.Valorcompra = Valorcompra;
                this.Cantidadproductos = Cantidadproductos;
                this.userID = userID;
            }
            let factura = new fac(Total, Cantidad, item.id);
            agregarFactura(factura);
            localStorage.setItem("CantidadNoconfio", JSON.stringify(0));
            localStorage.setItem("CantidadSecomenta", JSON.stringify(0));
            localStorage.setItem("CantidadSolitario", JSON.stringify(0));
            localStorage.setItem("CantidadUnavez", JSON.stringify(0));
            localStorage.setItem("CantidadCadenas", JSON.stringify(0));
            localStorage.setItem("CantidadIrreal", JSON.stringify(0));
            localStorage.setItem("CantidadCambios", JSON.stringify(0));
            localStorage.setItem("TotalCarrito", JSON.stringify(0));
            localStorage.setItem("Cantidad", JSON.stringify(0));
            alert("Compra completada con exito");
        }
    });
}