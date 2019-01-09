class BalleMemoire extends Balle {
    constructor(x, y, r) {
        super(x, y, r);
        this.target = createVector(x, y);
        this.maxSpeed = 5;
    }
    applySteering() {
        let desired = p5.Vector.sub(this.target, this.pos);
        let d = desired.mag();
        let speed = this.maxSpeed;
        if (d < 5) {
            //speed = map(d, 0, 100, 0, this.maxSpeed / 1000);
            speed = 0;
        } else
        if (d < 25) {
            speed = map(d, 0, 100, 0, this.maxSpeed / 100);
        } else
        if (d < 100) {
            speed = map(d, 0, 100, 0, this.maxSpeed / 10);
        } else {
            speed = map(d, 0, 100, 0, this.maxSpeed);
        }
        if ((d < 2) && (this.vel.mag() < 1)) {
            this.vel.mult(0.5);
        }

        desired.setMag(this.maxSpeed);
        let steering = p5.Vector.sub(desired, this.vel).mult(0.01);
        steering.limit(0.1);
        this.applyForce(steering);

    }

    applyOutMouse() {
        let mouse = createVector(mouseX, mouseY);
        let MousePos = p5.Vector.sub(this.pos, mouse);

        if (MousePos.mag() < 50) {
            MousePos.setMag(this.maxSpeed);
            let force = MousePos.mult(0.08);
            this.applyForce(force);
        }


    }
}