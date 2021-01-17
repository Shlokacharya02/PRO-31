class Ground{

  constructor(x,y,w,h){
      var ground_options={
          isStatic : true
        }


      
        this.ground = Bodies.rectangle(x,y,w,h,ground_options);
        this.width = w;
        this.height = h;
        World.add(world,this.ground);
  }
  display(){
      noStroke();
      fill(188,67,67);
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
  }
}