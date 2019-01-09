var latSP = -23.543770;
var longSP = -46.6317314;

var latMairinque = -23.595633;
var longMairinque = -46.638402;

var latDiderot = -23.592486;
var longDiderot = -46.629673;

var latParis = 48.856614;
var longParis = 2.3522219;

//var url_init = "https://api.mapbox.com/styles/v1/mapbox/light-v9/static/";
var url_init = "https://api.mapbox.com/styles/v1/dlefur/cjqgup5dpl64w2rlaeiv3tajj/static/";
var latCarte = latDiderot;
var longCarte = longDiderot;

var zoom = 1.;
var hauteur = 512; //puissance de 2
var largeur = 2 * hauteur;

var api_key = "?access_token=pk.eyJ1IjoiZGxlZnVyIiwiYSI6ImNqcWZ2eXU4ZDAyc2E0MnBzeXh6dGhyazcifQ.F9Pk1LwWCm6ywdq71UtCFQ";
var url = url_init + longCarte + "," + latCarte + "," + zoom + ",0,0/" + largeur + "x" + hauteur + api_key;
var carte;

var okPays = false;

var dataVilles;
var indexCapitale = -1;

function preload() {

    carte = loadImage(url);
    dataVilles = loadTable("../CSV/country-capitals.csv", "csv", "header");
}


function setup() {
    var canvas = createCanvas(largeur, hauteur);
    canvas.parent("sketch-holder");
    canvas.mousePressed(centrerCarte);
    canvas.mouseWheel(changerZoom);


    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(carte, 0, 0);


    //setInterval(centrerCapitale, 5000);

}

function majCarte() {
    url = url_init + longCarte + "," + latCarte + "," + zoom + ",0,0/" + largeur + "x" + hauteur + api_key;
    carte = loadImage(url);
}


function changerZoom() {
    if (event.deltaY < 0) {
        zoom = zoom + 1;
        if (zoom > 18) {
            zoom = 18;
        }
    } else {
        zoom = zoom - 1;
        if (zoom <= 1) {
            zoom = 1;
        }
    }

    majCarte();
}

function keyPressed() {
    indexCapitale = floor(random(dataVilles.getRowCount()))
    var latitude = dataVilles.get(indexCapitale, "CapitalLatitude");
    var longitude = dataVilles.get(indexCapitale, "CapitalLongitude");
    latCarte = latitude;
    longCarte = longitude;
    centrerCarte();
    okPays = false;
    setTimeout(attendrePays, 5000);
}

function attendrePays() {
    okPays = true;
}

function centrerCarte() {
    var cx = mercatorX(longCarte);
    var cy = mercatorY(latCarte);
    var reLat = inverseMercatorY(cy + mouseY - height / 2);
    var reLong = inverseMercatorX(cx + mouseX - width / 2);
    latCarte = constrain(reLat, -80, 80);
    longCarte = constrain(reLong, -160, 160);
    majCarte();
}

function dessinerPosition(lat, lon, size) {
    var cx = mercatorX(longCarte);
    var cy = mercatorY(latCarte);
    var x = mercatorX(lon) - cx;
    var y = mercatorY(lat) - cy;

    ellipse(x, y, size, size);

}

function dessinerNomCapitale() {
    if (indexCapitale != -1) {
        var cx = mercatorX(longCarte);
        var cy = mercatorY(latCarte);
        var latitude = dataVilles.get(indexCapitale, "CapitalLatitude");
        var longitude = dataVilles.get(indexCapitale, "CapitalLongitude");
        var x = mercatorX(longitude) - cx;
        var y = mercatorY(latitude) - cy;

        var nomPays = dataVilles.get(indexCapitale, "CountryName");
        text("Pays : " + nomPays, x + 20, y + 20);

    }
}

function mercatorX(lon) {
    lon = radians(lon);
    var a = (largeur / (4 * PI)) * pow(2, zoom);
    var b = lon + PI;
    return a * b;
}

function mercatorY(lat) {
    lat = radians(lat);
    var a = (largeur / (4 * PI)) * pow(2, zoom);
    var b = PI - log(tan((PI / 4) + (lat / 2)));
    return a * b;
}

function inverseMercatorX(x) {
    var a = (largeur / (4 * PI)) * pow(2, zoom);
    return degrees(x / a - PI);
}

function inverseMercatorY(y) {
    var a = (largeur / (4 * PI)) * pow(2, zoom);
    var b = 2 * atan(exp(PI - y / a)) - PI / 2;
    return degrees(b);
}


function draw() {
    background(200);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(carte, 0, 0);

    fill(255, 0, 255);
    dessinerPosition(latSP, longSP, 20);
    dessinerPosition(latMairinque, longMairinque, 20);
    dessinerPosition(latDiderot, longDiderot, 20);
    dessinerPosition(latParis, longParis, 20);

    if (okPays == true) {
        dessinerNomCapitale();
    }


    for (var i = 0; i < dataVilles.getRowCount(); i++) {

        var latitude = dataVilles.get(i, "CapitalLatitude");
        var longitude = dataVilles.get(i, "CapitalLongitude");
        var name = dataVilles.get(i, "CapitalName");
        push();
        stroke(255);
        fill(0, 0, 255);
        dessinerPosition(latitude, longitude, 10);
        pop();
    }

}