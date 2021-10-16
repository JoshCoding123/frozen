
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var sprite, base
var sphere

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;


    sprite= createSprite( 800, 600, 300, 20)
    sprite.shapeColor= "yellow"
    console.log(sprite)

    sphere = Bodies.circle ( 800, 50, 25 )
    World.add(world,sphere)
    console.log(sphere)

    //base= Bodies.rectangle( 800,600,300,20,  {isStatic:true})
    //World.add(world,base)

}


function draw() {
    background("black")
    drawSprites()
    Engine.update(engine)
    ellipseMode(RADIUS)
    ellipse(sphere.position.x, sphere.position.y, 25)
    //rectMode(CENTER)
    //rect(base.position.x, base.position.y, 300, 20)





}