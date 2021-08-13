var steve,stever,stevel,zombie,zombieRimg,bg,zombieLimg;
var zombieS;
var heart,heart2,heartimg;
var score = 0;
var direc = 0;
var right,left;




function preload(){
  stever = loadImage("stever.png");
  stevel = loadImage("stevel.png");
  zombieRimg = loadImage("zombieR.png");
  zombieLimg = loadImage("zombieL.png");
  bg = loadImage("bg.jpg");
  heartimg = loadImage("hearts.png");

}




function setup() {
  createCanvas(1280,720);
  
  steve = createSprite(540,563,100,40);
  steve.addImage(stever);
  steve.scale = 0.5;

  //zombie = createSprite(450,600,100,40);
  //zombie.addImage(zombieimg);
  //zombie.scale = 0.5;
  //zombieRight();
  //zombieLeft();
}

function draw() {
  background(bg);  

if(keyDown(LEFT_ARROW)){
  steve.addImage(stevel);
  steve.x = steve.x-10;
  direc = left;
}
if(keyDown(RIGHT_ARROW)){
  steve.addImage(stever);
  steve.x = steve.x+10;
  direc = right;
}

 if(frameRate%100 === 0){
   zombieS = Math.round(random(1,2))
 }

 if(zombieS === 1)
 {
   zombieRight();
 }
 if(zombieS === 2)
 {
   zombieLeft();
 }

 heart = createSprite(50,50,20,20);
 heart.addImage(heartimg);
 heart.scale = 0.1;

 heart2 = createSprite(130,50,20,20);
 heart2.addImage(heartimg);
 heart2.scale = 0.1;

 
 stroke("red");
 text("SCORE:" + score,1200,50);

 console.log(direc);
  






  drawSprites();
}
function zombieRight(){
  var zombieR = createSprite(1280,600,100,40);
  zombieR.addImage(zombieRimg);
  zombieR.scale= 0.5;
  zombieR.velocityX = -2
}

function zombieLeft(){
  var zombieL = createSprite(0,600,100,40);
  zombieL.addImage(zombieLimg);
  zombieL.scale= 0.5;
  zombieL.velocityX = 2
}