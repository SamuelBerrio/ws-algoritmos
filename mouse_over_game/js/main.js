document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=30;
var puntosObjetivo=30;

function sumarPuntos(){
 puntos++;
 //En esta linea lo que se esta haciendo es sacando un numero random para posicionar la posicion de la pelota con respecto al margin Top
 let ranNum= Math.round(Math.random()*500);
 let ranNum2= Math.round(Math.random()*500);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum+"px";
 if(puntos==30){
     alert("ganaste");
 }
}

function restarTiempo(){
    tiempo--;
    document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+"/"+puntosObjetivo+"</b>";
    document.getElementById("time").innerHTML=" Tiempo:29"
    if(tiempo==0){
        alert("Perdiste!");
        tiempo=30;
        puntos=0;
    }
}

setInterval(restarTiempo,500);