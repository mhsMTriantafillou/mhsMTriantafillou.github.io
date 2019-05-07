let x=0;
let y=100;
let size=50;
function setup(){
createCanvas(windowWidth,windowHeight);
background(255);
}

function draw(){
var x=0
for (var x=0; x<=width; x=x+50){

fill(0,random(255),0);
ellipse(x,random(windowWidth),size,size);



fill(random(255));
rect(x,random(windowWidth),size,size);


textSize(25);
fill(0);
text(char(random(255)),random(windowWidth),random(windowHeight));

}

}
