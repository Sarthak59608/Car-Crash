var car;
var wall;
var road;

 function setup()
  {
     createCanvas(800,400); 
    road = createSprite(400,200,800,120);
    wall = createSprite(370,250,30,60);
    car  = createSprite(50,250,40,40);
    
  }
    function draw() 
   {
  background("black");
  road.shapeColour("black");
    wall.shapeColour("gray");
    car.shapeColour("white");
  drawSprites();
 }
