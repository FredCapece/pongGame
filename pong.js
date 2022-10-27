//Ball variables
let xBall = 300;
let yBall = 200;
let diameter = 20;
let raid = diameter / 2;

//Ball's speed
let velXBall = 6;
let velYBall = 6;

//Racket's variables
let xRack = 5;
let yRack = 150;
let lenRack = 10;
let widRack = 90;

//Oponent's rackets variables
let xRackOp = 585;
let yRackOp = 150;
let velYOp;

let colision = false;

//Game Set
let points = 0;
let pointsOp = 0;

//function is group of codes that performs a specific task
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  borderColision();
  showRacket(xRack, yRack);
  showRacket(xRackOp, yRackOp);
  moveRacket();
  moveOpRacket();
  colisionRackBall(xRack, yRack);
  colisionRackBall(xRackOp, yRackOp);
  gamePoints();
  showPoints();
  ballStuck();
}

function showBall(){
  circle(xBall, yBall, diameter);
}

function moveBall(){
  xBall += velXBall;
  yBall += velYBall;
}

function borderColision(){
  if (xBall + raid > width || xBall - raid < 0) {
    velXBall *= -1;
  }
  if (yBall + raid > height || yBall - raid < 0) {
    velYBall *= -1;
  }
}

function showRacket(x, y){
  rect(x, y, lenRack, widRack);
}

function moveRacket(){
  if(keyIsDown(87)){
    if(yRack > 10){
      yRack -= 10;
    }
  }
  if(keyIsDown(83)){
    if(yRack < 300){
    yRack += 10;
    }
  }
}

function moveOpRacket(){
  if(keyIsDown(UP_ARROW)){
    if(yRackOp > 10){
      yRackOp -= 10;
    }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yRackOp < 300){
      yRackOp += 10;
    }
  }
}

function colisionRackBall(x, y){
  colision = collideRectCircle(x, y, lenRack, widRack, xBall, yBall, raid);
  if(colision){
    velXBall *= -1;
  }
}

function gamePoints(){
  textSize(16);
  stroke(255);
  textAlign(CENTER);
  fill(color(255, 70, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(points, 170, 26);
  fill(color(255, 70, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pointsOp, 470, 26);
}

function showPoints(){
  if(xBall > 590){
    points += 1;
    if(points == 10){
      alert("Jogador 1 ganhou!!")
      points = 0;
      pointsOp = 0;
    }
  }
  if(xBall < 10){
    pointsOp += 1;
    if(pointsOp == 10){
      alert("Jogador 2 ganhou!!")
      points = 0;
      pointsOp = 0;
    }
  }
}

function ballStuck(){
  if(xBall - raid < 0){
    xBall = 30;
  }
}