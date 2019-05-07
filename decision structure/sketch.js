//global variables
let choices = ['Rock','Paper','Scissors']
let cpuChoice;
let keyPress = false;

//images
let rock;
let scissors;
let paper;
let choose;
let p;
let r;
let s;
let tic;
let score;
let moana;
function preload(){
rock=loadImage('rock.png');
scissors=loadImage('scissors.png')
paper=loadImage('paper.png')
choose=loadImage('choose.png')
p=loadImage('P.png')
r=loadImage('R.png')
s=loadImage('S.png')
tic=loadImage('tic.png')
score=loadImage('score.png')
moana=loadImage('moana.png')
sad=loadImage('sad.png')
}
function setup(){
createCanvas(windowWidth,windowHeight);
background(155);

}

function draw(){
  if (keyPress === false) {
    background(155);
    image(rock,100,100,250,250);
    image(scissors,500,100,250,250);
    image(paper,900,100,250,250);
    image(choose,300,550,600,100);
    image(p,975,350,100,100);
    image(r,150,350,100,100);
    image(s,565,350,100,100);
  }
}


function keyPressed(){
  //Options if you choose Rock
  cpuChoice= random(choices);
  print("cpuChoice:",cpuChoice)

  if (keyCode === 82){
    keyPress = true;
    print("User Choice:",'Rock');
    if (cpuChoice === 'Rock'){
      background(155);
      textSize(50);
      textFont('Georgia')
      text('I guess nobody wins',300,500);
      image(tic,500,600,200,200);
      image(score,700,100,300,300);
   }
    else if (cpuChoice === 'Paper'){
      background(255,0,0);
      textSize(50);
      textFont('Georgia');
      text('YOU LOSE!', 300,300);
    image(sad,400,500,300,300);
  }
 else if(cpuChoice=== 'Scissors'){
background(0,255,0);
textSize(50);
textFont('Georgia');
text('winner winner chicken dinner',300,300);
image(moana,200,550,700,700);
 }

  }
  if (keyCode === 80){
    keyPress = true;
    print("User Choice:",'Paper');
    if (cpuChoice === 'Paper'){
      background(155);
      textSize(50);
      textFont('Georgia')
      text('I guess nobody wins',300,500);
      image(tic,500,600,200,200);
      image(score,700,100,300,300);
   }
    else if (cpuChoice === 'Scissors'){
      background(255,0,0);
      textSize(50);
      textFont('Georgia');
      text('YOU LOSE!', 300,300);
    image(sad,400,500,300,300);
  }
  else if(cpuChoice=== 'Rock'){
  background(0,255,0);
  textSize(50);
  textFont('Georgia');
  text('winner winner chicken dinner',300,300);
  image(moana,200,550,700,700);

}
}
if (keyCode === 83){
  keyPress = true;
  print("User Choice:",'Scissors');
  if (cpuChoice === 'Scissors'){
    background(155);
    textSize(50);
    textFont('Georgia')
    text('I guess nobody wins',300,500);
    image(tic,500,600,200,200);
    image(score,700,100,300,300);
 }
  else if (cpuChoice === 'Rock'){
    background(255,0,0);
    textSize(50);
    textFont('Georgia');
    text('YOU LOSE!', 300,300);
  image(sad,400,500,300,300);
}
else if(cpuChoice=== 'Paper'){
background(0,255,0);
textSize(50);
textFont('Georgia');
text('winner winner chicken dinner',300,300);
image(moana,200,550,700,700);
}
}
}
