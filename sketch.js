var path ;
var Runner; 
Runner_running;
 var coin;var coin;var energyDrink;var power;var boundary1;var boundary2;

function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  //Moving background
  createCanvas(displayWidth,displayHeight);
    path = createSprite(1000,1000, 1600,800);
    path.addImage(pathImg);
    path.velocityY =4;
    path.scale =1.2;
    path.x = path.height/2;

  //create sprites here
 Runner = createSprite(1000,800,20,20);
Runner.addAnimation("running",Runner_running);
 Runner.scale=0.1;;
 RunnerScore=0;

 boundary1 = createSprite(800,500,10,1000);

 boundary2 = createSprite(1200,500,10,1000);


energyDrink = createSprite(1000,270,20,20);
energyDrink.addImage(energyDrinkImg);
energyDrink.scale =0.1;
energyDrink.velocityY=0.03;

power = createSprite(1000,220,200,20);
power.addImage(powerImg);
power.scale=0.2;
power.velocityY=0.04;
}

function draw() {
  background("white");

  
  //code to reset the background
  if(path.y>400){
    path.y = path.height/2;
  }



  Runner.x= World.mouseX;
  Runner.collide(boundary1);
  Runner.collide(boundary2);
 

    drawSprites();

text("Runner Score",1300,900);
textSize(120);
fill("black");
}
if(Runner.isTouching(coin)||Runner.isTouching(coin4)||Runner.isTouching(energyDrink)){
   RunnerScore = RunnerScore + 1;
}
 
