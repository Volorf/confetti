
const PARTICLE_AMOUNT = 100;
const LOC_MARGIN = 100;
const BG_COLOR = 255;

let cameraXOffset = 0;
let cameraYOffset = 0;

let models =[];
let particles = [];

// Custom funcs
function generateParticles(particleAmount, locMargin)
{
  let _particles = [];
  for (let i = 0; i < particleAmount; i++)
  {
    let randX = random(-width /2 + locMargin, width / 2 - locMargin);
    let randY = random(-height /2 + locMargin, height / 2 - locMargin);
    let randZ = random(locMargin);
    let posVec = createVector(randX, randY, randZ);
    let particle = new Particle(posVec, random(models));
    _particles.push(particle);
  }
  return _particles;
}

function setCameraMotion()
{
  cameraXOffset += (mouseX - pmouseX) * 0.1;
  cameraYOffset += (mouseY - pmouseY) * 0.1;
  camera(cameraXOffset, cameraYOffset, 800);
}

// Lib's funcs
function preload() 
{
  let m1 = loadModel('models/m1.obj');
  models.push(m1);
  let m2 = loadModel('models/m2.obj');
  models.push(m2);
  let m3 = loadModel('models/m3.obj');
  models.push(m3);
  let m4 = loadModel('models/m4.obj');
  models.push(m4);
}

function setup() 
{
  createCanvas(windowWidth, windowHeight, WEBGL);
  perspective(PI / 4.0, width / height, 0.1, 4000);
  particles = generateParticles(PARTICLE_AMOUNT, LOC_MARGIN);
}

function draw() 
{
  background(BG_COLOR);
  particles.forEach(particle => particle.draw());
  setCameraMotion();
}





