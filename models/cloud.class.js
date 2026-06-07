class Cloud extends MoveableObject {
  x = Math.random() * 500;
  y = 20;
  width = 500;
  height = 200;

  constructor(imgPath) {
    super().loadImage(imgPath);
    this.animationLeft()
  }

  animationLeft() {
    setInterval(() => {
      this.x -= 0.2;
    }, 1000/60);
  }
}
