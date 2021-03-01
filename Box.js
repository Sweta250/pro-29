class Box
{
    constructor(x,y)
    {
        var options={
           restitution: 0.4
        }
        //this.x=x;
        //this.y=y;
        this.width=30
        this.height=40
        this.body=Bodies.rectangle(x,y,30,40,options);
        
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER);
        //fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}