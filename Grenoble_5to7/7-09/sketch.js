// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a7.html
// pour dessiner

function setup(){
  createCanvas(300,300);
  background(240);
}
function draw() {

}

function mouseDragged()
{
  line(pmouseX,pmouseY,mouseX,mouseY);
}
  
function keyPressed()
{
  background(240);
}
