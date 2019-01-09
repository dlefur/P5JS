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