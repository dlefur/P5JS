// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var msg;
var c;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  msg="Bonjour le monde!";
  c=msg.charAt(3)
  textAlign(CENTER);
  fill(255);
  text("Le 4e caractère de la chaîne '"+msg+"' est un "+c,200,100)
}


function draw()
{
  
}
     
