// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a3.html
// Dessin de 100 disques aléatoires


function setup()
{
  createCanvas(400,400);
  background(240);
  noStroke();
  fill(0,255,0);
  for (var i=1;i<=100;i++)
  {
    var x=random(0,width);
    var y=random(0,height);
    var r=random(0,255);
    var g=random(0,255);
    var b=random(0,255);
    var taille=random(20,50);
    var transp=random(0,200);
    
  	fill(r,g,b,transp); 
  	ellipse(x,y,taille,taille);
  }
}


function draw()
{

}
