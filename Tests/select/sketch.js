var song;
var volume = 0.3;
var sliderRate;
var pRate;
var sliderPan;
var pPan;
var buttonStop;
var buttonPlay;



function setup() {
    noCanvas();

    song = loadSound("../Audios/Diogo.mp3"); // chargement du son

    buttonPlay = select("#buttonPlay"); // bouton créé dans le HTML
    buttonPlay.mousePressed(playPause);

    buttonStop = select("#buttonStop"); // bouton créé dans le HTML
    buttonStop.mousePressed(stop);

    sliderRate = select("#sliderRate"); // slider créé dans le HTML
    sliderRate.changed(changeRate);

	sliderPan = select("#sliderPan"); // slider créé dans le HTML
    sliderPan.changed(changePan);



    pRate = select("#pRate");  // paragraphe créé dans le html
    pRate.html("Vitesse : " + sliderRate.value());

    pPan = select("#pPan");  // paragraphe créé dans le html
    pPan.html("Gauche / Droite : " + sliderPan.value());

}

/////////////////////// fonction play pause
function playPause() {
    if (song.isLoaded()) {
        if (song.isPlaying()) {
            song.pause();
        } else {
            song.play();
            song.setVolume(volume);
        }
    }
}

//////////////////////  fonction stop
function stop() {
    if (song.isLoaded()) {
        if (song.isPlaying()) {
            song.stop();
        }
    }
}


///////////////////// fonction pour le volume
function keyPressed() {
    if (keyCode == UP_ARROW) { // augmenter
        volume = volume + 0.1;
        if (volume > 1) {
            volume = 1;
        }
        song.setVolume(volume);
    }
    if (keyCode == DOWN_ARROW) { // baisser
        volume = volume - 0.1;
        if (volume < 0) {
            volume = 0;
        }
        song.setVolume(volume);
    }
}

///////////////////// fonction de changement de vitesse
function changeRate() {
    song.rate(sliderRate.value());
    pRate.html("Vitesse : " + sliderRate.value());
}

///////////////////// fonction de changement de balance
function changePan() {
    song.pan(sliderPan.value());
    pPan.html("Gauche / Droite : " + sliderPan.value());
}




function draw() {

}