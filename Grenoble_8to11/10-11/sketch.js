// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var phrase;
var tab;
var verlen="";

function setup()
{
  can=createCanvas(400,400);
  background(0);
  phrase="Il était une fois un petit chaperon rouge.";
  tab=split(phrase," ");
  //textAlign(CENTER);
  fill(255);
  for (var i=(tab.length-1); i>=0;i--)
  {
  	verlen=verlen+tab[i]+" ";

  }
  text(phrase,20,20);
  text(verlen,20,40);
  
}


function draw()
{
  
}
