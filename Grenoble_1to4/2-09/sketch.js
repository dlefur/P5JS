// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a2.html
// Activité sur les lignes
// Activités 2-7 à 2-9

function setup() {
    createCanvas(800,600);
    background(240);
    point(400,300);
}

function draw() {
//  line(0,height/2,width,height/2);
//	line(0,0,width,height);
//  line(0,height,width,0);	
	var length =0;
	var trait=1;
	while (length < width)
	{
		line(length,height/2,length+trait,height/2);
		length=length+3*trait;
	}
}


// sauvegarde quand on appuie sur s ou S
function keyTyped() 
{
 if (key=='s' || key=='S') save("image_p5js.png");
} 

