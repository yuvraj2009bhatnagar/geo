
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,rur;
var ground,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
var stone1,iron1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(700,320,150,50);
	stone1 = new Stone(800,150,150,150)
iron1 = new Iron(400,110,100,50)
rur = new rubber(200,190,50)
ball1 = new sand(40,40,5)
ball2 = new sand(50,50,5)
ball3 = new sand(60,10,5)
ball4 = new sand(70,70,5)
ball5 = new sand(80,80,5)
ball6 = new sand(90,90,5)
ball7 = new sand(100,100,5)
ball8 = new sand(120,120,5)
ball9 = new sand(130,130,5)
ball10 = new sand(140,140,5)

	ground = new Ground(600,height,1200,20)
 stone1 = new Stone(800,150,150,150)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  



  box1.display();
ground.display();
stone1.display();
iron1.display();
rur.display();
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
ball8.display();
ball9.display();
ball10.display();


  drawSprites();
 
}



