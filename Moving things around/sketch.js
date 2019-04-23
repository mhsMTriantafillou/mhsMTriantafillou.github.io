/* Moving things and staying on the canvas
Courtney Edwards
2018-09-01*/

//position variables
var posX= 100;
var posY = 100;
// speed variables
var speedX = 10;
var speedY = 10;

function setup() {
  var myCanvas = createCanvas(800, 600);
  frameRate(30);
}

function draw() {
background(0);
textSize(50)
 text('who is following who?', 110, 400)
fill(0,0,255);
stroke(0,0,255);
line(posX,posY,100,100);
//*rotateX(frameCount * 0.01);
//rotateY(frameCount * 0.01);
  rect(posX/2, posY, 100, 100);
  posX = posX + speedX;
  posY = posY + speedY;

  // New code for staying on the canvas
  if (posX > width) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }
}

function mouseClicked() {
  posX = mouseX;
  posY = mouseY;
  speedX = round(mouseX/100);
  speedY = round(mouseY/100);
}
