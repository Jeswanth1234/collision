var fixedRect,movingRec;
var box1 ,box1Image,box2,box2Image
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  box1 = createSprite(400,200,100,70)
  box2 = createSprite(200,300,100,70)
  box1.shapeColor = ("yellow")
  box2.shapeColor = ("yellow")
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  drawSprites();
  collide(movingRect,box2)
  collide(movingRect,box1)
  collide(movingRect,fixedRect)
}
function collide(p1,p2){
if(p1.x-p2.x<p2.width/2+p1.width/2
  && p2.x-p1.x<p2.width/2+p1.width/2
  && p2.y-p1.y<p2.height/2+p1.height/2 
  && p1.y-p2.y<p2.height/2+p1.height/2)
  {p1.shapeColor="pink";
  p2.shapeColor="pink";

  
}
else{p1.shapeColor="green";
p2.shapeColor="green";

}
}