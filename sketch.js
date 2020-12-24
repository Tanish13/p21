var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1300,400);


speed = random(223,321);

  thickness = random(22,83);

weight = random(30,52);

 wall =  createSprite(1200, 200, thickness, height/2);
 wall.shapeColor="grey";

 bullet = createSprite(50,200,50,8);
 bullet.velocityX = speed;
 bullet.shapeColor="skyBlue";


}

function draw() {
  background("black"); 

  function hasCollided(bullet,wall){
    bulletRightEdge= bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10){
      wall.shapeColor="red";
    }
  }


  drawSprites();
}

