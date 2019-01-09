// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// si on clique sur la souris, le cerce grandit.

var r;

function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(0,255,0);
  rectMode(CENTER);
  r=10;
}


function draw()
{
  background(240);
  translate(width/2,height/2);
  rect(0,0,100,100);
}


function mousePressed()
{
  fill(255,0,0);
}


