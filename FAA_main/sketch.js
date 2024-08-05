// Click and drag the mouse to view the scene from different angles.

let speed = 0.05;
let slider;
let x;
let g;



function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  angleMode(DEGREES);
  strokeWeight(1);
  noFill();

  // Create a slider and place it at the top of the canvas.
  // Set its default value to 0.
// 

}

function draw() {
  background(0);
  stroke(255);
  // Enable orbiting with the mouse.
  orbitControl();

  //EARTH

  x = x + random(-5,5);
  push();
  rotateZ(sin(frameCount * speed));
  smooth();
  sphere(100);
  pop();

  rings();

}

function rings(){

  //RINGS

  // Rotate rings in a half circle to create a sphere of cubes
  for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
  
  rotateWithFrameCount();
  
  //RING 1
  push(); 

  // Rotate from center of sphere
  rotateZ(zAngle);
  rotateX(xAngle);
  translate(0, 200, 0);
  smooth();
  rotateZ(sin(frameCount * speed));
  box(10);
  pop();

  //RING 2
  push(); 
  // Rotate from center of sphere
  rotateZ(zAngle);
  rotateX(xAngle);
  translate(0, 300, 0);
  smooth();
  rotateZ(sin(frameCount * speed));

  //torus(1,30,5);
  pop();

  //RING 3
  
  push(); 
  // Rotate from center of sphere
  rotateZ(zAngle);
  rotateX(xAngle);
  // Then translate down 400 units
  translate(0, 400, 0);
  smooth();
  rotateZ(sin(frameCount * speed));
  box(10);
  pop();

  //RING 4
  push(); 
  strokeWeight(0.1);
  rotateY(HALF_PI);
  rotateZ(zAngle);
  rotateX(xAngle);
  translate(0, 500, 0);
  smooth();
  rotateZ(sin(frameCount * speed));
  sphere(10);
  pop();

    }

function rotateWithFrameCount() {
  rotateZ(sin(frameCount * speed));
  rotateX(sin(frameCount * speed));
  rotateY(sin(frameCount * speed)); 
}



}




} 
