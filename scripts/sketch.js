
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
    const RAND_X = random(-width /2 + locMargin, width / 2 - locMargin);
    const RAND_Y = random(-height /2 + locMargin, height / 2 - locMargin);
    const RAND_Z = random(locMargin);
    const POS_VEC = createVector(RAND_X, RAND_Y, RAND_Z);
    let particle = new Particle(POS_VEC, random(models));
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
  // const M_1 = loadModel('models/m1.obj');
  // models.push(M_1);
  // const M_2 = loadModel('models/m2.obj');
  // models.push(M_2);
  // const M_3 = loadModel('models/m3.obj');
  // models.push(M_3);
  // const M_4 = loadModel('models/m4.obj');
  // models.push(M_4);
  const M_5 = loadModel('models/m5.obj');
  models.push(M_5);
  const M_6 = loadModel('models/m6.obj');
  models.push(M_6);
  const M_7 = loadModel('models/m7.obj');
  models.push(M_7);
  const M_8 = loadModel('models/m8.obj');
  models.push(M_8);
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





