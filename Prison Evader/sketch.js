//Global Variables

let level = 0;

//assume objects have not collided

let ballX=805
let ballY=20
let followMouse = false
//Sounds and images
let police;
let prison;
let character;
let secondary;
let key;

function preload(){
police=loadImage('police.png')
prison=loadImage('prison.png')
character=loadImage('character.png')
secondary=loadImage('secondary.png')
key=loadImage('key.png')
}

function setup(){
createCanvas(windowWidth,windowHeight);

}//end of function setup

function draw(){
//decision stucture
if(keyIsDown(49)){
level=4
}
if(keyIsDown(50)){
level=5
}
if(keyIsDown(51)){
level=6
}



//Scene I

if (level === 0) {

    background(100,100,100);
    image(police,350,300);
    textSize(35)
    text('You have the right to remain silent.',325,100);
    textSize(35)
    text(' Anything you say can and will be used against you in a court of law',75,200);
    textSize(20)
    text('press ENTER to continue',950, 800);



}

//Scene II

  else if (level === 1) {

    background(100,100,100);
    textSize(45);
    text('You have been framed for murder', 300,100);
    textSize(45);
    text('and sentenced to life in prison.', 330,180);
    image(prison,370,300);
    textSize(20)
    text('press ENTER to continue',950,800);


}
//Scene III
  else if (level === 2){
    background(100,100,100);
    textSize(40)
    text('To escape prison solve the following riddles',225,300);
    textSize(40)
    text('and games good luck :)',375,400);
    textSize(20)
    text('press ENTER to continue',950,800);


}
//Scene IIII
  else if (level === 3){
    background(100,100,100);
    textSize(40)
    text('A man pushed his car past a hotel, only to realize he was bankrupt.',50,250);
    textSize(40)
    text('How did he figure this out?',325,300);
    textSize(20)
    text('1) He was mugged as he pushed the car into the parking lot',100,400);
    text('2) His pockets were empty',100,550);
    text('3) He was playing a board game', 100, 700)

}
  else if (level === 4){
    background(255,0,0);
    textSize(40)
    text('You have been caught!',350,300);
}
  else if (level === 5){
    background(255,0,0);
    textSize(40)
    text('You have been caught!',350,300);
}
  else if (level === 6){

    if (keyCode===32){
      followMouse===true
      ballX = mouseX
      ballY = mouseY
    }
print(level ===6)
print(followMouse)

    background(100,100,100)
    textSize(20)
    text('Congratulations you have fooled a few guards more work to come.',100,100);
    //---------------Creating Maze--------------------
    noStroke();
    fill(255);
    rect(800,0, 50,200);
    rect(800,200,400,50);
    rect(800,200,50,200);
    rect(500,200,450,50);
    rect(800,400,150,50);
    rect(910,200,50,230);
    image(secondary,1175,150,100,100);
    rect(500,200,50,400);
    rect(100,400,600,50);
    image(secondary,675,350,100,100);
    rect(100,400,50,200);
    rect(30,400,75,50);
    rect(30,200,50,230);
    rect(30,200,300,50);
    image(secondary,475,610,100,100);
    image(secondary,75,610,100,100);
    rect(300,200,50,600)
    image(secondary,290,800,100,100);
    rect(300,600,170,50);
    rect(430,600,50,150);
    rect(430,750,400,50);
    image(secondary,820,700,100,100)
    rect(700,600,50,175);
    rect(700,600,300,50);
    image(key,900,580,75,75);
    noCursor()
    image(character,ballX,ballY,30,30);
   
}



else if(level=== 7){
  clear()
  background(100,100,100);
  textSize(20)
  text('Great job you got the guards key',50,50);
  text('Get to the door it will take you outside',50,75);
  fill(255);
  rect(800,0,50,200);
  rect(800,)
}
}

function keyPressed() {
//this makes enter change for each level
  if (keyCode === 13){
      level+=1
}
}
