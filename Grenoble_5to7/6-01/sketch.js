// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// push pop

var r;
var v;
function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(0);
  r=2;
  v=2;
}

function draw()
{
  background(240);
  ellipse(200,200,2*r,2*r);
  if (r>200 || r<2){
    v=-v;
  }
  r=r+v;
}
