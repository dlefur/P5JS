// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_vid_a1.html


var maVideo;
var seuil = 50;

function setup() 
{
	createCanvas(300,220);
	maVideo=createVideo("../Videos/fingers.webm");
	maVideo.loop();
	maVideo.hide();
}

function draw() 
{
	background(255);
	image(maVideo,0,0);
	loadPixels();
	for (i=0;i<pixels.length;i=i+4)
  {
    if (pixels[i]<seuil && pixels[i+1]<seuil && pixels[i+2]<seuil)
    {
    	pixels[i]=255;
      pixels[i+1]=0;
      pixels[i+2]=0;
    }
	
  }
    	updatePixels();
}
        
