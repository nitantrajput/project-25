
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , box1 , box2 , box3 , paper1;
var paperImg, dustbinImg;

function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}
function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(width/2,height-30,width,20);
	box1 = new Dustbin(650,height-40,100,20);
	box2 = new Dustbin(650-60,height-80,20,100);
	box3 = new Dustbin(650+60,height-80,20,100);
	paper1 = new Paper(150,300,50);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(290);
  imageMode (CENTER)
  ground.display();
  image(paperImg,paper1.body.position.x,paper1.body.position.y,70,70)
  image(dustbinImg,650,height-90,300,100);

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



