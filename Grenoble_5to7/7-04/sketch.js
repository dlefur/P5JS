// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// dessine un cercle sur la souris



function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(0);
}


function draw()
{
  background(240);
  ellipse(mouseX,mouseY,30,30);
}



