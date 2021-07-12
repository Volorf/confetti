class Particle 
{
    constructor(loc, model)
    {
        this.x = loc.x
        this.y = loc.y
        this.z = loc.z
      
      this.rotStep = 0.04
      this.rotAcc = 0.0003
      this.rotDirX = random([-1, 1])
      this.rotDirY = random([-1, 1])
      this.rotDirZ = random([-1, 1])
      this.randRotX = random(TWO_PI)
      this.randRotY = random(TWO_PI)
      this.randRotZ = random(TWO_PI)


      this.locStep = 1
      this.locAcc = 0.01
      this.locDirX = random([-1, 1])
      this.locDirY = random([-1, 1])

        this.locZMultiplier = random(3, 5)

        this.model = model
      
    //   print(this.randRotX) 
    }

    draw() 
    {
      // Rot easings
      if (this.rotStep >=0) 
      {
          this.randRotX += this.rotStep * this.rotDirX
          this.randRotY += this.rotStep * this.rotDirY
        //   this.randRotZ += this.rotStep * this.rotDirZ
          
          this.rotStep -= this.rotAcc
      }

      // Loc easings
      if (this.locStep >= 0)
      {
        this.locStep -= this.locAcc

        this.x += this.locStep * this.locDirX
        this.y += this.locStep * this.locDirY
        this.z += this.locStep * this.locZMultiplier
      }

      push()
      translate(this.x, this.y, this.z)
      rotateX(this.randRotX)
      rotateY(this.randRotY)
    //   rotateZ(this.randRotZ)
      fill(255)
    //   plane(20,20,20)
    // ambientLight(0);
        noStroke()
        // emissiveMaterial(130, 230, 0);
        ambientMaterial(10, 0, 10)
        model(this.model)
        pop()
    }
  
}