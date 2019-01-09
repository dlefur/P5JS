Carre = function() {
    this.creation=millis();
    this.x = floor(random(20, 380));
    this.y = floor(random(20, 380));
    this.cote = 20;
    this.transp = floor(random(20, 50));
    this.vx = floor(random(-3, 3));
    this.vy = floor(random(-3, 3));
    this.couleur = {
        r: floor(random(0, 255)),
        v: floor(random(0, 255)),
        b: floor(random(0, 255))
    }
    this.deplacement = function() {
        if (this.x < this.cote || this.x > 400 - this.cote) {
            this.vx = -this.vx;
        }
        if (this.y < this.cote || this.y > 400 - this.cote) {
            this.vy = -this.vy;
        }
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
    this.affichage = function() {
        fill(this.couleur.r, this.couleur.v, this.couleur.b, this.transp);
        rect(this.x, this.y, 2 * this.cote, 2 * this.cote);
    }
    this.age = function() {
    	return (millis()-this.creation);
    }

    
}
var tabCarre = [];

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    rectMode(CENTER);
    slider = createSlider(100, 5000, 2000);
    //slider.position(width/2-40, height/2);
    slider.position(600, 300);
    slider.style('width', '80px');
}

function draw() {
    background(100, 155, 255);
    var dureePermise = slider.value();
    var nouveauCarre = new Carre();
    tabCarre.push(nouveauCarre);
	for (var i=tabCarre.length-1;i>=0;i--) 
	{
		tabCarre[i].deplacement();
		tabCarre[i].affichage();
		if (tabCarre[i].age()>dureePermise) {
			tabCarre.splice(i,1);
		}
		
	}
}
