//position and size of the circle
posX=50;
posY=50;
let value = 50;
let x=100;
let y=100;

let xSpeed = 5;
let ySpeed = 5;

let size = 50;

function setup(){
createCanvas(800,600);

}

function draw(){
background(150);

textSize(25)
textFont('Georgia')
text('for this game we use the trust system',200,350);	
	
textSize(50);
textFont('Georgia');
text('Avoid the square',200,300);
bounce();
fill(0,0,255);
ellipse(posX,posY,75,75);

}

function keyPressed() {

	if (keyCode == RIGHT_ARROW) {
		posX += 20;
	}
	else if (keyCode == LEFT_ARROW) {
	posX -=20;
	}
	else if (keyCode == UP_ARROW) {
		posY -=20;
	}
	else if (keyCode == DOWN_ARROW) {
		posY +=20;
	}
return false;
}

function bounce(){

	noStroke();
	fill(225,0,0);
	rect(x,y,size,size);
	//move rectangle

	x = x+xSpeed;
	y = y+ySpeed;

	if (y+size>=height || y<=0) {
	ySpeed = ySpeed*(-1);

	}

	if (x+size>=width || x<=0) {
	xSpeed = xSpeed*(-1);
	fill(0);
	}



}
