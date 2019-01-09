var song;
var volume=0.3;
var sliderRate;
var pRate;
var sliderPan;
var pPan;
var buttonStop;
var buttonImage;


function preload () {
	buttonImage = loadImage("../Images/play_pause.png");
}

function setup() {
	song= loadSound("../Audios/Diogo.mp3");

    var canvas = createCanvas(100, 100);
    canvas.parent("sketch-holder");
    background(150);
    image(buttonImage,0,0,width,height);
    canvas.mousePressed(playPause);


    sliderRate=createSlider(0.5,1.5,1,0.05);
    sliderRate.parent("sliderRate-holder");
    sliderRate.changed(changeRate);
    pRate=createP("Vitesse : " + sliderRate.value());
    pRate.parent("sliderRate-holder");


    sliderPan=createSlider(-1,1,0,0.1);
    sliderPan.parent("sliderPan-holder");
    sliderPan.changed(changePan);
    pPan=createP("Gauche / Droite : " + sliderPan.value());
    pPan.parent("sliderPan-holder");


    buttonStop = createButton("Stop");
    buttonStop.parent("button-holder");
    buttonStop.mousePressed(stop);

    
    

}

function playPause () {
	if (song.isLoaded()) {
		if (song.isPlaying()) {
			song.pause();
		} else {
			song.play();
			song.setVolume(volume);
		}	
	}
}

function stop () {
	if (song.isLoaded()) {
		if (song.isPlaying()) {
			song.stop();
		} 	
	}
}



function keyPressed () {
	if (keyCode == UP_ARROW) {
		volume=volume+0.1;
		if (volume>1) {
			volume=1;
		}
		song.setVolume(volume);
	}
	if (keyCode == DOWN_ARROW) {
		volume=volume-0.1;
		if (volume<0) {
			volume=0;
		}
		song.setVolume(volume);
	}
}

function changeRate() {
	song.rate(sliderRate.value());
	pRate.html("Vitesse : " + sliderRate.value());
}

function changePan() {
	song.pan(sliderPan.value());
	pPan.html("Gauche / Droite : " + sliderPan.value());
}




function draw() {

}