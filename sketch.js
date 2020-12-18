var thickness,wall;
var bullet,speed,weight;




function setup() {
 createCanvas(1600,400);

 thickness = random (22,83);
 speed = random (55.90);
 weight = random (400,1500);

 bullet = createCanvas(50,200,50,50);

 wall = createSprite(1500,200,60,thickness,height/2);

 bullet.velocityX= random(55,90);

}

function draw() {
  background("white");
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){

 bullet.velocityX=0;
 var deformation=0.5 *weight*speed*speed/22509;
 if(deformation>180){

 
  
 }

 if(deformation<180 && deformation>100){

  bullet.shapeColor="green";

 }

if(deformation<100){

bullet.shapeColor="yellow";

}

  }

if(hasCollided(bullet,wall)){

bullet.velocityX=0;
var damage = 0.5*speed*speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor=red(255,0,0);
}
if(damage<10){

  wall.shapeColor=green(0,255,0);
}

}
hasCollided();
  drawSprites();
}

function hasCollided(bullet,wall){

bulletRightEdge = bullet.x+ bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge)
{

  return true
}
return false;

}


