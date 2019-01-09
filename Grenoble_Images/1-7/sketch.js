// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a1.html
// 2 images, une teintée

var img;

function preload() 
{
	img=loadImage("../Images/tux.jpg");
}

function setup() 
{
  createCanvas(420,242);
}
function draw()
{
  image (img,0,0);
  filter(BLUR,5); // filtre sur les images AVANT  l'instruction
                  // https://p5js.org/reference/#/p5/filter
  image (img,209,0);
}
    
