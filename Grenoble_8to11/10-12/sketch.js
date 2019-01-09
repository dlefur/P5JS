// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a10.html

var str;
var tab;

function setup()
{
  can=createCanvas(400,200);
  background(0);
  str="toto titi,tata;tutu! hello";
  tab=splitTokens(str," ;,!");
  textAlign(CENTER);
  fill(255);
  for (i=0;i<tab.length;i=i+1)
  {
    text(tab[i],200,20+20*i);
  }
}


function draw()
{
  
}

