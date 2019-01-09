// http://www.ac-grenoble.fr/disciplines/informatiquelycee/p5_base_a11.html


Balle=function(){
    this.x=floor(random(20,380));
    this.y=floor(random(20,380));
    this.rayon=10;
    this.transp=floor(random(20,50));
    this.vx=floor(random(-3,3));
    this.vy=floor(random(-3,3));
    this.couleur={r:floor(random(0,255)),v:floor(random(0,255)),b:floor(random(0,255))}
    this.deplacement=function(){
        if (this.x<this.rayon || this.x>400-this.rayon){
            this.vx=-this.vx;
        }
        if (this.y<this.rayon || this.y>400-this.rayon){
            this.vy=-this.vy;
        }
        this.x=this.x+this.vx;
        this.y=this.y+this.vy;
    }
    this.affichage=function(){
       fill(this.couleur.r,this.couleur.v,this.couleur.b,this.transp);
       ellipse(this.x,this.y,2*this.rayon,2*this.rayon);
    }
}
var tabBalle=[];
function setup(){
  createCanvas(400,400);
  for (i=0;i<100;i=i+1){
      tabBalle.push(new Balle());
  }
}
function draw(){
  background(240);
  for (i=0;i<tabBalle.length;i=i+1){
      tabBalle[i].deplacement();
      tabBalle[i].affichage();
  }
}
