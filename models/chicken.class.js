class Chicken extends MoveableObject {
  x = 200 + Math.random() * 500;
  y = 340;
  height = 80;
  width = 80;
  speed = 0.15 + Math.random() * 0.25; // die 0.25 geben nur den rahem für das math.random an ( heißt das zwischen 0.15 und 2.5 in diesem bereich einen zahl gesucht wird.)

  WALKING = ["assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png", "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png", "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"];

  constructor() {
    super().loadImage("assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.WALKING);
    this.animate(this.WALKING);
  }

  animate(arr) {
    this.moveLeft();
    setInterval(() => {
      let i = this.currentImage % arr.length;
      let path = arr[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 200);
  }
}
