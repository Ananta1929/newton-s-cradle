
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1;
var bobObject2; 
var bobObject3 ;
var bobObject4 ;
var bobObject5 ;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 bobObject1 = new Bob(450,600,50);
	 bobObject2 = new Bob(400,600,50);
	 bobObject3 = new Bob(500,600,50);
	 bobObject4 = new Bob(550,600,50);
	 bobObject5 = new Bob(600,600,50);

	 roof = new Roof(500,100,500,20);

     rope1 =new rope(bobObject1.body,roof.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
    bobObject1.display();
    bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
  drawSprites();
 
}



