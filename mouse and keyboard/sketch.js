
//global variables
let value = 0;
let x=100;
let y=100;

let xSpeed = 5;
let ySpeed = 5;

let size = 50;
function setup(){
createCanvas(windowWidth,windowHeight);
fill(0,255,0);
}

function draw(){
  textSize(100)
  text('Hold mouse for circles :)', 150, 400)
if (mouseIsPressed) {
if (x<=width){
  ellipse(mouseX, mouseY, 50, 50);
}
}
}
//made rainbow squares
function mouseMoved() {

  if (x<=width) {
rect(mouseX,mouseY, size/2,size/2);

noStroke();
fill(random(255),random(255),random(255));

  }

}
