let font;
let coefGravity = 0;
let isSteering=false;
let tabBalles = [];

function preload() {
    font = loadFont("../Fonts/ComicJensFreePro-Regular.ttf");
}

////////////////////////////////
function setup() {
    var canvas = createCanvas(600, 400);
    canvas.parent("sketch-holder");
    background(0);
    //stroke(0);
    noStroke();
    textFont(font);
    textSize(192);
    text("Maya", width / 2, 200);
    var points = font.textToPoints("Maya", 100, 200);
    for (let p of points) {
        let x = p.x;
        let y = p.y;
        let maBalle = new BalleMemoire(x, y, 7);
        maBalle.vel = p5.Vector.random2D().mult(1);
        maBalle.pos.x=random(width);
        maBalle.pos.y=random(height);
        maBalle.mass=1;
        tabBalles.push(maBalle);
    }

}



function keyPressed() {
    if ((key == "g") || (key == "G")) {
        coefGravity = 1;
    }
    if ((key == "h") || (key == "H")) {
        coefGravity = 0;
    }
    if ((key == "s") || (key == "S")) {
        isSteering=true;
    }
    if ((key == "d") || (key == "D")) {
        isSteering=false;
    }

}

function draw() {
    background(0);

    for (let maBalle of tabBalles) {
        maBalle.applyGravity(coefGravity); // gravite
        maBalle.applyDrag(1); // viscosite
        if (isSteering==true){
        	maBalle.applySteering();
        }
        maBalle.applyOutMouse();
        maBalle.update();
        maBalle.edges();
        maBalle.show();

    }
}