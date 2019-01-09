// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a2.html
// Ligne en deux couleurs
// For et if imposés

function setup() 
{
  createCanvas(800,600);
  background(240);
}

function draw() 
{
  for(var i=1;i<=2;i=i+1)
  {
   if (i==1)
   {
     stroke(100);
     line(0,height/2,width/2,height/2); 
   }
    else
    {
      stroke(255,0,0);
     line(width/2,height/2,width,height/2); 
    }
  }

}
