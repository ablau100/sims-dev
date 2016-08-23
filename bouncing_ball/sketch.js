/*
Things to add:
friction on/off button
pause/play button
restart button
format numbers better/accuracy
work on design
maybe add grid?
*/

var pos;
var vel;
var acl;
//bool to adjust friction
var friction, paused;
//button to turn friciton on/off
var frictButton, playButton, restartButton;

function setup(){
  createCanvas(600,400);
  
  pos = createVector(100, 100);
  vel = createVector(1.5, 2.1);
  acl = createVector(0, .2);
  
  friction = true;
  paused = false;
  
  frictButton = createButton('friction off');
  frictButton.position(20,120);
  frictButton.mousePressed(frict);
  //frictButton.class("sims-button blue");
  playButton = createButton('pause');
  playButton.position(100,120);
  playButton.mousePressed(playPause);
  restartButton = createButton('restart');
  restartButton.position(160,120);
  restartButton.mousePressed(restart);
}
function frict(){
  if(!friction){
    friction = true;
    frictButton.html('friction off');
    noLoop();
    return
  }
  
  else {
    friction = false;
    frictButton.html('friction on');
    loop();
    return
  }
}

function playPause(){
  if(!paused){
    paused = true;
    playButton.html('play');
    noLoop();
    return;
  }
  else {
    paused = false;
    playButton.html('pause');
    loop();
    return;
  }
}

function restart(){
  pos.x = 100;
  pos.y = 100;
  vel.x = 1.5;
  vel.y = 2.1;
}

function draw(){
  background(150);
  //frameRate(100);
  
  //change position
  pos.add(vel);
  //cahnge velocity
  vel.add(acl);
  
  //boundry check
  if(pos.x>width||pos.x<0)
    vel.x *= -1;
  if(pos.y>height||pos.y<0){
    if(friction) 
      vel.y *= -.95;
    else 
      vel.y *= -1;
    pos.y = height;
  }
    
  //diplay ball
  fill('blue');
  ellipse(pos.x,pos.y,40,40);
  
  //display info
  fill('blue');
  textSize(20);
  textFont("Ariel");
  //x info
  text("X Position: ",12,30);
  text(int(pos.x/10),105,30);
  text("m", 130,30);
  text("X Velocity: ", 12,60);
  text(int(vel.x)+".0",110,60);
  text("m/s", 145,60);
  text("X Acceleration: ",12,90);
  text(acl.x+".0",140,90);
  text("m/s", 168,90);
  textSize(10);
  text("2", 196,83);
  //y info
  textSize(20);
  text("Y Position: ",220,30);
  text(int((height-pos.y)/10),315,30);
  text("m", 342,30);
  text("Y Velocity: ", 220,60);
  text(-int(vel.y),318,60);
  text("m/s", 347,60);
  text("Y Acceleration: ",220,90);
  text(-9.8,350,90);
  text("m/s", 385,90);
  textSize(10);
  text("2", 416,83);
  
}

function frict(){
  if(!friction){
    friction = true;
    frictButton.html('friction off');
   // noLoop();
   // return
  }
  
  else {
    friction = false;
    frictButton.html('friction on');
   // loop();
   // return
  }
}

function playp(){
  if(!paused){
    paused = true;
    playButton.html('play');
    noLoop();
    return;
  }
  else {
    paused = false;
    playButton.html('pause');
    loop();
    return;
  }
}
