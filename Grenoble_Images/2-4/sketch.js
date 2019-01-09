// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html
// changement d'un pixel

var img;
var seuil = 2;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(208,242);
  image(img, 0, 0);
  loadPixels();
  var i=0;
  while (i < pixels.length)
  {
    if ( (pixels[i] <seuil) && (pixels[i+1] <seuil) && (pixels[i+2] <seuil) )
    {
      pixels[i]=255;
      pixels[i+1]=0;
      pixels[i+2]=0;
    }
    i=i+4;
  }
  updatePixels();
}


function draw()
{
}
