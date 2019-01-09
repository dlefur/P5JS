// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html
// changement d'un pixel

var img;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(208,242);
  image(img, 0, 0);
  loadPixels();
  pixels[101088]=0; // point x=104 y=121 // 4*(x-1)+4*y*width
  pixels[101089]=0;
  pixels[101090]=0;
  updatePixels();
}


function draw()
{
}
