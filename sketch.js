
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;


var paper,ground,dbw1,dbw2,dbw3;
var bg,dustbinImg;
var paper1,paper2;

function preload()
{
  bg= loadImage("bg.png");	
  dustbinImg= loadImage("dustbingreen.png");
}

 function setup() {

	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper= new Paper(100,550,70);
	ground=new Ground(800,600,1600,20);
	dbw1= new Dustbin(1200,590,200,20);
	dbw2= new Dustbin(1100,455,20,200);
	dbw3= new Dustbin(1300,455,20,200);

	paper1= new Paper(70,550,70);
	paper2= new Paper(250,550,70);
	
	var dustbin= createSprite(1200,470,200,150);
	dustbin.addImage(dustbinImg); 
	dustbin.scale= 0.8;
	
	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine);

  rectMode(CENTER);
  background(bg);
  




  paper.display();
  paper1.display();
  paper2.display();


 

  
  ground.display();
  dbw1.display();
  dbw2.display();
  dbw3.display();

  drawSprites();

  textSize(30);
  fill("black");
 text("Press 'UP' to throw the middle paper",500,50);
 text("Press 'Right' to throw the right side paper",500,90);
 text("Press 'Left' to throw the left side paper",500,130);

}

function keyPressed(){
	if(keyCode === UP_ARROW ){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:285,y:-285});
		
	}
	else if(keyCode === RIGHT_ARROW ){

		Matter.Body.applyForce(paper2.body,paper2.body.position,{x:275,y:-275});
		
	} 
	else if(keyCode === LEFT_ARROW ){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:295,y:-295});
		
	}




}