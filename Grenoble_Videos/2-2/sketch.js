// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_vid_a2.html
var maVideo;
var largeur=320;
var hauteur=240;
var index=0;
var step=8;

function setup() 
{
	createCanvas(largeur,hauteur);
	maVideo=createVideo("../Videos/fingers.webm");
  //maVideo=createCapture();
	maVideo.hide();
	maVideo.loop();
	noStroke();
	fill(0);
}

function draw() 
{
	background(255);
  image(maVideo,0,0);
	loadPixels();
  background(255);
	for (y=0;y<hauteur;y=y+step){
    		for (x=0;x<largeur;x=x+step){
    			index=4*(x+y*largeur)
    			var r=pixels[index];
    			var v=pixels[index+1];
    			var b=pixels[index+2];
    			var gris=floor((r+v+b)/3);
    			var dark=(255-gris)/255
    			var ray=dark*step;
    			ellipse(x,y,ray,ray);			
    		}
    	}
}

        
