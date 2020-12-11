
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , box1 , box2 , box3 , paper1;
var paperImg, dustbinImg;
var dustbinGroup;
function preload(){
	dustbinImg = loadImage("dustbingreen.png");
	paperImg = loadImage("paper.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	dustbinGroup = new Group;
	paper1.addImage(paperImg);
	dustbinGroup.addImage(dustbinImg)
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
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper1.display();

  dustbinGroup.add(box1)
  dustbinGroup.add(box2)
  dustbinGroup.add(box3)

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



