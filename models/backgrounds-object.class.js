class BackgroundObject extends MoveableObject {
  width = 720;
  height = 400;

  constructor(imgPath, x) {
    super().loadImg(imgPath);
    this.x = x;
    this.y = 480 - this.height;
  }
}
