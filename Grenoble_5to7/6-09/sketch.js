// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// roue qui tourne avec un carré

var ang=0;

function setup()
{
  createCanvas(200,200);
  fill(255);
  
}


function draw()
{
  background(0);
  push();
  translate(width/2,height/2);
	rotate(radians(ang));
  roue();
  pop();
  push();
  translate(48,48);
	rotate(radians(-4*ang));
  rectMode(CENTER);
  rect(0,0,16,16);
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

function roue()
{
  ellipse(0,0,20,20);
  for(var i=0;i<8;i++)
  {
    rotate(radians(45*i));
    rect(12,-5,50,10);
  }

}
