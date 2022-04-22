//1. document.getElementById(id), Sirve para llamar un elemento "ID" del documento html.
//id="Id de html".
document.getElementById("Id del html");


//2. element.getElementsByTagName(name), Por medio de este método lo que se selecciona es una lista de nodos cuyo elemento es el especificado como parámetro; a cada uno de los nodos se le asigna un índice, de acuerdo al orden en el que aparecen en el marcado del documento.
document.getElementsByTagName("P");//Nos devolveria todos los parrafos del documento.
document.getElementsByTagName("p")[3];//Nos devolveria el parrafo numero 4.


//3. document.createElement(name), El método Document.createElement() crea un elemento HTML especificado por su tagName, o un  HTMLUnknownElement (en-US) si su tagName no se reconoce.
document.createElement("div");//Aqui se creo un elemento div en el documento.


//4. parentNode.appendChild(node), Por medio de appendChild podemos incluir en un nodo un nuevo hijo, de esta manera:
const parent = document.createElement('div');//Se crea un div en el documento.
const hijo = document.createElement('p');//Se crean 2 parrafos en el documento.
const hijo2 = document.createElement('p');
parent.append(hijo, hijo2, "Hola mundo"); //Trabaja bien.
parent.appendChild(hijo, hijo2, "Hola mundo");
// Funciona bien, pero agrega el primer elemento e ignora el resto


//5. element.innerHTML, La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.
const content = element.innerHTML;
element.innerHTML = htmlString;//La variable constante content contiene un DOMString que contiene el código HTML serializado describiendo todos los descendientes de element. Cuando se establece el valor de innerHTML, se eliminan todos los descendientes de element, analiza la cadena htmString y asigna los nodos resultantes como descendientes de element.


//6. element.style.left, La propiedad style.left establece o devuelve la posición left de un elemento posicionado. Esta propiedad especifica la posición left del elemento, incluido el relleno, la barra de desplazamiento, el padding y el margin.
document.getElementById("myBtn").style.left = "100px";//Digamos que se selecciono la id de un button id="myBtn".


//7. element.setAttribute, Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado. Para obtener el valor actual de un atributo, se utiliza getAttribute(); para eliminar un atributo, se llama a removeAttribute().
var b = document.createElement("button");
b.setAttribute("name", "helloButton");


//8. element.getAttribute, Devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "" (una cadena vacía); ver Notes para más detalles.
var div1 = document.getElementById("div1");
var align = div1.getAttribute("align");
alert(align); // Muestra el valor de la alineación(align) del elemento con id="div1".


//9. element.addEventListener, addEventListener() Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo  documento , una ventana o un  XMLHttpRequest. Para registrar más de un eventListener, puedes llamar addEventListener() para el mismo elemento pero con diferentes tipos de eventos o parámetros de captura.
// Function to change the content of t2
function modifyText() {
    var t2 = document.getElementById("t2");
    t2.firstChild.nodeValue = "three";
}

// Function to add event listener to t
function load() {
    var el = document.getElementById("t");
    el.addEventListener("click", modifyText, false);
}

document.addEventListener("DOMContentLoaded", load, false);


//10. window.scrollTo, Desplaza el visor a un conjunto específico de coodenadas en el documento.
window.scrollTo(0, 1000);


//11. setTimeOut, El método setTimeout() del mixin WindowOrWorkerGlobalScope establece un temporizador que ejecuta una función o una porción de código después de que transcurre un tiempo establecido.
var timeoutID;

function delayedAlert() {
    timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
    alert("That was really slow!");
}

function clearAlert() {
    window.clearTimeout(timeoutID);
}


//12. setInterval, Ejecuta una función o un fragmento de código de forma repetitiva cada vez que termina el periodo de tiempo determinado. Devuelve un ID de proceso.
var intervalID = window.setInterval(miFuncion, 500, 'Parametro 1', 'Parametro 2');

function miFuncion(a, b) {
    // Aquí va tu código
    // Los parámetros son opcionales completamente
    console.log(a);
    console.log(b);
}


//13. confirm, El método Window.confirm() muestra una ventana de diálogo con un mensaje opcional y dos botones, Aceptar y Cancelar.
if (window.confirm("Do you really want to leave?")) {
    window.open("exit.html", "Thanks for Visiting!");
}


//14. Arreglos: ForEach(), El método forEach() ejecuta la función indicada una vez por cada elemento del array.
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9