// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// si on clique sur la souris, le cerce grandit.

var r;

function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(0);
  r=10;
}


function draw()
{
  background(240);
  ellipse(200,200,2*r,2*r);
}


function mousePressed()
{
  r=r+100;
}


function mouseReleased()
{
  r=r-100;
}
     
