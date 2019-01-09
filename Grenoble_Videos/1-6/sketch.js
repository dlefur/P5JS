// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_vid_a1.html


var maVideo;

function setup() 
{
	createCanvas(800,600);
	maVideo=createVideo("../Videos/fingers.webm");
	maVideo.loop();
	maVideo.hide();
}

function draw() 
{
	background(255);
	image(maVideo,350,0);
	filter(POSTERIZE,3);
	image(maVideo,0,0);
}
        
