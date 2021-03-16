function preload(){
    //char1 = loadAnimation("1.png","2.png","3.png");
    
    //obstacle1 = loadImage("images/ob1.png");
    //obstacle2 = loadImage("images/ob2.png");
    //obstacle3 = loadImage("images/ob3.png");
    //obstacle4 = loadImage("images/ob4.png");
    //obstacle5 = loadImage("images/ob5.png");
    //obstacle6 = loadImage("images/ob6.png");

    //backdropimg = loadImage("images/backdrop.png");
    bgimg = loadImage("images/sky f.jpg");
    groundImage = loadImage("images/ground.png");
    characterImg = loadImage("images/1.png")
    cloudImg = loadImage("images/clouds.png");
    cloudImg1 = loadImage("images/cloud 1.png");
    cloudImg2 = loadImage("images/cloud.png");
  }
  
  function setup() {
    createCanvas(1200, 500);
    
    bg = createSprite(250,170,1500,500);
    bg.addImage(bgimg);
    bg.scale=2;
    
    ground = createSprite(1000,520,2000,100);
    ground.addImage("ground",groundImage);
    ground.velocityX=-2;
    //ground.x = ground.width /2;
    ground.scale=0.8;
    
    invisibleGround = createSprite(width/2,height-35,width,5);
    invisibleGround.visible = false;

    character = createSprite(80,height - 135,10,10);
    character.addImage(characterImg);

    cloud = createSprite(550,50,10,10);
    cloud.addImage(cloudImg);
    //cloud.velocityX = -2;
  }
  
  function draw() {
    
    background(180);
      
      
      if (ground.x < ground.width/2){
       ground.x = ground.width/2;
      }
      
     

      //if (cloud.x < 0){
        //cloud.x = cloud.width/2;
      //}

      if(keyDown("space") && character.y >= 100 ) {
        character.velocityY = -12;
      }
      character.velocityY = character.velocityY + 0.8;
      character.collide(invisibleGround);
  
    drawSprites();
  }

  function spawnObstacles() {
    if(World.frameCount % 60 === 0) {
      var obstacle = createSprite(400,365,10,40);
      obstacle.velocityX = -6;
      
      //generate random obstacles
      var rand = randomNumber(1,6);
      obstacle.setAnimation("obstacle" + rand);
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 70;
      //add each obstacle to the group
      ObstaclesGroup.add(obstacle);
    }
  }
  
  function spawnClouds() {
    //write code here to spawn the clouds
    if (World.frameCount % 60 === 0) {
      var cloud = createSprite(400,320,40,10);
      cloud.y = randomNumber(280,320);
      cloud.setAnimation("cloud");
      cloud.scale = 0.5;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 134;
      
      //adjust the depth
      cloud.depth = trex.depth;
      trex.depth = trex.depth + 1;
      
      //add each cloud to the group
      CloudsGroup.add(cloud);
    }
  }