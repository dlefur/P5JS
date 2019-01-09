class Balle extends Mover{
    constructor(x, y, r) {
        super(x,y);
        this.r = r;                     // rayon
        this.mass = r*r/400;

    }


    /////////////////// tests aux bords
    edges() {

        let amort=0.8 ; // coef d'amortissement

    	///////////////////////////////// bord bas
        if (this.pos.y > height-this.r) {
            this.vel.y = -this.vel.y;
            this.pos.y = height - this.r;
            this.vel.mult(amort);
        }
        ///////////////////////////////// bord haut
        if (this.pos.y < this.r) {
            this.vel.y = -this.vel.y;
            this.pos.y = this.r;
            this.vel.mult(amort);
        }
        ///////////////////////////////// bord droite
        if (this.pos.x > width-this.r) {
            this.vel.x = -this.vel.x;
            this.pos.x = width - this.r;
            this.vel.mult(amort);
        }
        ///////////////////////////////// bord gauche
        if (this.pos.x < this.r) {
            this.vel.x = -this.vel.x;
            this.pos.x = this.r;
            this.vel.mult(amort);
        }
    }



    /////////////////////// affichage
    show() {
        ellipse(this.pos.x, this.pos.y, 2 * this.r, 2 * this.r);
    }
}