class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken()];
  cloud = [new Cloud()];

  backgroundObject = [new BackgroundObject("assets/img/5_background/layers/1_first_layer/1.png")];

  ctx;
  canvas;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addToMap(this.character);

    this.cloud.forEach((cloud) => {
      this.addToMap(cloud);
    });

    this.enemies.forEach((enemy) => {
      this.addToMap(enemy);
    });

    requestAnimationFrame(() => this.draw());
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
