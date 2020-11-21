const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var log;
var log2;
var log3;

var paper;
 
function preload()
{

}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

ground=new Ground(400,height,800,20);
	
log=new Log(600,490,150,15);


log2=new Log(520,460,15,100);
log3=new Log(670,460,15,100);


paper=new Paper(200,480,70);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  log.display();

  log2.display();
  log3.display();

  paper.display();
  
 
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})
}
}



