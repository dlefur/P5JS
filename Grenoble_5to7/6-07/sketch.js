// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a6.html
// animation : disque rouge rebondissant sur un bord

var xR;
var yR;
var vR;

var xV;
var yV;
var vV;
var rayon;
var angR;
var angV;

var test= true;

///////////////////////////////////////////////////////////////////////
function setup()
{
  createCanvas(400,400);
  noStroke();
  vR=5;
  vV=5;
  rayon=20;
  
  xR=random(rayon,width-rayon);
  yR=random(rayon,height-rayon);
  angR=random(0,TWO_PI);

  xV=random(rayon,width-rayon);
  yV=random(rayon,height-rayon);
  angV=random(0,TWO_PI);
  
  frameRate(60); // frame par seconde
}


///////////////////////////////////////////////////////////////////////
function draw()
{
  cadre();
  if (test==true)
  {  
    if (ecart()<2*rayon)
    {
      test=false; 
      cadre();
    }
    else
    { 
      cadre();
  		boule("R");
  		boule("V");
    }
  }
}


///////////////////////////////////////////////////////////////////////
function ecart()
{
  var d=sqrt( (xR-xV)*(xR-xV)+(yR-yV)*(yR-yV) );
  return d;
}


///////////////////////////////////////////////////////////////////////
function boule(couleur)
{
  if (couleur=="R")
  { 
    push();
    fill(255,0,0);
    ellipse(xR,yR,rayon,rayon);
    pop();
  	if ((xR<rayon/2) || (xR>width-rayon/2))
  	{
  		angR=PI-angR;
  	}
  	if ((yR<rayon/2) || (yR>height-rayon/2)) 
  	{
  		angR=PI-angR;
    	vR=-vR;
  	} 
  	xR=xR+vR*cos(angR);
  	yR=yR+vR*sin(angR);
  }
  else
  {  
    push();
    fill(0,255,0);
    ellipse(xV,yV,rayon,rayon);
    pop();
  	if ((xV<rayon/2) || (xV>width-rayon/2))
  	{
  		angV=PI-angV;
  	}
  	if ((yV<rayon/2) || (yV>height-rayon/2)) 
  	{
  		angV=PI-angV;
    	vV=-vV;
  	} 
  	xV=xV+vV*cos(angV);
  	yV=yV+vV*sin(angV);
  }
  
}


///////////////////////////////////////////////////////////////////////
function cadre()
{
  background(240);
  push();
  stroke(0,0,0);
  strokeWeight(5);
  noFill();
  rect(0,0,width,height);
  pop();
}
