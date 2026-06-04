class Shinobi extends MoveableObject {
  constructor() {
    super();
    this.loadImg('assets/shinobi/Enchantress/Attack_1.png');
    
    // WICHTIG: Prüfe, ob die Maße eines EINZELNEN Frames (Breite/Höhe) 
    // exakt mit deinem Bild übereinstimmen, sonst clippt das Bild!
    this.width = 130;  
    this.height = 150; 
    this.totalFrames = 5;
    
    this.isAttacking = false; // Start-Zustand: Er greift nicht an
  }

  // Wird EINMALIG durch den Tastendruck ausgelöst
  startAttack() {
    if (!this.isAttacking) {
      this.isAttacking = true;
      this.currentFrame = 0; // Starte beim ersten Bild
    }
  }

  // Wird kontinuierlich in der Game-Loop aufgerufen
  updateAnimation() {
    if (this.isAttacking) {
      this.currentFrame++;
      
      // Wenn das letzte Bild erreicht ist, beende den Angriff
      if (this.currentFrame >= this.totalFrames) {
        this.currentFrame = 0;
        this.isAttacking = false; // Zurück zum Normalzustand
      }
    }
  }
}