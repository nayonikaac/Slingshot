class Slingshot {
    constructor(bodyA,bodyB){
    var options = {bodyA:bodyA, bodyB:bodyB, stiffness:0.3, length:20}
    this.chain= Constraint.create(options);
    World.add(world, this.chain);

    }
display(){
var birdBody= this.chain.bodyA.position;
var log6Body=this.chain.bodyB.position;
strokeWeight(5);
line(birdBody.x,birdBody.y,log6Body.x,log6Body.y);
}
}