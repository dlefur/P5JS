// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a9.html
// textes

function setup()
{
  createCanvas(400,400);
  background(240);
  fill(0);

  textAlign(CENTER); // ancrage au centre

  
  for (var i=1; i<=100 ; i++)
  {
    push();
    textSize(floor(random(6,36)));
    rotate(radians(random(0,360)));
    translate(random(0,width),random(0,height));
    text("Hello World !",0,0);
    pop();
  }
}


function draw()
{
  
}
