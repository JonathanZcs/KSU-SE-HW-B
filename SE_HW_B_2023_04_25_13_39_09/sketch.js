let buttonWidth = 200;
let buttonHeight = 80;
let buttonColor = "#FFD700";
let buttonTextColor = "#000000";
let buttonText = "Press me!";
let target = 7;
let track = 0;

function setup() {
  createCanvas(400, 400);
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  textSize(23);
   noLoop();
  background(220);
  let target = random(10);
  drawButton(width/2, height/2, buttonWidth, buttonHeight, buttonColor, buttonTextColor, buttonText);
  text("(I DARE YOU!)", width/2, height/2 + 150);
}

function drawButton(x, y, w, h, c, tc, t) {
  fill(c);
  strokeWeight(4);
  stroke(0);
  rect(x - w/2, y - h/2, w, h, 10);
  fill(tc);
  noStroke();
  text(t, x, y);
}

function mouseClicked() {
  if (mouseX > width/2 - buttonWidth/2 && mouseX < width/2 + buttonWidth/2 && mouseY > height/2 - buttonHeight/2 && mouseY < height/2 + buttonHeight/2) {
    let attempt = int(random(0, 11));
    //console.log(attempt);
    
    if(attempt === target) {
      track = 0;
      draw();
      text("YOU WON!..... nothing. That's life.", width/2, height/2 - 125);
    }
    else {
      track = track + 1;
      draw();
      text("You Lost! x ", width/2 - 10, height/2 - 125);
      text(track, width/2 + 62, height/2 - 125);
    }
  }
}