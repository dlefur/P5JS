// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// change la couleur quand on clique dans le rectangle

var xmin=100;
var xmax=300;
var ymin=150;
var ymax=250;

function setup()
{
  createCanvas(400,400);
  stroke(0);
	background(240);
  fill(0,255,0);
  rect(xmin,ymin,xmax-xmin,ymax-ymin);
}


function draw()
{

}

function mousePressed()
{
  if ((mouseX >=xmin) && (mouseX <=xmax) && (mouseY >=ymin) && (mouseY <=ymax) )
  {
    fill(random(0,255),random(0,255),random(0,255));
  	rect(xmin,ymin,xmax-xmin,ymax-ymin);
  }
}

