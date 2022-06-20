//Variables 
var Total = JSON.parse(localStorage.getItem("TotalCarrito"));
var Cantidad = JSON.parse(localStorage.getItem("Cantidad"));
var CantidadNoconfio = JSON.parse(localStorage.getItem("CantidadNoconfio"));
var CantidadSecomenta = JSON.parse(localStorage.getItem("CantidadSecomenta"));
var CantidadSolitario = JSON.parse(localStorage.getItem("CantidadSolitario"));
var CantidadUnavez = JSON.parse(localStorage.getItem("CantidadUnavez"));
var CantidadCadenas = JSON.parse(localStorage.getItem("CantidadCadenas"));
var CantidadIrreal = JSON.parse(localStorage.getItem("CantidadIrreal"));
var CantidadCambios = JSON.parse(localStorage.getItem("CantidadCambios"));
console.log(Total);
//Identificador de cuenta
let userActual = JSON.parse(localStorage.getItem("userActual"));
console.log(userActual);
if (userActual != null) {
    document.getElementById("UserActual").innerHTML = userActual;
}
//Elementos del DOM Comprar.html
var noconfio = document.getElementById("Noconfio");
var secomenta = document.getElementById("Secomenta");
var solitario = document.getElementById("Solitario");
var unavez = document.getElementById("Unavez");
var cadenas = document.getElementById("Cadenas");
var irreal = document.getElementById("Irreal");
var cambios = document.getElementById("Cambios");
//Eventos Carrito
noconfio.onclick = function () {
    CantidadNoconfio += 1;
    Cantidad += 1;
    Total += 100;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadNoconfio", JSON.stringify(CantidadNoconfio));
    alert("Producto agregado exitosamente");
}
secomenta.onclick = function () {
    CantidadSecomenta += 1;
    Cantidad += 1;
    Total += 160;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadSecomenta", JSON.stringify(CantidadSecomenta));
    alert("Producto agregado exitosamente");
}
solitario.onclick = function () {
    CantidadSolitario += 1;
    Cantidad += 1;
    Total += 70;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadSolitario", JSON.stringify(CantidadSolitario));
    alert("Producto agregado exitosamente");
}

unavez.onclick = function () {
    CantidadUnavez += 1;
    Cantidad += 1;
    Total += 240;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadUnavez", JSON.stringify(CantidadUnavez));
    alert("Producto agregado exitosamente");
}
cadenas.onclick = function () {
    CantidadCadenas += 1;
    Cantidad += 1;
    Total += 120;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadCadenas", JSON.stringify(CantidadCadenas));
    alert("Producto agregado exitosamente");

}
irreal.onclick = function () {
    CantidadIrreal += 1;
    Cantidad += 1;
    Total += 140;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadIrreal", JSON.stringify(CantidadIrreal));
    alert("Producto agregado exitosamente");
}

cambios.onclick = function () {
    CantidadCambios += 1;
    Cantidad += 1;
    Total += 230;
    localStorage.setItem("TotalCarrito", JSON.stringify(Total));
    localStorage.setItem("Cantidad", JSON.stringify(Cantidad));
    localStorage.setItem("CantidadCambios", JSON.stringify(CantidadCambios));
    alert("Producto agregado exitosamente");
}




