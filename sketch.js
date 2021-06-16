const Engine = Matter.Engine; //namespacing  to give small nick names
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
      isStatic: true // not movable
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
       restitution: 1
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background("blue");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);//ground

    ellipseMode(RADIUS);
    //ellipse(ball.position.x, ball.position.y, 20, 20);//ball
}