var bgImg;
var cat

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    garden = createSprite(500,500);
    garden.addImage(bgImg);
    cat1 = createSprite(700,700);
    cat1.addAnimation("cat",catImg1);
    cat1.scale = 0.15;
    mouse1 = createSprite(200,700);
    mouse1.addAnimation("mouse",mouseImg1);
    mouse1.scale = 0.1;
}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide

    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2) {
        //write code here to change animation
        cat1.addAnimation("catSitting",catImg3);
        cat1.changeAnimation("catSitting");
        cat1 .velocityX = 0;
        mouse1.addAnimation("mouseLooking",mouseImg3);
        mouse1.changeAnimation("mouseLooking");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        mouse1.addAnimation("mouseTeasing",mouseImg2);
        mouse1.changeAnimation("mouseTeasing");
        cat1.addAnimation("catMoving",catImg2);
        cat1.changeAnimation("catMoving");
        mouse1.frameDelay = 25;
        cat1.velocityX = -5;
        
    }

}
