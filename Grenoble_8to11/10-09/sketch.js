// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var str;
var tab;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  str="toto;titi;tata";
  tab=split(str,";");
  textAlign(CENTER);
  fill(255);
  text(tab[0],200,50);
  text(tab[1],200,100);
  text(tab[2],200,150);
  
}


function draw()
{
  
}

