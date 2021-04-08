
var tom, tomImage1, tomImage2, tomImage3 ;
var jerry, jerryImage1, jerryImage2, jerryImage3;

function preload() {
    Bg = loadImage("images/garden.png");
    tomImage1 = loadAnimation("images/cat1.png");
    tomImage2 = loadAnimation("images/cat2.png", "images/cat3.png");
    tomImage3 = loadAnimation("images/cat4.png");

    jerryImage1 = loadAnimation("images/mouse1.png");
    jerryImage2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    jerryImage3 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    tom = createSprite(675,650);
    tom.scale = 0.2;
    tom.addAnimation("tom1image", tomImage1);

    jerry = createSprite(100,670);
    jerry.scale = 0.10;
    jerry.addAnimation("jerry1image", jerryImage1);

}

function draw() {

    background(Bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.velocityY = 0;
        tom.addAnimation("tommu",tomImage3);
        tom.changeAnimation("tommu");
        tom.x = 675;

        jerry.addAnimation("jerru",jerryImage3);
    jerry.changeAnimation("jerru");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    jerry.addAnimation("jerryTeasing",jerryImage2);
    jerry.changeAnimation("jerryTeasing");
    jerry.frameDelay = 25;
 }


  if(keyCode === LEFT_ARROW){
     jerry.addAnimation("jerryTeasing",jerryImage2);
     jerry.changeAnimation("jerryTeasing");
     jerry.frameDelay = 10;
  }

  if(keyCode === LEFT_ARROW){
    tom.addAnimation("tommy",tomImage2);
   tom.changeAnimation("tommy");
   tom.frameDelay = 25;
   tom.velocityX = -7;
   tom.velocityY = 0;
 }




}
