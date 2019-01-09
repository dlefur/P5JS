// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Dessin d'un carré au centre de la fenêtre


function setup()
{
  createCanvas(400,400);
  background(240);
  stroke(255,0,0);  // couleur du contour
  strokeWeight(5); // épaisseur
  fill(0,0,255); // couleur de l'intérieur
  
  carre(width/2,height/2,100);
}


function draw()
{

  
}

// Dessin d'un carré
function carre(x,y,c) // centre  x y, côté
{
  rect(x-c/2,y-c/2,c,c); 
}

