// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html


var msg1;
var msg2;
var msg;

function setup(){
  can=createCanvas(600,200);
  background(0);
  msg1="Bonjour le monde!";
  msg2="Bonjour le monde";
  msg="Les chaines de caractères '"+msg1+"' et '"+msg2+"' sont";
  textAlign(CENTER);
  fill(255);
  if (msg1==msg2)
  {
    text(msg+ " identiques",300,100); 
  }
  else
  {
    text(msg+ " différentes",300,100);
  }
}

function draw()
{
  
}
     
