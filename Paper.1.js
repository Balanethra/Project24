class Paper { 
   constructor(circle){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
   }
    Matter.Bodies.circle(x,y,radius,options,MaxSlides)
    World.add(world,Matter.Bodies.circle);
}
display();
