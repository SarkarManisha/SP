class Package{

    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:0.3,
            density:0.2,
            isStatic:true
        }
        this.image = loadImage("package.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body)

    }

    display(){
        var abc = this.body.position;
        var angle = this.body.angle;
        push();
        translate(abc.x,abc.y)
        rotate(angle);
        imageMode(CENTER);
        //fill(255);
        image(this.image,0,0,this.width,this.height)
        pop();
       

    }

}