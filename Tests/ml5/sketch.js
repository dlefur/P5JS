
var modele;
// Start by drawing
var previous_pen = 'down';
// Current location of drawing
var x, y;
// The current "stroke" of the drawing
var strokePath;

function setup() {
    createCanvas(640, 480);
    background(220);
    // Load the model
    // See a list of all supported models: https://github.com/ml5js/ml5-library/blob/master/src/SketchRNN/models.js
    modele = ml5.SketchRNN('cat', modelReady);

    // Button to start drawing
    let button = select('#clear');
    button.mousePressed(startDrawing);
}

// Reset the drawing
function startDrawing() {
    background(220);
    // Start in the middle
    x = width / 2;
    y = height / 2;
    modele.reset();
    // Generate the first stroke path
    modele.generate(gotStroke);
}

function draw() {
    // If something new to draw
    if (strokePath) {
        // If the pen is down, draw a line
        if (previous_pen == 'down') {
            stroke(0);
            strokeWeight(3.0);
            line(x, y, x + strokePath.dx, y + strokePath.dy);
        }
        // Move the pen
        x += strokePath.dx;
        y += strokePath.dy;
        // The pen state actually refers to the next stroke
        previous_pen = strokePath.pen;

        // If the drawing is complete
        if (strokePath.pen !== 'end') {
            strokePath = null;
            modele.generate(gotStroke);
        }
    }
}

// A new stroke path
function gotStroke(err, s) {
    strokePath = s;
}

// The model is ready
function modelReady() {
    select('#status').html('model ready');
    startDrawing();
}