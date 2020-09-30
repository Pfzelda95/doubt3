class Ball{
    constructor() {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.3

        }
        this.body = (width/2 , 200 , 5 , {restitution:0.5, isStatic:false,friction:0.3});
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       this.body = ellipse(200,200,30);
        
        
        
     }
}