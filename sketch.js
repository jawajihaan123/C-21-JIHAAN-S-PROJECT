var bullet,wall, bulletSpeed, bulletWeight,thickness;


function setup() {
  createCanvas(1600,400);
  
 
  bullet=createSprite(40, 200, 50, 10);
  bulletWeight=random(30,52);
  bulletSpeed=random(223,321);
  wall=createSprite(1250,200,thickness,height/2);
 wall.shapeColor=color(80,80,80)
bullet.velocityX=bulletSpeed;



}

function draw() {
  background(0); 
 
 thickness=random(25,80);
bullet.collide(wall) ;
wall.x-bullet.x<(bullet.width+wall.width)/2;
  wall.setCollider("rectangle");

  bullet.setCollider("rectangle");


if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;
   var damage=0.5 * bulletWeight * bulletSpeed * bulletSpeed / (wall.width*wall.width*wall.width);
  console.log(damage);

}
if(damage<10){
  bullet.shapeColor=color(0,255,0);
}
if(damage>10){
  bullet.shapeColor=color(255,0,0);
}





  drawSprites();
}