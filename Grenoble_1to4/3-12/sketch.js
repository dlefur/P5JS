// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Dessin d'un arc de cercle au centre


function setup()
{
  createCanvas(400,400);
  background(240);
  stroke(0);  // couleur du contour
  strokeWeight(1); // épaisseur
  fill(255); // couleur de l'intérieur
  
  arc(200,200,100,100,radians(45),radians(315));
}


function draw()
{

  
}
