let maBalle;
let tabBalles = [];
let nbBalles = 10;
////////////////////////////////
function setup() {
    var canvas = createCanvas(400, 500);
    canvas.parent("sketch-holder");
    background(200);
    stroke(0);
    fill(255, 0, 0);
    for (let i = 0; i < nbBalles; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 30);
        let maBalle = new Balle(width/2,height/2,r);
        maBalle.vel = p5.Vector.random2D().mult(random(15));
        //let maBalle = new Balle(0, height, 30);  pour tester un tir
        //maBalle.vel = createVector(25,-45);
        tabBalles.push(maBalle);
    }

}

function draw() {
    background(200);
    let vent = createVector(0.005, 0.01);
    for (let maBalle of tabBalles) {
        maBalle.applyGravity(1);   // gravite
        maBalle.applyDrag(1);      // viscosite
        //aBalle.applyFriction(1); // Friction (pas de sens ici)
        //maBalle.applyForce(vent); // vent
        maBalle.update();
        maBalle.edges();
        maBalle.show();
    }

}