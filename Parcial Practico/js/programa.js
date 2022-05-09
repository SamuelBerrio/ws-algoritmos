const boton0 = document.getElementById("0");
const boton1 = document.getElementById("1");
const boton2 = document.getElementById("2");
const boton3 = document.getElementById("3");
const ul = document.getElementById("ul");
//
let repeticiones = 0;
let estudiante = [];
let notas = [], lista = [], notas2 = [];
//
alert("Presione el boton (Iniciar registro de estudiantes)");
boton0.onclick = function () {
    repeticiones = prompt("Ingrese la cantidad de estudiantes que desea ingresar.");
    for (let i = 0; i < repeticiones; i++) {
        estudiante[i] = prompt("Ingrese el estudiante al que desea asignarle una nota").toUpperCase();
        notas[i] = prompt("Ingrese la nota de el estudiante " + estudiante[i]);
        notas2[i] = parseFloat(notas[i]);
        lista[i] = document.createElement("p");
        ul.append(lista[i], "Estudiante: " + estudiante[i] + "      Nota: " + notas[i]);
    }
}
//
boton1.onclick = function () {
    let cont = 0;
    let al = notas.length;
    maximum = notas[al - 1];
    while (al--) {
        if (notas[al] > maximum) {
            maximum = notas[al]
        }
    };

    for (let h = 0; h < notas.length; h++) {
        if (notas[h] == maximum) {
            cont++;
        };
    }
    alert("La nota mas alta es de " + maximum + " y " + cont + " Estudiantes obtuvieron esta nota");
}
//
boton2.onclick = function () {
    let estu = 0;
    let Bestu = prompt("Ingrese el estudiante que desea encontrar").toUpperCase();
    for (var j = 0; j < notas.length; j++) {
        if (estudiante[j] == Bestu) {
            alert("Estudiante: " + estudiante[j] + " Nota: " + notas[j]);
        };
    }
}
boton3.onclick = function () {
    let k = 0, prom = 0, suma = 0;
    while (k < notas.length) {
        suma += notas2[k++]
    }
    prom = suma / repeticiones;
    alert("El promedio de notas de los estudiantes es de: " + prom);
}