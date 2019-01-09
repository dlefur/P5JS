// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var msg;

function setup()
{
  can=createCanvas(600,200);
  background(0);
  msg="Bonjour le monde!";
  textAlign(CENTER);
  fill(255);
  text("Caractères à partir de l'indice 10 jusqu'à la fin de la chaîne : "+msg.substring(10),300,50);
  text("Caractères de l'indice 0 à l'indice 6 : "+msg.substring(0,7),300,150);
}


function draw()
{
  
}

 
