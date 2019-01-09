// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Cercle au centre de la fenêtre


function setup()
{
  createCanvas(400,400);
  background(240);
  stroke(255,0,0);  // couleur du contour
  strokeWeight(5); // épaisseur
  fill(0,0,255); // couleur de l'intérieur
  cercle(width/2,height/2,200);
}


function draw()
{

}

// Fonction définissant le cercle
function cercle(x,y,r)
{
 ellipse(x,y,2*r,2*r); // largeur = hauteur = 2*r
}
