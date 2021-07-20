class Particle 
{
    constructor(loc, model)
    {
        this.x = loc.x;
        this.y = loc.y;
        this.z = loc.z;
      
        this.rotStep = 0.04;
        this.rotAcc = 0.0003;
        this.rotDirX = random([-1, 1]);
        this.rotDirY = random([-1, 1]);
        this.rotDirZ = random([-1, 1]);
        this.randRotX = random(TWO_PI);
        this.randRotY = random(TWO_PI);
        this.randRotZ = random(TWO_PI);
    
        this.scale = 0;
        this.scaleStep = 0.05;

        this.explosionSpeed = 0.7;
        this.airResistance = 0.004;
        this.brownianMotionOffsetX = random([-1, 1]);
        this.brownianMotionOffsetY = random([-1, 1]);
        this.brownianMotionOffsetZ = random(15, 16);

        this.model = model;
    }

    draw() 
    {
        // Rot easings
        if (this.rotStep >=0) 
        {
            this.randRotX += this.rotStep * this.rotDirX;
            this.randRotY += this.rotStep * this.rotDirY;
            this.rotStep -= this.rotAcc;
        }

        // Loc easings
        if (this.explosionSpeed >= 0)
        {
            this.explosionSpeed -= this.airResistance;

            this.x += this.explosionSpeed * this.brownianMotionOffsetX;
            this.y += this.explosionSpeed * this.brownianMotionOffsetY;
            this.z += this.explosionSpeed * this.brownianMotionOffsetZ;
        }

        if (this.scale <= 1)
        {
            this.scale += this.scaleStep;
        }

        push();
        
        noStroke();
        ambientMaterial(10, 10, 10);
        
        translate(this.x, this.y, this.z);
        rotateX(this.randRotX);
        rotateY(this.randRotY);
        scale(this.scale);

        model(this.model);
        
        pop();
    }
  
}