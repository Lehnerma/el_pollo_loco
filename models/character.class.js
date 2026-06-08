class Character extends MoveableObject {
  y = 180;
  height = 250;

  keyboard;
  world;

  IDLE = [
    "assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "assets/img/2_character_pepe/1_idle/idle/I-5.png",
    "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  WALK = ["assets/img/2_character_pepe/2_walk/W-21.png", "assets/img/2_character_pepe/2_walk/W-22.png", "assets/img/2_character_pepe/2_walk/W-23.png", "assets/img/2_character_pepe/2_walk/W-24.png", "assets/img/2_character_pepe/2_walk/W-25.png", "assets/img/2_character_pepe/2_walk/W-26.png"];

  constructor() {
    super().loadImage("assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.WALK);
    this.animateWalking();
  }

  animate(arr) {
    let i = this.currentImage % arr.length;
    let path = arr[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  animateWalking() {
    setInterval(() => {
      if (this.keyboard.RIGHT) {
        this.animate(this.WALK);
      }
    }, 200);
  }
}
