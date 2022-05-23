//Base de datos LocalStorage Iniciacion
let baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
if (baseDatosLocal != null) {
    llenartabla();
} else {
    baseDatosLocal = [];
}
//Creacion de Objeto y Agregar
function capturar() {
    function Producto(categoria, producto, cantidad, valor) {
        this.categoria = categoria;
        this.producto = producto;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    var categoriaCapturar = document.getElementById("select").value;
    var productoCapturar = document.getElementById("producto").value;
    var cantidadCapturar = document.getElementById("cantidad").value;
    var valorCapturar = document.getElementById("valor").value;
    //Creo el array con los datos ingresados por el usuario
    if (productoCapturar == "" || cantidadCapturar == "" || valorCapturar == "") {
        alert("Complete los campos solicitados para el registro");
    } else {
        nuevoProducto = new Producto(categoriaCapturar, productoCapturar, cantidadCapturar, valorCapturar);
        agregar();
    }

}
//Creacion de Objeto y Agregar incio
function capturar2() {
    function Producto(categoria, producto, cantidad, valor) {
        this.categoria = categoria;
        this.producto = producto;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    var categoriaCapturar = document.getElementById("select").value;
    var productoCapturar = document.getElementById("producto").value;
    var cantidadCapturar = document.getElementById("cantidad").value;
    var valorCapturar = document.getElementById("valor").value;
    //Creo el array con los datos ingresados por el usuario
    if (productoCapturar == "" || cantidadCapturar == "" || valorCapturar == "") {
        alert("Complete los campos solicitados para el registro");
    } else {
        nuevoProducto = new Producto(categoriaCapturar, productoCapturar, cantidadCapturar, valorCapturar);
        console.log(nuevoProducto);
        agregarI();
        document.getElementById("select").value == "";
        document.getElementById("producto").value = "";
        document.getElementById("cantidad").value = "";
        document.getElementById("valor").value = "";
    }

}
//Agregar al final
function agregar() {
    baseDatosLocal.push(nuevoProducto);
    localStorage.setItem("baseDatosLocal", JSON.stringify(baseDatosLocal));
    console.log(baseDatosLocal);
    let tbody = document.createElement("tbody");
    tbody.classList.add("tbodys");
    tbody.innerHTML += '<td>' + nuevoProducto.categoria + '</td><td>' + nuevoProducto.producto + '</td><td>' + nuevoProducto.cantidad + '</td><td>$ ' + nuevoProducto.valor + '</td>';
    document.getElementById("tabla").insertAdjacentElement("beforeend", tbody);

    document.getElementById("select").value == "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("valor").value = "";
}
//Agregar al inicio
function agregarI() {
    baseDatosLocal.unshift(nuevoProducto);
    localStorage.setItem("baseDatosLocal", JSON.stringify(baseDatosLocal));
    console.log(baseDatosLocal);
    let tbody = document.createElement("tbody");
    tbody.classList.add("tbodys");
    tbody.innerHTML += '<td>' + nuevoProducto.categoria + '</td><td>' + nuevoProducto.producto + '</td><td>' + nuevoProducto.cantidad + '</td><td>$ ' + nuevoProducto.valor + '</td>';
    document.getElementById("tabla").insertAdjacentElement("afterbegin", tbody);

    document.getElementById("select").value == "Categoria";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("valor").value = "";
}
//Buscar Producto
function buscar() {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let buscadorCapturar = document.getElementById("buscador").value;
    let band = false;
    for (let i of baseDatosLocal) {
        if (i.producto == buscadorCapturar && band == false) {
            alert("Se encontro " + buscadorCapturar + " con " + i.cantidad + " existencias");
            band = true;
            document.getElementById("buscador").value = "";
        }
    }
    if (band == false) {
        alert("No se encontro el producto");
        document.getElementById("buscador").value = "";
    }
}
//Cuantos Productos hay por categoria
const boton1 = document.getElementById("IPC");
boton1.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let contT = 0;
    let contA = 0;
    let contR = 0;
    for (let u of baseDatosLocal) {
        if (u.categoria == "Tecnologia") {
            contT++;
        } else if (u.categoria == "Alimentos") {
            contA++;
        } else if (u.categoria == "Ropa") {
            contR++;
        }
    }
    alert("Tecnologia: " + contT + "   Alimentos: " + contA + "   Ropa: " + contR);
}
//Informar la cantidad total de productos
const boton2 = document.getElementById("ICP");
boton2.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let total = 0;
    for (let h of baseDatosLocal) {
        total = total + parseInt(h.cantidad);
    }
    alert("La cantidad de productos es de " + total);
}
//Informar el valor total de todos los productos que hay en la tienda
const boton3 = document.getElementById("IVP");
boton3.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let total = 0;
    for (let h of baseDatosLocal) {
        total = total + parseInt(h.valor);
    }
    alert("El valor total es de $ " + total);
}
//Ordenar lista alfabeticamente
const boton4 = document.getElementById("OA");
boton4.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    baseDatosLocal.sort((a, b) => {
        const productoA = a.producto.toLowerCase();
        const productoB = b.producto.toLowerCase();
        if (productoA < productoB) {
            return -1;
        }
        if (productoA > productoB) {
            return 1;
        }
        return 0;
    })
    localStorage.setItem("baseDatosLocal", JSON.stringify(baseDatosLocal));
    EliminarFilas();
    llenartabla();
}
//Eliminar todas las filas
function EliminarFilas() {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    const tabl = document.getElementById("tabla");
    for (let a of baseDatosLocal) {
        var item = tabl.querySelector('.tbodys');
        tabl.removeChild(item);
    }
}
//Llenas tabla con baseDatosLocal
function llenartabla() {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    for (let g of baseDatosLocal) {
        let tbody = document.createElement("tbody");
        tbody.classList.add("tbodys");
        tbody.innerHTML += '<td>' + g.categoria + '</td><td>' + g.producto + '</td><td>' + g.cantidad + '</td><td>$ ' + g.valor + '</td>';
        document.getElementById("tabla").insertAdjacentElement("beforeend", tbody);
    }
}
//Editar Existencia
const boton5 = document.getElementById("EE");
boton5.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let productoEdit = prompt("Ingrese el producto que desa editar");
    let band = false;
    for (let i of baseDatosLocal) {
        if (i.producto == productoEdit && band == false) {
            alert("Se encontro " + productoEdit + " con " + i.cantidad + " existencias");
            let edicion = prompt("Ingrese el nuevo numero de existencias");
            i.cantidad = edicion;
            localStorage.setItem("baseDatosLocal", JSON.stringify(baseDatosLocal));
            EliminarFilas();
            llenartabla();
            band = true;
        }
    }
    if (band == false) {
        alert("No se encontro el producto");
    }
}
//Eliminar producto
const boton6 = document.getElementById("EP");
boton6.onclick = function () {
    baseDatosLocal = JSON.parse(localStorage.getItem("baseDatosLocal"));
    let productoBorrar = prompt("Ingrese el producto que desea eliminar");
    let band = false;
    for (let i of baseDatosLocal) {
        if (i.producto == productoBorrar && band == false) {
            EliminarFilas();
            baseDatosLocal = baseDatosLocal.filter((item) => item.producto !== productoBorrar);
            localStorage.setItem("baseDatosLocal", JSON.stringify(baseDatosLocal));
            llenartabla();
            band = true;
        }
    }
    if (band == false) {
        alert("No se encontro el producto que desea eliminar");
    }
}


