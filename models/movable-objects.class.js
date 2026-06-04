class MoveableObject {
  x = 120;
  y = 250;
  width = 100;
  height = 150;
  img;

  currentFrame = 0;
  totalFrames = 1; // Standardmäßig 1 (für unbewegte Bilder)
  
  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  // Jedes Objekt zeichnet sich selbst
  draw(ctx) {
    if (!this.img) return; // Zeichnet erst, wenn das Bild geladen ist

    // Berechnet den X-Startpunkt auf dem Spritesheet
    let sx = this.currentFrame * this.width;

    // 9-Parameter-Version für Spritesheets
    ctx.drawImage(this.img, sx, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    console.log("move right");
    this.x += 5;
  }

  moveLeft() {
    console.log("move right");
    this.x -= 5;
  }
}
