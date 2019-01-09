// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a1.html
// image au centre

var img;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
  background(240,240,240);
  translate(width/2,height/2);
  translate(-img.width/2,-img.height/2);
  tint(255,0,0);
	image (img,0,0);
}
