// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_vid_a1.html

var maVideo;

function setup() 
{
	createCanvas(400,400);
	//maVideo=createVideo("../Videos/fingers.webm");
   	maVideo=createCapture();
	maVideo.loop();
	maVideo.hide();
}

function draw() 
{
	background(255);
	image(maVideo,0,0);
}
  
        
