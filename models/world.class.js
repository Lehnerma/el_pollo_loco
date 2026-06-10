class World {
  character = new Character();
  level = level1;
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

    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies);

    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => {
      this.draw();
    }); // wiederholt die draw function immer wieder abgestimmt auf die grafikkarte
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save(); // speichert den ctx damit wir wieder auf den ursprunglichen zuruckgreifen konnen.
      this.ctx.translate(mo.width, 0); // beim drehen wird die width des bildes abgezogen das es sich auf den stand dreht.
      this.ctx.scale(-1, 1); // die eigentliche spiegelung.
      mo.x = mo.x * -1;
    } // spiegelt das Bild das eingefugt wird.

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    //red rectangel for the collision
    this.ctx.beginPath();
    this.ctx.lineWidth = "2";
    this.ctx.strokeStyle = "red";
    this.ctx.rect(mo.x, mo.y, mo.width, mo.height);
    this.ctx.stroke();

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
