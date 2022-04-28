//Botones para añadir al carrito
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("compra");
const boton6 = document.getElementById("descuento");
const boton7 = document.getElementById("Rproductos");
//Monto total y con descuento
const monto = document.getElementById("monto");
const descuent = document.getElementById("descuent");
//Cantidad de producto
const Chuevos = document.getElementById("huevos");
const Cleche = document.getElementById("leche");
const Cpan = document.getElementById("pan");
const Cfruta = document.getElementById("fruta");
//Precio producto
const Phuevos = document.getElementById("huevos2");
const Pleche = document.getElementById("leche2");
const Ppan = document.getElementById("pan2");
const Pfruta = document.getElementById("fruta2");
//Agregar productos y Quitar productos
const Mhuevos = document.getElementById("Mhuevos");
const mhuevos = document.getElementById("mhuevos");
const Mleche = document.getElementById("Mleche");
const mleche = document.getElementById("mleche");
const Mpan = document.getElementById("Mpan");
const mpan = document.getElementById("mpan");
const Mfruta = document.getElementById("Mfruta");
const mfruta = document.getElementById("mfruta");
//Variables usadas
let carrito = 0;
let descuento = 0;
let descuentoTotal = 0;
let num = 0;
let productos = [huevos = 15000, leche = 3500, pan = 2000, frutamix = 5000];
let Cproductos = [1, 1, 1, 1];//30,20,50,50
//Funciones añadir al carrito
boton1.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[0] + " $");
  carrito = carrito + (productos[0] * Cproductos[0]);
  descuentoTotal = carrito;
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton2.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[1] + " $");
  carrito = carrito + (productos[1] * Cproductos[1]);
  descuentoTotal = carrito;
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton3.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[2] + " $");
  carrito = carrito + (productos[2] * Cproductos[2]);
  descuentoTotal = carrito;
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
boton4.onclick = function () {
  alert("Usted ha agregado este producto al carrito por un total de " + productos[3] + " $");
  carrito = carrito + (productos[3] * Cproductos[3]);
  descuentoTotal = carrito;
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
};
//Confirmar compra
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  if (descuentoTotal == carrito) {
    alert("Su compra fue de " + carrito + " $");
  } else {
    alert("Su compra fue de " + descuentoTotal + " $ (Descuento incluido)");
  }
}
function showCancel() {
  alert("Cancelaste la compra.");
}
boton5.onclick = function () {
  ask("¿Desea continuar la compra?", showOk, showCancel);
  descuento = 0;
  carrito = 0;
  descuentoTotal = 0;
  monto.innerHTML = carrito + " $";
  descuent.innerHTML = carrito + " $";
}
//Descuento
boton6.onclick = function () {
  if (descuento == 0) {
    descuento = Math.floor((Math.random() * 99) + 1)
    alert("Su descuento aleatorio es del " + descuento + "%");
    descuentoTotal = carrito - (carrito * (descuento / 100));
    descuent.innerHTML = descuentoTotal + " $";
  } else {
    alert("Ya se reclamo el descuento...");
  }
};
//Reiniciar valores de Unidades y Precio
boton7.onclick = function () {
  Cproductos[0] = 1;
  productos[0] = 15000;
  Cproductos[1] = 1;
  productos[1] = 3500;
  Cproductos[2] = 1;
  productos[2] = 2000;
  Cproductos[3] = 1;
  productos[3] = 5000;
  Chuevos.innerHTML = Cproductos[0];
  Phuevos.innerHTML = productos[0];
  Cleche.innerHTML = Cproductos[1];
  Pleche.innerHTML = productos[1];
  Cpan.innerHTML = Cproductos[2];
  Ppan.innerHTML = productos[2];
  Cfruta.innerHTML = Cproductos[3];
  Pfruta.innerHTML = productos[3];
}
//Agregar o Quitar productos
Mhuevos.onclick = function () {
  productos[0] = productos[0] + 15000;
  Cproductos[0] = Cproductos[0] + 30;
  Chuevos.innerHTML = Cproductos[0];
  Phuevos.innerHTML = productos[0];
}
mhuevos.onclick = function () {
  if (productos[0] > 0) {
    productos[0] = productos[0] - 15000;
    Cproductos[0] = Cproductos[0] - 30;
  } else {
    alert("no puedes restar mas");
  }
  Chuevos.innerHTML = Cproductos[0];
  Phuevos.innerHTML = productos[0];
}
Mleche.onclick = function () {
  productos[1] = productos[1] + 3500;
  Cproductos[1] = Cproductos[1] + 20;
  Cleche.innerHTML = Cproductos[1];
  Pleche.innerHTML = productos[1];
}
mleche.onclick = function () {
  if (productos[1] > 0) {
    productos[1] = productos[1] - 3500;
    Cproductos[1] = Cproductos[1] - 20;
  }
  Cleche.innerHTML = Cproductos[1];
  Pleche.innerHTML = productos[1];
}
Mpan.onclick = function () {
  productos[2] = productos[2] + 2000;
  Cproductos[2] = Cproductos[2] + 50;
  Cpan.innerHTML = Cproductos[2];
  Ppan.innerHTML = productos[2];
}
mpan.onclick = function () {
  if (productos[2] > 0) {
    productos[2] = productos[2] - 2000;
    Cproductos[2] = Cproductos[2] - 50;
  }
  Cpan.innerHTML = Cproductos[2];
  Ppan.innerHTML = productos[2];
}
Mfruta.onclick = function () {
  productos[3] = productos[3] + 5000;
  Cproductos[3] = Cproductos[3] + 50;
  Cfruta.innerHTML = Cproductos[3];
  Pfruta.innerHTML = productos[3];
}
mfruta.onclick = function () {
  if (productos[3] > 0) {
    productos[3] = productos[3] - 5000;
    Cproductos[3] = Cproductos[3] - 50;
  }
  Cfruta.innerHTML = Cproductos[3];
  Pfruta.innerHTML = productos[3];
}