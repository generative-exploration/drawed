let img;
var radius = 40;
let c;
let myFont;

function preload() {
  img = loadImage("0175.jpg");
}

function setup() {
  let c = createCanvas(960, 1200);
  image(img, 0, 0);
  textSize(14);
}

function draw() {
  copy(img, 0, height - 20, width, height, 0, height - 20, width, height);

  if (mouseIsPressed) {
    d = img.get(mouseX, mouseY);
    fill(d, 200);
    noStroke();
    ellipse(mouseX, mouseY, radius, radius)
  }

  fill(255);
  textAlign(CENTER);
  text("diameter: " + radius, width / 2, height - 5);
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(c, 'gen_exploration', 'jpg');
  }

  if (key == 'r') {
    image(img, 0, 0);
  }

  if (keyCode == UP_ARROW) {
    radius = radius + 20;
  }
  if (keyCode == DOWN_ARROW) {
    radius = radius - 20;
    if (radius == 0) {
      radius = radius + 20;
    }
  }
}
