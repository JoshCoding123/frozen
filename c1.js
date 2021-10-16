class c1 {
    constructor(object, point){
        var options = {
            bodyA: object,
            pointB: point,
            stiffness: 0.01,
            length: 10
        }
        this.pointB = point
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
         line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
    }


}