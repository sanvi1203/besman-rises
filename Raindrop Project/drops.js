class Drops{
    constructor(x,y) {
        var options = {
            restitution:0.4,
            friction : 0.1,
         }
         this.radius = 10;
     
         this.body = Bodies.circle(x, y,10,options);       
         World.add(world, this.body);
    }
    updateY() {
        if(this.body.position.y > height) {
              Mater.Body.setPosition(this.drops,{ x: random(0,400), y: random(0,400)})
            }
    }

    showDrop() {
        fill("blue")
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}
