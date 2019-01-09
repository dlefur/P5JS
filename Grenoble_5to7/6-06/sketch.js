// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// animation : disque rouge rebondissant sur un bord

var x;
var y;
var v;
var rayon;
var ang;
function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(255,0,0);
  v=5;
  rayon=20;
  x=random(rayon,width-rayon);
  y=random(rayon,height-rayon);
  ang=random(0,TWO_PI);
  frameRate(60); // frame par seconde
}

function draw()
{
  cadre();
  ellipse(x,y,rayon,rayon);
  if ((x<rayon/2) || (x>width-rayon/2))
  {
  	ang=PI-ang;
  }
  if ((y<rayon/2) || (y>height-rayon/2)) 
  {
  	ang=PI-ang;
    v=-v;
  } 
  x=x+v*cos(ang);
  y=y+v*sin(ang);
}

function cadre()
{
  background(240);
  push();
  stroke(0,0,0);
  strokeWeight(5);
  noFill();
  rect(0,0,width,height);
  pop();
}
