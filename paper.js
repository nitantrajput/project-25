class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          density : 1.4,
          friction : 0.2,
          restitution : 0.5
      }
      this.body = Bodies.circle(x, y, radius/2, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };