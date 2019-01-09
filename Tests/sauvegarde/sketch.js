var slider;
var taille;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    //console.log(canvas.parent);

    taille = 0.8 * width;
    slider = createSlider(1, 200, 5);
    //slider.position(width/2-40, height/2);
    slider.position(600, 300);
    slider.style('width', '80px');
    background(200);
    stroke(255, 0, 255);
    //noFill();
    fill(0, 255, 255);
    //var k=0.3;
    //quad(k*width,height,width,height-k*height,width-k*width,0,0,k*height);	

}

function draw() {
    background(200);
    var pas = slider.value();
    translate(0.1 * taille, 0.2 * taille);
    for (var k = 0; k <= 0.5; k = k + 1 / pas) {
        quad(k * taille, taille, taille, taille - k * taille, taille - k * taille, 0, 0, k * taille);
    }
}

// sauvegarde quand on appuie sur s ou S
function keyTyped() {
    if (key == 's' || key == 'S') save("image_p5js.png");
}