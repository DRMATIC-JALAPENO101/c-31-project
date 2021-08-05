var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects

  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   
  }
  for (var l = 0; l <=800; l = k + 20) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 20, divisionHeight));
  }

  for (var m = 0; m <=800; m = l + 20) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 30, divisionHeight));
  }

  //create 1st row of plinko objects

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects

  for (var i = 50; i <=width-10; i=j+30) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var h = 25; h <=width-10; h=j+10) {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var g = 100; g <= width-10; g=j) {
    plinkos.push(new Plinko(j, 7.5));
  }

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
    plinkos[ii].display();   
    plinkos[iii].display();  
    plinkos[iv].display();  
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  //create the particles using frameCount
  if(frameCount%60===0){
    particles.push(new particles(random(0, 800), 0))
  }

  //display the particles 
  particles.display();

}