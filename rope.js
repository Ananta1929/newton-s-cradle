class rope
{
    constructor(bodyA,bodyB,offsetX,offsetY)
    {
        this.offsetX:offsetX
        this.offsetY:offsetY
        var options  ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.004,
            length:10
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}