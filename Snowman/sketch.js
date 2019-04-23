function setup() {
  // put setup code here
  createCanvas(800,600);
  background(135,206,235);

}

function draw() {
  let  s= 155;

  // making the circles
ellipse(s+150,s+300,s+100);
ellipse(s+150, s+150, s+60);
ellipse(s+150,s,s+25);
//making snowmans nose
triangle(s+160,s+160,s+140,s+140,s+150,s+150);

}
