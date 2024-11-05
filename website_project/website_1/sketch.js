let x; 
let y;
let font;
let size; 

let xCoordinates = [20, 40, 60, 80, 50];




function preload(){
    font = loadFont('Howvetica-Aayp.ttf');
}

function setup() {
    createCanvas(window.innerWidth,window.innerHeight+2,WEBGL);
    background(255);
    // Set angle mode to degrees
    angleMode(DEGREES);

    // Set text color, size, and alignment
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);

    // Set the color mode to hue-saturation-brightness (HSB)
    colorMode(HSB);


  }
  
  function draw() {
    frameRate(60);


    background(255);
    smooth();

    emp();

    
    translate((width/2)-150, (height/2)-150);

    //push();
    //clock();
    //pop();



  }

  function emp(){
    
    size = sin(floor(140))+140;
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(size);
    rotateY(map(frameCount,0,height,0,TWO_PI));
    fill(0,0,255);
    noFill();
    
    push();
    // translate(0,-15);

    //rotateZ(map(frameCount+2,0,height/3,0,-HALF_PI));
    //rotateY(map(frameCount+2,0,height/2,0,-TWO_PI));
    rotateX(-frameCount/3);
    rotateY(frameCount/3);
    rotateZ(-frameCount/3);

    for(let i=0; i<50; i++) {
      fill(map(i,0, 66,0,57),132,207);
      // fill(66,0,57);
      translate(0,0,1);
      text("EMP",0,0);
    }

    pop();

  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    // anaglyph.resize();

  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background('#3C2350');
  }

  function mousePressed(){
    pg.background(255);
  }

  

//CLOCK   

      // Set the date we're counting down 
      var countDownDate = new Date("OCT 10, 2025 19:00:00").getTime()
      // Update the count down every 1 second
      var time = setInterval(function() {
      
      // Get today's date and time
      var now = new Date().getTime();
      
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      
      // Display the result in the element with id="demo"
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
      
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(time);
        document.getElementById("demo").innerHTML = "INSERT DATE";
        }
      }, 1000);
