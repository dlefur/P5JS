var ang=0;
var k=7;
var v=1;
var sliderPetals;

function setup() {
	var canvas = createCanvas(300,300);
	canvas.parent("sketch-holder");
	background(200);
	angleMode(DEGREES);
	sliderPetals= select("#sliderPetals"); // slider créé dans le HTML
	sliderPetals.changed(changePetals);

	pPetals = select("#pPetals");  // paragraphe créé dans le html
    pPetals.html("Nombre de pétales : " + sliderPetals.value());

}


function changePetals() {
	k=sliderPetals.value();
	pPetals.html("Nombre de pétales : " + sliderPetals.value());
}


function draw() {
	background(200);
	translate(width/2,height/2);
	ang=ang+0.5;
	if (ang==360) {
		ang=0;
	}
	rotate(ang);
	fill(255,0,0);
	stroke(0);

	beginShape();
	for (var i=0;i<360;i++) {
		var r=40*(2+cos(k*i));
		var x = r*cos(i);
		var y = r*sin(i);
		vertex(x,y);
	}
	endShape();
	push();
	noStroke();
	fill(255,255,0);
	ellipse(0,0,60,60);
	pop();
}