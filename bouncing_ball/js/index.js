var pos;
var vel;
var acl;
//bool to adjust friction
var friction;
//button to turn friciton on/off
var frictButton;

function setup(){
  createCanvas(600,400);
  
  pos = createVector(100, 100);
  vel = createVector(1.5, 2.1);
  acl = createVector(0, .2);
  
  friction = true;
}

function draw(){
  background(150);
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
  ellipse(pos.x,pos.y,40,40);
  
  //display info
  fill('blue');
  textSize(20);
  textFont("Ariel");
  //x info
  text("X Position: ",12,30);
  text(int(pos.x),105,30);
  text("X Velocity: ", 12,60);
  text(int(vel.x),110,60);
  text("X Acceleration: ",12,90);
  text(acl.x,140,90);
  //y info
  text("Y Position: ",180,30);
  text(int(height-pos.y),275,30);
  text("Y Velocity: ", 180,60);
  text(int(vel.y),280,60);
  text("Y Acceleration: ",180,90);
  text(9.8,310,90);
}
  
 /* frictButton = createButton("friction off");
  frictButton.mouseClicked(frict);
  frictButton.position(20,120);
  frictButton.class("sim-button blue");
}

function frict(){
  if(!friction){
    friction = true;
    loop();
    frictButton.html("friction off");
    return
  }
  
  if(friction){
    friction = false;
    noLoop();
    frictButton.html("friction on");
    return
  }
}
*/