// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a1.html

var img;
function preload() {
	img=loadImage("../Images/tux.jpg");
}
function setup() {
    createCanvas(208,242);
}
function draw() {
    background(240,240,240);
	image (img,0,0);
}
