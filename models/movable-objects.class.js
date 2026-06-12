class MoveableObject {
  x = 120;
  y;
  height = 150;
  width = 100;
  speed = 0.15;
  speedY = 0;
  acceleration = 2;
  img;
  imgCache = {};
  currentImage = 0;
  otherDirection = false;
  health;

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawBorderCollision(ctx) {
    if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "red";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
  /**
   *
   * @param {Array} arr - ['imgs/img1','imgs/img2','imgs/img3',..]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  animation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  playAnimation(images, fps = 100) {
    setInterval(() => {
      this.animation(images);
    }, fps);
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25); // 1sek durch 25 - also 0,25 sek
  }

  isAboveGround() {
    return this.y <= 175;
  }

  jump() {
    this.speedY = 25;
  }

  /**
   *  Checks the collision points for the character and a Moveableobject - these could be a Chicken or a other class. 
   *  x + width = checks the upper left collision point -> compare with the y of the movableobject
   * y + height = checks the bottom left collion point -> compare with the y of the movableobject
   * @param {MoveableObject} mo 
   * @returns Bool for damage controll
   */
  isColliding(mo) {
    return this.x + this.width > mo.x && this.y + this.height > mo.y && this.x < mo.x && this.y < mo.y + mo.height;
  }
}
