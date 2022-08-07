var barco, navegando;
var mar, marmg;

function preload(){
 navegando=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
 marmg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(200,300,400,400);
  mar.addImage("oceano",marmg);
  mar.scale = ("0.3");
  mar.velocityX = +5;

  barco = createSprite(100,280,50,50);
  barco.addAnimation("nadando",navegando);
  barco.scale = ("0.25");
  
}

function draw() {
  background("blue");

if (mar.x > 600){
  mar.x = 0;
}


if (mar.x < 0){
  mar.x = mar.width/2;
}

    drawSprites();

 
}
