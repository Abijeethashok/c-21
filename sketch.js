var sun
var earth 
var mars 
var angle = 0
var angleSpeed = 0.2
var sunRadius
var framecount
var sunimage
var earthimage
var marsimage

function  preload(){
  sunimage = loadImage("sun.jpg")
  earthimage = loadImage("earth.jpg")
  marsimage =loadImage("mars.jpg")
}
function setup() {
  createCanvas(400,400);
  sun = createSprite(0, 0, 30, 30);
  sun.addImage(sunimage)
  sun.scale = 0.5
  earth = createSprite(150, -18, 20, 20);
  earth.addImage(earthimage)
  earth.scale = 0.5
  mars = createSprite(210, 60, 20, 30);
  mars.addImage(marsimage)
  mars.scale = 0.5
  sun.shapeColor = "red"
  earth.shapeColor = "blue"
  mars.shapeColor = "green"
 
}

function draw() {
  background("black"); 
 angleMode(DEGREES)
 translate(width/2,height/2)
 rotate(angle)
 angle = angle + angleSpeed

 if(frameCount%5 === 0){
   sun.scale = sun.scale + 0.01
 }

 if(sun.collide(mars)){
   mars.destroy()
 }
 
 if(sun.collide(earth)){
  earth.destroy()
}

  drawSprites();
}