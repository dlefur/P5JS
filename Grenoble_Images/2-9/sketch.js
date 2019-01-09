// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html

var img;
var img1;
var t=30;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(208,242);
  imageMode(CENTER);
}

function draw()
{
  background(0);
  img1=img.get(mouseX-t,mouseY-t,2*t,2*t);
  if (img1.width>0)
  {
    image(img1,mouseX,mouseY);
  }
  
}
        
