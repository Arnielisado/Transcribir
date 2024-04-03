x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
    if(content=="círculo"){
        draw_circle = true;
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se va a dibujar un círculo";
    }
    if(content=="rectángulo"){
        draw_rect = true;
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se va a dibujar un rectángulo";
    }
}
function setup(){
    var canvas= createCanvas(900, 600);
}
function draw(){
    if(draw_circle){
        var tamaño= Math.floor(Math.random() * 100);
        circle(x,y,tamaño);
        document.getElementById("status").innerHTML = "Se dibujo un círculo";
        draw_circle=false;
    }
    if(draw_rect){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Se dibujo un rectángulo";
        draw_rect=false;
    }
}