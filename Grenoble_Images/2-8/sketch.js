// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html

var img;
var img1;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(208,242);
  background(0);
  img1=img.get(65,3,80,90);
  image(img1,70,80);
}

function draw()
{
  
}
        
