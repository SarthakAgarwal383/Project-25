class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.angle= 0;
        World.add(world,this.body);
    }
display(){

    var p= this.body.position;
    push();
    rectMode(CENTER);
    translate(p.x,p.y);
    rotate(-1*this.angle);
    fill("green");
    rect(this.image,0,0,this.width,this.height);
    pop();
}
}