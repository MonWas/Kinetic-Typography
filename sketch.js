
let size = 25;
let rows;
let cols;

let boxes = [];

let font;
let msg = "H";
let points = [];
let fontX = -135;
let fontY = 155;
let fontSize = 400;

function preload() {
  font = loadFont("fonts/Roboto-Bold.ttf");
}

function setup() {
  createCanvas(500, 500, WEBGL); // WEBGL = let's you render things in 3D.
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;
  
  points = font.textToPoints(msg, fontX, fontY, fontSize);
  
  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      boxes[i][j] = new Box(size / 2 + i * size - size * cols / 2, size / 2 + j * size - size * rows / 2);
    }
  }
}

function draw() {
  background(0, 0, 139);
  let distance;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let k = 0; k < points.length; k++){
        distance = dist(points[k].x, points[k].y, boxes[i][j].x, boxes[i][j].y);
        
        if (distance < 13) {
          boxes[i][j].isLetter = true;
        } 
      }

      boxes[i][j].display();
    }
  }
  
  // fill(255, 0, 0);
  // for (let i = 0; i < points.length; i++) {
  //   ellipse(points[i].x, points[i].y, 10, 10);
  // }
  
}