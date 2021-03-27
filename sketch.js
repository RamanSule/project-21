var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);


speed=random(223,321)

weight=random(30,52)

thickness=random(22,83)


bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color(255);


wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)


car= createSprite(500,200,50,50);

car.velocityX=speed;
}


function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}

if (hasCollided(bullet,wall))
{
  bullet.velocityX=0;
   var damage=0.5*bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness)

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0)
  }



  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
}


function draw() {
  background(255,255,255);
  car = createSprite(500,200,50,50);
  wall = createSprite(1500,200,60,height/2)
  if (wall.x=car.x<(car.width*wall.width)/2)  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180){
      car.shapeColor="red";
    }
    if (deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }
    if (deformation<100){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}