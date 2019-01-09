// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// animation : disque rouge traversant la fenêtre

var x;
var v;
function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(255,0,0);
  x=-10;
  v=10;
  frameRate(10); // frame par seconde
}

function draw()
{
  background(240);
  ellipse(x,height/2,20,20);
  x=x+v;
}
