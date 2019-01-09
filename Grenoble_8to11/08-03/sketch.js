// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a8.html
// déplacment avec les flèches

var rayon=10;
var x;
var y;
var pas=5;

function setup()
{
  createCanvas(200,200);
  x=width/2;
  y=height/2;
  stroke(0);
  fill(255,0,0);
}


function draw()
{
  background(240);
  ellipse(x,y,2*rayon,2*rayon);
  if (keyIsDown(LEFT_ARROW))  // left
  {
    x=x-pas;
    if (x<=rayon)
    {
     x=rayon; 
    }
  }
  else 
  if (keyIsDown(UP_ARROW))  // up
  {
    y=y-pas;
    if (y<=rayon)
    {
     y=rayon; 
    }
  } 
  else
  if (keyIsDown(RIGHT_ARROW))  // right
  {
    x=x+pas;
    if (x>=width-rayon)
    {
     x=width-rayon; 
    }
  }
  else 
  if (keyIsDown(DOWN_ARROW))  // down
  {
    y=y+pas;
    if (y>=height-rayon)
    {
     y=height-rayon; 
    }
  } 
}


