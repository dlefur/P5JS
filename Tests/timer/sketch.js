var sec = 10;   // nb de secondes du compte à rebourds
var retard = 3; // nb de secondes du retard initial
var interval;   // identifiant du setInterval()
var col;        // couleur de fond
var date;       // identifiant du paragraphe de la date

function setup() {
    var canvas = createCanvas(400, 200);
    canvas.parent("sketch-holder");
    col = color(200);
    background(col);
    textAlign(CENTER);
    textSize(48);
    textStyle(BOLD);
    text("Attention !", width / 2, height / 2);
    date = createP("Bientôt l'heure ...");
    date.parent("date-holder");
    setTimeout(go, retard*1000);   // pour le retard initial
}


/////////////// au démarrage
function go() {
    background(col);
    text(str(sec), width / 2, height / 2);
    interval = setInterval(update, 1000);  // update toutes les secondes

}


/////////////// update
function update() {
    sec = sec - 1;
    background(col);
    text(str(sec), width / 2, height / 2);
    date.html(str(hour()).padStart(2, '0') + " : " + str(minute()).padStart(2, '0') + " : " + str(second()).padStart(2, '0'));
    //date.html(Date());
    if (sec == 0) {
        clearInterval(interval);
        background(col);
        date.html("Ciao !");
        text("Boom !", width / 2, height / 2);
    }

}

function draw() {

}