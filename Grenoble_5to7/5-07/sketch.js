// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a5.html
// push pop


function setup()
{
  createCanvas(200,200);
  background(240);
  translate(80,30);
  fill(255,0,0);
  rect(60,50,20,20);
  push();
  translate(0,50);
  fill(0,255,0);
  rect(60,50,20,20);
  pop();
  fill(0,0,255);
  rect(80,50,20,20);

}


function draw()
{
  
}
