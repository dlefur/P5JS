// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Dessin d'un motif


function setup()
{
  createCanvas(400,400);
  background(240);
  stroke(0,0,0);  // couleur
}


function draw()
{
  var nb_lignes=80;
  var ecart=width/nb_lignes;
  //lignes allant du haut vers le bas
  for (var i=0;i<=nb_lignes;i++)
  {
    line(i*ecart,0,width-i*ecart,height);
  }
}
