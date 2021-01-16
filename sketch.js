var box1, box2;

function setup() {

  createCanvas(1200,800);
  box1 = createSprite(600, 400, 30, 80);
  box1.shapeColor = "green";
  
  box2 = createSprite(300, 300, 30, 80);
  box2.shapeColor = "green";
  ob1 = createSprite(100, 100, 50, 50);
  ob1.shapeColor = "green";

  ob2 = createSprite(200, 100, 50, 50);
  ob2.shapeColor = "green";

  ob3 = createSprite(300, 100, 50, 50);
  ob3.shapeColor = "green";

  ob4 = createSprite(400, 100, 50, 50);
  ob4.shapeColor = "green";
   
  }
function draw() {

  background(255,255,255);  
  box2.x = World.mouseX;
  box2.y = World.mouseY;

bounceOff(box1, box2);

  drawSprites();
}

function bounceOff(box1, box2){
  if(box2.x-box1.x<box2.width/2+box1.width/2 && box1.x-box2.x<box2.width/2+box1.width/2)
  {
    box2.velocityX = box2.velocityX*(-1);
    box1.velocityX = box1.velocityX*(-1);
  }

if(box2.y-box1.y<box2.height/2+box1.height/2 && box1.y-box2.y<box2.height/2+box1.height/2){
  box2.velocityY = box2.velocityY*(-1);
  box1.velocityY = box1.velocityY*(-1);
}
}









