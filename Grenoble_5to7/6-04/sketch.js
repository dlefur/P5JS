// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// animation : disque rouge rebondissant sur un bord

var x;
var v;
var rayon;
function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(255,0,0);
  x=width/2;
  v=2;
  rayon=20;
  frameRate(60); // frame par seconde
}

function draw()
{
  background(240);
  push();
  stroke(0,0,0);
  strokeWeight(5);
  noFill();
  rect(0,0,width,height);
  pop();
  ellipse(x,height/2,rayon,rayon);
  if ((x<rayon/2) || (x>width-rayon/2))
  {
  	v=-v;
  }
  x=x+v;
}
