const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	
    ground1 = new g1(600,height,1200,20);
	ground2= new g1(500,450,600 ,20)
	sq1=new square(500,415,50,50)
	sq2=new square(550,415,50,50)
	sq3=new square(450,415,50,50)
	sq4=new square(600,415,50,50)
	sq5=new square(400,415,50,50)
	sq6=new square2(500,365,50,50)
	sq7=new square2(550,365,50,50)
	sq8=new square2(450,365,50,50)
	sq9=new square3(500,315,50,50)
	

	paper1=new paper(100,215,50,50)

	
	launcher = new c1(paper1.body,{x:100, y:215})
   


}
  



function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine)
 


  ground1.display();
  ground2.display()
  sq1.display()
  sq2.display()
  sq3.display()
  sq4.display()
  sq5.display()
  sq6.display()
  sq7.display()
  sq8.display()
  sq9.display()
  paper1.display()
 launcher.display()
 
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper1.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}



  	
