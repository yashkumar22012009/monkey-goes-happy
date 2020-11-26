
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup(){
monkey=createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running); 
  monkey.scale=0.1
  ground=createSprite(400,350,900,20);
  ground.velocityX=-4
  score=0
  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("green");
  if(ground.x<0){
ground.x= ground.width/2    
     
      }
  if(keyDown("space")){
  monkey.velocityY=-12
    
   }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  SpawnFood();
  Spawnobstacle();
drawSprites();
text("score"+score,500,50)  
  if(obstacleGroup.isTouching(monkey)){
 monkey.velocityY=0
    ground.velocityY=0
    obstacleGroup.setVelocityXEach(0)
    foodGroup.setVelocityXEach(0)
  obstacleGroup.setLifetimeEach(-1)
  foodGroup.setLifetimeEach(-1)   
     }
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivaltime"+survivalTime,100,50)
}
function SpawnFood(){
  if(frameCount%80===0){
  banana=createSprite(600,250,10,10);
    banana.addImage(bananaImage)
    banana.y=random(120,200)
    banana.velocityX=-5
    banana.lifetime=300
    monkey.depth=banana.depth+1
    banana.scale=0.05
    foodGroup.add(banana)
     
     
     }
  
}
function Spawnobstacle(){
  if(frameCount%300===0){
  obstacle=createSprite(800,320,10,10);
    obstacle.addImage(obstaceImage)
    obstacle.velocityX=-5
    obstacle.lifetime=300
  obstacle.scale=0.15
   obstacleGroup.add(obstacle)  
     
     }
  
}




