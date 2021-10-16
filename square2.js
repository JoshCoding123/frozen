class square2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      push()
      translate(pos.x,pos.y)
      rotate (this.body.angle)
      fill("red");
      rect(0,0, this.width, this.height);
      pop()
    }
  };