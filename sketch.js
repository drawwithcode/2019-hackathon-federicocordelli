var mySong;
var myImage;
var analyzer;
var secondImage;



function preload(){
mySong = loadSound("./sounds/TG1_bumper.mp3");
myImage = loadImage("./images/5.png");
secondImage = loadImage("./images/4.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  

  // mySong.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
}
function mouseClicked() {
/*
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height/5);
  noStroke();
  fill(0,0,255);
  ellipse(width/2,height/2,4*(volume));
  */
  mySong.play();

}
function draw() {
  background(0);

  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 0, height/5);
  noStroke();
  fill(0,0,255);
  ellipse(width/2,height/2,30*(volume));


  imageMode(CENTER);
  image(secondImage, width/2, height/2, secondImage.width*((windowWidth*windowHeight)/2000000), secondImage.height*((windowWidth*windowHeight)/2000000));
  imageMode(CENTER);
  image(myImage, width/2, height/2, myImage.width/(frameCount/300), myImage.height/(frameCount/300));
  filter(GRAY);
  fill(255);
  textAlign(CENTER);
  textSize(20*((windowWidth*windowHeight)/800000));
  textFont("Teko");
  text("Welcome to the 'TG1 Hackathon's Edition', where everything is interactive. Click the mouse to start the jingle, the spacebar to reset",width/2,height-35);

  // mySong.play();
}


function keyPressed(SPACEBAR) {
  document.location.reload();
  // mySong.play();
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
