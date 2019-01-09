var img;
var tailleCarre = 16;
var facteur = 10;
var time = 2000;
var timer;

function preload() {
    //img=loadImage("../Images/tux.jpg");
    img = loadImage("../Images/einstein.jpeg");
}

function setup() {
    createCanvas(199, 253);
    noStroke();
    image(img, 0, 0);
    loadPixels();
    background(0);
    rectMode(CENTER);
    timer=setInterval(changeSize, time);

}

function changeSize() {
    tailleCarre = tailleCarre-2;
    facteur = facteur * 2;
    if (tailleCarre < 1) {
    	tailleCarre=1;
        clearInterval(timer);
    }

}


function draw() {
    for (k = 0; k < facteur; k++) {
        var x = floor(random(width));
        var y = floor(random(height));
        var i = (x + y * width) * 4;
        var ro = pixels[i];
        var ve = pixels[i + 1];
        var bl = pixels[i + 2];
        fill(ro, ve, bl, 100);
        rect(x, y, tailleCarre, tailleCarre);
    }
}