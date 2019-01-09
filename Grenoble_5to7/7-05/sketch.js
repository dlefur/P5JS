// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// dessine un carré sur la souris

var t=20; // taille du carré

function setup()
{
  createCanvas(400,400);
  noStroke();
  fill(0);
  background(240);
  rectMode(CENTER);
}


function draw()
{

}

function mousePressed()
{
  fill(random(0,255),random(0,255),random(0,255),random(50,500))
  rect(mouseX,mouseY,t,t);
}

