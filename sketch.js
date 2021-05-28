
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	Visit=loadImage("visit.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	s=createSprite(500,300)
	s.addImage(Visit)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  
  drawSprites();
 
}



