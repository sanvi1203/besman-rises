const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var rain;
var maxDrops = 100;
var drops=[];
var umbrella;

function preload(){
    
}

function setup(){
   createCanvas(500,700)
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);

   umbrella = new Umbrella(150,550)

   if(frameCount % 150 === 0) {
       for(var i= 0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
       }
   }
      
    
}

function draw(){
    background("black")

umbrella.display();

   
   
    for(var i =0; i < maxDrops; i++) {
       drops[i].showDrop();
       drops[i].updateY();
    }
    
    drawSprites();
}   

