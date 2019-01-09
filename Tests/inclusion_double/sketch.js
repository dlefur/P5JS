// roue qui tourne avec un carré



//////////////////////////////////// La fonction du sketch
var sketch1 = function(p) {
    var ang = 0;

    //////////////////////////////////////////////////////
    p.setup = function() {
        p.createCanvas(200, 200);
        p.fill(255);

    }

    //////////////////////////////////////////////////////
    p.draw = function() {
        p.background(0);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(p.radians(ang));
        roue();
        p.pop();
        p.push();
        p.translate(48, 48);
        p.rotate(p.radians(-4 * ang));
        p.rectMode(p.CENTER);
        p.rect(0, 0, 16, 16);
        p.pop();
        if (ang >= 360) {
            ang = 0;
        } else {
            ang = ang + 1;
        }

    }

    function roue() {
        p.ellipse(0, 0, 20, 20);
        for (var i = 0; i < 8; i++) {
            p.rotate(p.radians(45 * i));
            p.rect(12, -5, 50, 10);
        }

    }
}

///////////////// Le constructeur
var roue = new p5(sketch1, "sketch1-holder");

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a11.html




var sketch2 = function(p) {
    var tabBalle = [];

    Balle = function() {
        this.x = p.floor(p.random(20, 380));
        this.y = p.floor(p.random(20, 380));
        this.rayon = 10;
        this.transp = p.floor(p.random(20, 50));
        this.vx = p.floor(p.random(-3, 3));
        this.vy = p.floor(p.random(-3, 3));
        this.couleur = {
            r: p.floor(p.random(0, 255)),
            v: p.floor(p.random(0, 255)),
            b: p.floor(p.random(0, 255))
        }
        this.deplacement = function() {
            if (this.x < this.rayon || this.x > 400 - this.rayon) {
                this.vx = -this.vx;
            }
            if (this.y < this.rayon || this.y > 400 - this.rayon) {
                this.vy = -this.vy;
            }
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
        }
        this.affichage = function() {
            p.fill(this.couleur.r, this.couleur.v, this.couleur.b, this.transp);
            p.ellipse(this.x, this.y, 2 * this.rayon, 2 * this.rayon);
        }
    }

    p.setup = function() {
        p.createCanvas(400, 400);
        for (i = 0; i < 100; i = i + 1) {
            tabBalle.push(new Balle());
        }
    }

    p.draw = function() {
        p.background(240);
        for (i = 0; i < tabBalle.length; i = i + 1) {
            tabBalle[i].deplacement();
            tabBalle[i].affichage();
        }
    }
}

var bulles = new p5(sketch2, "sketch2-holder");