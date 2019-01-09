// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a1.html
// 2 images, une teintée

var img;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(600,300);
}

function draw() 
{
  background(0,0,0);
  translate(width/2,height/2);
  push();
  translate(-img.width-20,-img.height/2);
	image (img,0,0);
  filter(INVERT);
  pop();
  push();
  translate(20,-img.height/2);
  image(img,0,0);
  pop();
}
