// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html


var msg;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  msg="Bonjour le monde!";
  textAlign(CENTER);
  fill(255);
  text("Tous les caractères sont en minuscule : "+msg.toLowerCase(),200,50);
  text("Tous les caractères sont en majuscule : "+msg.toUpperCase(),200,150);
}


function draw()
{
  
}
