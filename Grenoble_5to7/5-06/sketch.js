// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a5.html
// roue


function setup()
{
  createCanvas(200,200);
  background(240);
  translate(width/2,height/2);
  for(var i=0;i<8;i++)
  {
    rotate(radians(45*i));
    rect(12,-5,50,10);
  }

}


function draw()
{

  
}
