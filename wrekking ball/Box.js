class Box  {
  constructor(x, y, width, height){
   
var options= {

  'restitution':0.8,
  'density':0.04,
  'friction':1.0,
}

  this.body=Bodies.rectangle(x,y,width,height,options)

this.width=width;
this.height=height;

World.add(world,this.body);

}
display(){
    var angle =this.body.angle;
    rectMode(CENTER);
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("black");
    fill("brown");
   rect(0,0,this.width,this.height);
   pop();
  }



  }



