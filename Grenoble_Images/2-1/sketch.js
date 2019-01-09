// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_Img_a2.html
// couleurs

var maCouleur;

function setup() 
{
  createCanvas(300,300);
  maCouleur=color(242,126,98);
  fill(maCouleur);
  ellipse(150,150,100,200);
  fill("blue");
  console.log(red(maCouleur))
  text("Rouge : "+red(maCouleur),10,30);
  text("Vert : "+green(maCouleur),10,60);
  text("Bleu : "+blue(maCouleur),10,90);
}

function draw()
{
  
}
