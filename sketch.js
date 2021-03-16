var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3;
var canvas,backgroundImg
var cat, mouse
function preload() {
    //load the images here
catImg1=loadAnimation("images/cat1.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadImage("images/cat4.png")
backgroundImg=loadImage("images/garden.png")
mouseImg1=loadAnimation("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3=loadImage("images/mouse4.png")




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600)
cat.addAnimation("catSleeping",catImg1)
cat.scale=0.2

mouse=createSprite(200,600)
mouse.addAnimation("mouseStanding",mouseImg1)
mouse.scale=0.2
}
function draw() {

    background(backgroundImg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
cat.addAnimation("catLastImg",catImg3)
cat.x=300
cat.scale =0.2
cat.changeAnimation("catLastImg")
mouse.addAnimation("mouseLastImg",mouseImg3)
mouse.scale =0.15
mouse.changeAnimation("mouseLastImg")
    }
    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW ){
        cat.velocity=-4
         cat.addAnimation("catRunning",catImg2)
        cat.changeAnimation("catRunning")
        mouse.addAnimation("mouseTeasing",catImg2)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay=25
        
        }


}
