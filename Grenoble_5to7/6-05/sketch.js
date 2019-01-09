// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// animation : pacman rebondissant sur un bord

var x;
var v;
var rayon;
function setup()
{
  createCanvas(500,200);
  noStroke();
  fill(255,0,0);
  x=width/2;
  v=2;
  rayon=50;
  frameRate(60); // frame par seconde
}

function draw()
{
  cadre();
  pacman(x);
  if ((x<rayon/2) || (x>width-rayon/2))
  {
  	v=-v;
  }
  x=x+v;
}

function cadre()
{
  background(100);
  push();
  stroke(0,0,0);
  strokeWeight(5);
  noFill();
  rect(0,0,width,height);
  pop();
}

function pacmanDroite(x)
{
  push();
  noStroke();
  fill(255,255,0); //jaune
  arc(x,height/2,rayon,rayon,radians(30),radians(330));
  stroke(0);
  strokeWeight(5);
  point(x+10,height/2-15);
  pop();
}

function pacmanGauche(x)
{
  push();
  noStroke();
  fill(255,255,0); //jaune
  arc(x,height/2,rayon,rayon,radians(210),radians(150));
  stroke(0);
  strokeWeight(5);
  point(x-10,height/2-15);
  pop();
}

function pacman(x)
{
 if (v>0)
 {
  pacmanDroite(x); 
 }
 else
 {
  pacmanGauche(x); 
 }
    
}
