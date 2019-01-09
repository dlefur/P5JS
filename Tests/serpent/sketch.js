Point = function(x, y, r) {
    this.x = x;
    this.y = y;
    this.rayon = r;

    this.tracer = function () {
    	ellipse(this.x,this.y,this.rayon,this.rayon)
    }


}

TabPoints = function() {
    this.elements = [];

    this.ajouter = function() {
        this.elements.push(new Point(mouseX, mouseY,20));
        if (this.elements.length > nbPointsMax) {
            this.elements.splice(0, 1);
        }
    }
    this.afficher = function() {
        for (var i = 0; i < this.elements.length; i++) {
        	this.elements[i].tracer();
        }
    }
}


var tabPoints = new TabPoints();
var nbPointsMax=200;

function mouseDragged() {
    tabPoints.ajouter();
}

function setup() {
    var canvas = createCanvas(400, 200);
    canvas.parent("sketch-holder");
    noStroke();
    background(200);
    fill(255,0,0);
}

function draw() {
	background(200);
	tabPoints.afficher();
}