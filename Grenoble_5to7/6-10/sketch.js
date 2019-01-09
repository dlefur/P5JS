// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// visage qui tourne

var ang=0;

function setup()
{
  createCanvas(300,300);
  stroke(0);
  strokeWeight(1);
  
}


function draw()
{
  background(255);
  push();
  translate(width/2,height/2);
	rotate(radians(ang));
  dessin();
  pop();
  
  if (ang>=360)
  {
    ang=0;
  }
  else
  {
    ang=ang+1;
  }
  
}

function dessin()
{
  push();
  fill(0,255,0);
  
  ellipse(0,0,200,200);
  line(-10,0,10,0);
  line(0,-10,0,10);
  line(-20,50,20,50);
  line(-20,60,20,60);
  fill(255,0,0);
  ellipse(-30,-50,10,20);
  ellipse(30,-50,10,20);

}
