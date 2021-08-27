class Player {
  constructor() {
    this.size = 50;
    this.y = height - 50;
    this.x = 40;
    this.velocityY = 0;
    this.gravity = 1;
  }

  show() {
    image(playerImg, this.x, this.y, 50, 50);
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -20;
    }
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY = this.velocityY + this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size - 20,
      this.size,

      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );

    return isColliding;
  }
}
