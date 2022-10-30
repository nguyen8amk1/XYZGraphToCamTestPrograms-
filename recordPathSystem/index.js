let pointsX = []
let deltaTimeX = [];
let pointsY = []
let timeAccu = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function outPutToFormat() {
    console.log("X:\n");
    console.log(pointsX);

    console.log("tX:\n");
    console.log(deltaTimeX);

    // for(let i = 0; i < pointsX.length; i++) {
    //   console.log(pointsX[i].deltaTime + ", ")
    // }

    // console.log("X:\n");
    // for(let i = 0; i < pointsX.length; i++) {
    //   console.log(pointsX[i].mouseX)
    // }

    // console.log("tX:\n");
    // for(let i = 0; i < pointsX.length; i++) {
    //   console.log(pointsX[i].deltaTime)
    // }
}

function keyPressed() {
  if(keyCode == RETURN) {
    outPutToFormat();
  }
}

let firstFlag = 0;
let offsetX = 0;
function draw() {
  background(220);
  timeAccu += (deltaTime/1000);
  if(mouseIsPressed) {
    if(firstFlag === 0) {
      firstFlag = 1;
      offsetX = timeAccu;
    }
    pointsX.push(mouseX);
    deltaTimeX.push(timeAccu-offsetX);
    pointsY.push(mouseY);
    // deltaTimeX.push();
  }

  for(let i = 0; i < pointsX.length; i++) {
    circle(pointsX[i], pointsY[i], 5)
  }

  stroke(0);
  let r = 100;
  for(let i = 0; i < pointsX.length; i++) {
    let x = cos(i*(2*PI/(pointsX.length)))*pointsX[i]/2 + 200;
    let y =  sin(i*(2*PI/(pointsX.length)))*pointsX[i]/2 + 200;
    line(200, 200, x, y);
  }
}

