// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// roue qui tourne

var ang=0;

function setup()
{
  createCanvas(200,200);
  fill(255);
  
}


function draw()
{
  background(0);
  translate(width/2,height/2);
	rotate(radians(ang));
  roue();
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
