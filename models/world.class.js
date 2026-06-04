class World {
  character = new Shinobi();
  ctx;
  canvas;
  frameCount = 0;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // --- ANIMS-UPDATE ---
    this.frameCount++;
    if (this.frameCount % 6 === 0) { // Alle 6 Frames das Bild wechseln
        this.character.updateAnimation(); 
    }

    // --- RENDER ---
    this.character.draw(this.ctx);

    requestAnimationFrame(() => this.draw());
  }
}