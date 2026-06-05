class BackgroundObject extends MoveableObject {
  width = 720;
  height = 400;

  constructor(imgPath, x, y) {
    super().loadImg(imgPath);
    this.x = x;
    this.y = y;
  }
}
