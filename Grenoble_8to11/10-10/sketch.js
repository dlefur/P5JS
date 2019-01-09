// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var phrase;
var tab;


function setup()
{
  can=createCanvas(400,400);
  background(0);
  phrase="Il était une fois un petit chaperon rouge.";
  tab=split(phrase," ");
  //textAlign(CENTER);
  fill(255);
  for (var i=0; i<tab.length;i++)
  {
  	text("Le mot nº"+i+" : "+tab[i],20,20+20*i);

  }
  
}


function draw()
{
  
}

