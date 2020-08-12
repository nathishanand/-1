var boy, raining, ground, cloud, cloud1, cloud2, cloud3, cloud4,Cloud, boy, Boy, rand;
var rain = [];

function preload() {
  raining = loadImage("raindrop.jfif");
  Cloud = loadImage("download.png");
  Boy = loadImage("Untitled.png");

}

function setup() {
  var canvas = createCanvas(1600, 750); 
    
  
    boy = createSprite(400, 610, 40, 150); 
    boy.addImage(Boy);
    boy.scale = 0.5;
    
    
    
    ground = createSprite(800, 740, 1600, 15);   
    
    
    cloud = createSprite(250, 120, 30, 30)
   cloud.addImage(Cloud);  
   cloud.scale = 1.0;
   
   cloud1 = createSprite(300, 120, 30, 30)
   cloud.addImage(Cloud);
   cloud1.scale = 1.0;
  
   cloud2 = createSprite(500, 120, 30, 30)
   cloud2.addImage(Cloud);
   cloud2.scale = 1.0;  
   
  
   cloud3 = createSprite(700, 120, 30, 30)
   cloud3.addImage(Cloud);
   cloud3.scale = 1.0;
   
   
  
    


   cloud4 = createSprite(900, 120, 30, 30)
   cloud4.addImage(Cloud);  
   cloud4.scale = 1.0;

   
   rain = createSprite(250, 80, 10, 10);
    rain.addImage(raining);
    rain.scale = 0.3;
    

}

function draw(){
  background(55, 20, 120);
  cloud.depth = rain.depth+1;
  rain.velocityY = 50; 
  rain.collide(boy);

if(rain.collide(boy)) { 
  rain.visible = false;
}

if(rain.y>=750) {
  rain.x = random(250, 900);
  rain.y = 200; 

}
 
  rain.velocityY = -50;


  if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,370), random(10,30), 10, 10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
       
        default: break;
    }
    thunder.scale = random(0.3,0.6)
}



  drawSprites();  
}   

