// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var msg;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  msg="Bonjour le monde!";
  nb=msg.length;
  textAlign(CENTER);
  fill(255);
  text("La chaîne '"+msg+"' est constituée de "+nb+" caractères",200,100)
}


function draw()
{
}
