
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300, 300, 50);
	bob2 = new Bob(250, 300, 50);
	bob3 = new Bob(200, 300, 50);
	bob4 = new Bob(150, 300, 50);
	bob5 = new Bob(100, 300, 50);

	rope1 = new Rope(bob1.body, roofStructure.body, -50*2, 0);
	rope2 = new Rope(bob2.body, roofStructure.body, -50*2, 0);
	rope3 = new Rope(bob3.body, roofStructure.body, -50*2, 0);
	rope4 = new Rope(bob4.body, roofStructure.body, -50*2, 0);
	rope5 = new Rope(bob5.body, roofStructure.body, -50*2, 0);

	roofStructure = new Roof(205, 100, 300, 30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roofStructure.display();

  drawSprites();
 
}



