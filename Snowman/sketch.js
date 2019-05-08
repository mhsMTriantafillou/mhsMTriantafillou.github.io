//Global Variables
let  s= 155;


function setup() {
  // put setup code here
  createCanvas(800,600);
  background(135,206,235);

}

function draw() {
// making the circles

  ellipse(s+150,s+300,s+100);
  ellipse(s+150, s+150, s+60);
  ellipse(s+150,s,s+25);
//making snowmans arms
  line(250,325,100,250);
  line(350,325,500,250);

}
