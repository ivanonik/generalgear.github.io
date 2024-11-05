

// DOCUMENTATION

// https://runemadsen.github.io/rune.js/index.html


//*** RANDOM COLORS

// var r = new Rune({
//   container: "#canvas",
//   width: 600,
//   height: 400,
//   debug: true
// });

// function randomColor() {
//   return new Rune.Color('hsv', Rune.random(0, 360), Rune.random(20, 100), Rune.random(20, 100));
// }

// // Draw the color scheme
// var square1 = r.rect(0, 0, 200, r.height).fill(randomColor()).stroke(false);
// var square2 = square1.copy().move(200, 0).fill(randomColor());
// var square3 = square1.copy().move(400, 0).fill(randomColor());

// r.draw();

// var r = new Rune({
//   container: "#canvas",
//   width: 800,
//   height: 600,
//   debug: true
// });

// // Create a rectangle to fill the entire screen
// // and a smaller rectangle on top

// var grid = r.grid({
//   x: 50,
//   y: 50,
//   width: r.width - 100,
//   height: r.height - 100,
//   gutter: 20,
//   columns: 4,
//   rows: 1,
// });

// var size = 40;

// for(var i = 0; i < 50; i++)
// {
//   var color = new Rune.Color(Rune.random(0, 255), Rune.random(0, 255), Rune.random(0, 255));
//   var x = Rune.random(size, grid.state.moduleWidth - size);
//   var y = Rune.random(size, grid.state.moduleHeight - size);
//   var circle = r.circle(x, y, size).fill(color).stroke(false);

//   // we use .ceil because numbers start at 1
//   var randomCol = Math.ceil(Rune.random(grid.state.columns));
//   grid.add(circle, randomCol, 1);
// }

// r.draw();




var r = new Rune({
  container: "#canvas",
  width: window.innerWidth,
  height: window.innerHeight,
});

var bg = r.rect(0, 0, r.width, r.height).stroke(false).fill(0,255,255);



var shapes1 = [];
var shapes2 = [];
drawPattern(0, 0, 2000,2000, 10);
drawPattern(0, 0, 2000,2000, 10);




function drawPattern(startX, startY, width, height, size)
{
  var parent = r.group(startX, startY);

  var a = size;
  var b = size * 2;
  var c = size * 3;
  var d = size * 5;

  for (var y = 0; y <= height; y += c)
  {
    for (var x = 0; x <= width; x += d)
    {
      var centerX = x;
      var centerY = y;

      // shift every other row to the left to
      // fit inside the row above.
      if((y/c) % 2 == 0) {
        centerX -= b;
      }

      var p1 = r.polygon(centerX, centerY, parent)
        .fill(0,0,0)
        .lineTo(0, -c)
        .lineTo(b, -b)
        .lineTo(0, -a)
        .lineTo(-b, -b)
        .stroke(false);

      var p2 = r.polygon(centerX, centerY, parent)
        .fill(0)
        .lineTo(-b, -b)
        .lineTo(0, -a)
        .lineTo(0, a)
        .lineTo(-b, 0)
        .stroke(false);

      shapes1.push(p1);
      shapes2.push(p2);
    }
  }


}


r.play();

