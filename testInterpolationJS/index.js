let points;
let indexofpairpoints;
let i;
let p1;
let p2;
let speed = 5;
let animate = false;
function setup() {
  createCanvas(400, 400);
  points = [
    // createVector(10, 10),
    // createVector(110, 10),
    // createVector(110, 110),
    // createVector(10, 210)
  ];
  
  indexofpairpoints = 0;
  i = 0;
  // p1 = points[indexofpairpoints];
  // p2 = points[indexofpairpoints+1];
  frameRate(30);
}

function keyPressed() {
  if(keyCode == RETURN) {
      animate = !animate;
      indexofpairpoints = 0;
      i = 0;
      p1 = points[indexofpairpoints];
      p2 = points[indexofpairpoints+1];
  }
}

function mouseClicked() {
  points.push(createVector(mouseX, mouseY));
}

function draw() {
  background(220);
  for(let j =0; j < points.length; j++) {
    fill(255);
    circle(points[j].x, points[j].y, 10);
    if(j > 0) {
      line(points[j].x, points[j].y, points[j-1].x, points[j-1].y);
    }
  }

  if(animate) {

      let p = createVector(lerp(p1.x, p2.x, i), lerp(p1.y, p2.y, i));
      fill(255, 0,0);
      circle(p.x, p.y, 20);
    

      // print(p);
      i+=(deltaTime/1000)*speed;
      if(i >= 1) {
        i %= 1;
        ++indexofpairpoints; 
        indexofpairpoints = indexofpairpoints % (points.length-1);
        p1 = points[indexofpairpoints];
        p2 = points[indexofpairpoints+1];
      };
  }
}

