// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var phrase="Bonjour*le*monde.";
var str;
var tab;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  tab=split(phrase,"*");
  str=join(tab," ");
  fill(255);
  text("Avant : "+phrase,20,20);
  text("Après : "+str,20,40);
}


function draw()
{
  
}
