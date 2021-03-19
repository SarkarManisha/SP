class Helicopter{


    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.image = loadImage("helicopter.png");
        this.body = Bodies.rectangle(x,y,250,250,options)
        this.width = 250;
       this.height = 250;
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill("red");
        stroke("blue");
        strokeWeight(4);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}