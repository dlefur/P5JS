// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a8.html
// touche enfoncée r, v b

function setup()
{
  createCanvas(200,200);
  stroke(0);
  fill(255);
}


function draw()
{
  background(240);
  translate(width/2,height/2);
  rectMode(CENTER);
  rect(0,0,100,100);
}

function keyPressed()
{
  //console.log(key);
  if ((key=='r') || (key=='R'))   //r(keyCode == 82 )
  {
    fill(255,0,0); 
  }
  else
  if ((key=='v') || (key=='V'))   //(keyCode == 86 )
  {
    fill(0,255,0); 
  }
  else
  if ((key=='b') || (key=='B'))   //(keyCode == 66 )
  {
    fill(0,0,255); 
  }

  
}


function keyReleased()
{
  fill(255);
}
