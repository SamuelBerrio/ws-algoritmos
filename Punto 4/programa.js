let carrito = 0;
let descuento = 0;
let descuentoTotal = 0;
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("compra");
const monto = document.getElementById("monto");
const boton6 = document.getElementById("descuento");
const descuent = document.getElementById("descuent");

let productos = [huevos = 15000, leche = 3500, pan = 2000, frutamix = 5000];
let num = 0;

boton1.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[0] + " $");
  carrito = carrito + productos[0];
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton2.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[1] + " $");
  carrito = carrito + productos[1];
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton3.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[2] + " $");
  carrito = carrito + productos[2];
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton4.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[3] + " $");
  carrito = carrito + productos[3];
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  if (carrito == descuentoTotal) {
    alert("Su compra fue de " + carrito + " $");
  } else {
    alert("Su compra fue de " + descuentoTotal + " $ (Descuento incluido)");
  }
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
}

function showCancel() {
  alert("Cancelaste la compra.");
}
boton5.onclick = function () {
  ask("¿Desea continuar la compra?", showOk, showCancel);
  carrito = 0;
}
boton6.onclick = function () {
  descuento = Math.floor((Math.random() * 99) + 1)
  alert("Su descuento aleatorio es del " + descuento + "%");
  descuentoTotal = carrito - (carrito * (descuento / 100));
  descuent.innerHTML = descuentoTotal + " $";
};