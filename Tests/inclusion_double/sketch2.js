// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// roue qui tourne avec un carré

var sketch1 = function(p) {
    var ang = 0;

    p.setup = function() {
        p.createCanvas(200, 200);
        p.fill(255);

    }


    p.draw = function() {
        p.background(0);
        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.rotate(p.radians(ang));
        roue();
        p.pop();
        p.push();
        p.translate(48, 48);
        p.rotate(p.radians(-4 * ang));
        p.rectMode(p.CENTER);
        p.rect(0, 0, 16, 16);
        p.pop();
        if (ang >= 360) {
            ang = 0;
        } else {
            ang = ang + 1;
        }

    }

    function roue() {
        p.ellipse(0, 0, 20, 20);
        for (var i = 0; i < 8; i++) {
            p.rotate(p.radians(45 * i));
            p.rect(12, -5, 50, 10);
        }

    }
}

var roue = new p5(sketch1, "sketch1-holder");