/*
House Assignment
Created by Maki
March 18, 2019
*/

function setup() {
  // put setup code here
//Create the canvas
createCanvas(800,600);
background(135,206,235)
}

function draw() {
// put drawing code here
// set the width of the house
// change thyis variable to scale the house
let scale= 1;
let houseWidth = 350;
let rectWidth = 200
let rectHeight =300
let refX = width/2-rectWidth/2;
let refY = height-rectHeight

//ground
fill(0,100,0);
rect(0, height/2+rectHeight/2, 800, 400);
//Main part of the house
fill(240,288,196);
rect(refX, refY, houseWidth, houseWidth/2);
//Roof of house
fill(77,30,4);
triangle(refX, refY, width/2+rectWidth/2.5, refY-rectHeight/2, refX+houseWidth, refY);
//Sky
fill(255);
noStroke();
ellipse(250,80,75);
ellipse(250,28,75);
ellipse(200,55,75);
ellipse(300,55,75);
fill(255);
noStroke();
ellipse(50,80,75);
ellipse(50,28,75);
ellipse(0,55,75);
ellipse(100,55,75);

fill(238,232,0);
ellipse(800,0,150);
//Door and windows
stroke(6,6,6)
fill(77,30,4);
rect(refX/3+houseWidth-5, 373, 60, 100);

}
