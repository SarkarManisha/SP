const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  helicopter, package_1,packageIMG;
var packageBody,ground,engine,world;
var log1,log2,log3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world
	helicopter = new Helicopter(400,200);
	package_1 = new Package(400,200,70,70);
	log1 = new Log(320,622,300,PI);
	log2 = new Log(500,622,300,PI);
	log3 = new Log(410,height,160,PI/2);
}

function draw() {
  background(0);
	Engine.update(engine);
	package_1.display();
	helicopter.display();
	log1.display();
	log2.display();
	log3.display();
}

function keyPressed() {
	if (keyCode === 32) {
	  Matter.Body.setStatic(package_1.body,false);
	}
	if(keyCode === LEFT_ARROW){    
		translation={x:-20,y:0}
		Matter.Body.translate(package_1.body, translation)
		Matter.Body.translate(helicopter.body, translation)
	}
	if(keyCode === RIGHT_ARROW){    
		translation={x:20,y:0}
		Matter.Body.translate(package_1.body, translation)
		Matter.Body.translate(helicopter.body, translation)
	}
 }