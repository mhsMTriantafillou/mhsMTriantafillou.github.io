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
  createCanvas(800,600);
  mySound.play();
}
function draw(){
  image(img, 500,500);
}
