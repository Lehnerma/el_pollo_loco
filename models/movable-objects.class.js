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
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
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
}
