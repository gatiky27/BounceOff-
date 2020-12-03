var movingRect,movingRect1

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400,100,50,80);
  movingRect.shapeColor="green";
  movingRect1=createSprite(400,800,80,30);
  movingRect1.shapeColor="green";
  movingRect.velocityY=5
  movingRect1.velocityY=-5
}

function draw() {
  background(255,255,255);  
  if (movingRect.x-movingRect1.x < movingRect.width/2+movingRect1.width/2 && movingRect1.x-movingRect.x < movingRect1.width/2+movingRect.width/2 ){
movingRect.velocityX=movingRect.velocityX*(-1);
movingRect1.velocityX=movingRect1.velocityX*(-1);
  }
  if (movingRect.y-movingRect1.y < movingRect.width/2+movingRect1.width/2 && movingRect1.y-movingRect.y < movingRect1.width/2+movingRect.width/2 ){
    movingRect.velocityY=movingRect.velocityY*(-1);
    movingRect1.velocityY=movingRect1.velocityY*(-1);
  }
  drawSprites();
}