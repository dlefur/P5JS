// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Dessin d'un quadrilatère aléatoire


function setup()
{
  createCanvas(400,400);
  background(240);
  stroke(255,0,0);  // couleur du contour
  strokeWeight(5); // épaisseur
  fill(0,0,255); // couleur de l'intérieur
  
  var xA=random(0,width/2);
  var yA=random(0,height/2);
  
  var xB=random(0,width/2);
  var yB=random(height/2,height);
  
  var xC=random(width/2,width);
  var yC=random(height/2,height);
  
  var xD=random(width/2,width);
  var yD=random(0,height/2);
  
  quad(xA,yA,xB,yB,xC,yC,xD,yD);
}


