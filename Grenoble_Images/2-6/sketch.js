// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html
// transformer en niveaux de gris

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
  var i=0
  while (i < pixels.length)
  {

    //pixels[i]=floor((pixels[i]+pixels[i+1]+pixels[i+2])/3); // moyenne
    //pixels[i]=floor(0.2125*pixels[i]+0.7154*pixels[i+1]+0.0721*pixels[i+2]);
    pixels[i]=floor(0.299*pixels[i]+0.587*pixels[i+1]+0.114*pixels[i+2]);
    pixels[i+1]=pixels[i];
    pixels[i+2]=pixels[i];

    i=i+4
  }
  updatePixels();
}


function draw()
{
}
