let carrito;
let comprar = false;
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementsByClassName("compra");
let productos = [huevos = 15000, leche = 3500, pan = 2000, frutamix = 5000]

while (comprar == false) {
  boton1.onclick = function (carrito) {
    alert("Usted ha agregado este producto al carrito por un total de " + productos[0] + " $");
    carrito = carrito + productos[0];
  }
  boton2.onclick = function (carrito) {
    alert("Usted ha agregado este producto al carrito por un total de " + productos[1] + " $");
    carrito = carrito + productos[1];
  }
  boton3.onclick = function (carrito) {
    alert("Usted ha agregado este producto al carrito por un total de " + productos[2] + " $");
    carrito = carrito + productos[2];
  }
  boton4.onclick = function (carrito) {
    alert("Usted ha agregado este producto al carrito por un total de " + productos[3] + " $");
    carrito = carrito + productos[3];
  }
  boton5.onclick = function (comprar) {
    alert("Compra exitosa por " + carrito);
    comprar = true;
  }

};