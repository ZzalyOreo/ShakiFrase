function preload() {
}

function setup() {
  canvas = createCanvas(640, 450);
  video = createCapture(VIDEO);
  video.hide();
  color = "#3E8FC8";
  texto = "";
}

function draw() {
  image(video, 0, 0, 640, 450);
  tint(color);
  textSize(38);
  fill(255,255,255);
  stroke(0,0,0);
  text(texto, 10, 300, 640, 150)
  textAlign(CENTER);
}

function cambiarFiltro(){
  color = document.getElementById("color").value;
}

function cambiarTexto(){
  texto = document.getElementById("texto").value;
}

function tomarFoto(){
  save("ShakiFrase.png");
}
