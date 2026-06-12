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
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollision();
  }

  checkCollision() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          console.log("Colliding with: ", enemy);
          this.character.health -= 20
          console.log('health: ', this.character.health);
          
          if (this.character.health <=0){
            console.log('death vally');
            
          }
        }
      });
    }, 500);
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
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    //red rectangel for the collision
    mo.drawBorderCollision(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  // mirrors the image to the other direction witch the bool value from this.otherDirection
  flipImage(mo) {
    this.ctx.save(); // speichert den ctx damit wir wieder auf den ursprunglichen zuruckgreifen konnen.
    this.ctx.translate(mo.width, 0); // beim drehen wird die width des bildes abgezogen das es sich auf den stand dreht.
    this.ctx.scale(-1, 1); // die eigentliche spiegelung.
    mo.x = mo.x * -1;
  }

  // set the image to the normal direction back.
  flipImageBack(mo) {
    this.ctx.restore(); // wir stellen den ctx wieder her den wir vorher gespeichert haben.
    mo.x = mo.x * -1;
  }
}
