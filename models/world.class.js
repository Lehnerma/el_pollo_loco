class World {
  character = new Character();
  enemies = level1.enemies;
  cloud = level1.clouds;
  backgroundObject = level1.backgroundObjects;

  ctx;
  canvas;
  keyboard;
  camera_x;

  constructor(canvas, keyboard) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
    this.keyboard = keyboard;
    this.setWorld();
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // reset the canvas.

    this.ctx.translate(this.camera_x, 0)

    this.addObjectsToMap(this.backgroundObject);
    this.addToMap(this.character);
    this.addObjectsToMap(this.cloud);
    this.addObjectsToMap(this.enemies);

    this.ctx.translate(-this.camera_x, 0)

    requestAnimationFrame(() => {
      this.draw();
    }); // wiederholt die draw function immer wieder abgestimmt auf die grafikkarte
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save(); // speichert den ctx damit wir wieder auf den ursprunglichen zuruckgreifen konnen.
      this.ctx.translate(mo.width,0); // beim drehen wird die width des bildes abgezogen das es sich auf den stand dreht.
      this.ctx.scale(-1, 1); // die eigentliche spiegelung. 
      mo.x = mo.x * -1; 
    } // spiegelt das Bild das eingefugt wird.

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

    if (mo.otherDirection) {
      this.ctx.restore(); // wir stellen den ctx wieder her den wir vorher gespeichert haben.
      mo.x = mo.x * -1;
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
}
