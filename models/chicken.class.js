class Chicken extends MoveableObject {
  height = 80;
  width = 80;
  x = 200 + Math.random() * 500;
  y = 340;

  WALKING = ["assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png", "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"];

  constructor() {
    super().loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.WALKING);
    this.animate(this.WALKING);
    this.moveLeft(Math.random());
  }

  animate(arr) {
    setInterval(() => {
      let i = this.currentImage % arr.length;
      let path = arr[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 200);
  }
}
