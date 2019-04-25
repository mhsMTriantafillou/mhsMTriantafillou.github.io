let img;
let mySound;
function preload() {
//making apple
  img = loadImage('apple_PNG12423.png');
  mySound= loadSound('Biting Apple-SoundBible.com-415478302.mp3');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvase(800,600);
}
function draw(){
  image(img, width/2, height/2);
}
