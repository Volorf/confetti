let boxes = []
const PARTICLE_AMOUNT = 50
const LOC_MARGIN = 100

let cameraXOffset = 0
let cameraYOffset = 0

let models =[]

function preload() {
  // let m1 = loadModel('models/m1.obj');
  // models.push(m1)
  // let m2 = loadModel('models/m2.obj');
  // models.push(m2)
  let m3 = loadModel('models/m3.obj');
  models.push(m3)
  let m4 = loadModel('models/m4.obj');
  models.push(m4)
}

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL)
  perspective(PI / 4.0, width / height, 0.1, 4000)
  
  
  for (let i = 0; i < PARTICLE_AMOUNT; i++)
  {
    let randX = random(-width /2 + LOC_MARGIN, width / 2 - LOC_MARGIN)
    let randY = random(-height /2 + LOC_MARGIN, height / 2 - LOC_MARGIN)
    let randZ = random(LOC_MARGIN)
    let posVec = createVector(randX, randY, randZ)
    let box = new Particle(posVec, random(models))
    boxes.push(box)
  }

  // box = new Particle(loc)
}

function draw() 
{
  background(255)
  // ambientLight(255)
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 255, 255, -dirX, -dirY, -1);
  // let cameraXOffset = (map(mouseX, 0, width, -100, 100))
  cameraXOffset += (mouseX - pmouseX) * 0.1
  cameraYOffset += (mouseY - pmouseY) * 0.1
  print(mouseX)
  camera(cameraXOffset, cameraYOffset, 800)
  boxes.forEach(box => box.draw())
}





