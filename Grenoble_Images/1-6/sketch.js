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
  background(240,240,240);
  translate(width/2,height/2);
  push();
  translate(-img.width-20,-img.height/2);
  tint(0,255,0);
	image (img,0,0);
  pop();
  push();
  noTint();
  translate(20,-img.height/2);
  image(img,0,0);
  pop();
}
