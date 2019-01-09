class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);  // position
        this.vel = createVector(0, 0);  // vitesse
        this.acc = createVector(0,0);   // acceleration
        this.mass = 1;
    }


    /////////////////// maj à chaque frame
    update() {
        this.vel.add(this.acc);  // maj de la vitesse
        this.pos.add(this.vel);  // maj de la position
        this.acc.mult(0);

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

    ////////////////////// application de la force
	applyForce (f) {
        let force=f.div(this.mass);
		this.acc.add(force);
	}

    /////////////////////// application de la gravite
    applyGravity(k) {
        let coef = 0.1;  // pour avoir des valeurs de k raisonnables (1)
        let vectorGravity=createVector(0,coef*k);
        vectorGravity.mult(this.mass);  // Newton : F=m.g
        this.applyForce(vectorGravity);
    }

    ////////////////////// application de la friction (contact)
    applyFriction(k) {
        let coef = 0.01;  // pour avoir des valeurs de k raisonnables (1)
        let vectorFriction = this.vel.copy();
        vectorFriction.normalize();
        vectorFriction.mult(-coef); // vecteur de direction opposé à la vitesse
        this.applyForce(vectorFriction);
    }

////////////////////// application de la viscosite
    applyDrag(k) {
        let coef = 0.01;  // pour avoir des valeurs de k raisonnables (1)
        let vectorDrag = this.vel.copy();
        vectorDrag.normalize();
        vectorDrag.mult(-coef); // vecteur de direction opposé à la vitesse
        vectorDrag.mult(this.vel.magSq()); // force poportionnelle á v2
        this.applyForce(vectorDrag);
    }


}