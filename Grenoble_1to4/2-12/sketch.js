// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a2.html
// Drapeau français

function setup() 
{
  createCanvas(400, 400);
  noStroke(); // pas de contour
}

function draw() 
{
  // rectangle rouge
  fill(255,0,0); 
  rect(0,0,width/3,height);
  // rectangle blanc
  fill(255,255,255);
  rect(width/3,0,width/3,height);
  // rectangle bleu
  fill(0,0,255);
  rect(2*width/3,0,width/3,height);
  
}
