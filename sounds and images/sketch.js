let img;
let song;
function preload() {
//making apple
  img = loadImage('apple_PNG1234.png');
  song= loadSound('Apple_Bite-Simon_Craggs-168364397.mp3');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  image(img, 0, 0);
 song.setVolume(0.1)
 sound.play();
}
