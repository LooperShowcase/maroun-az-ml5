let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
let wordClassifier;

function preload() {
  bgImg = loadImage("bgImg.jpg");
  playerImg = loadImage("ad.png");
  obsImg = loadImage("obstacle1.png");

  let options = {
    probabilityThreshold: 0.85,
  };

  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1000, 400);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label === "up") {
    player.jump();
  }
}
function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      textSize(75);
      fill(0, 255, 42);
      text("Game Over", width / 2 - 150, height / 2);

      noLoop();
    }
  }

  player.show();
  player.move();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
