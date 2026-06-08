class Character extends MoveableObject {
  y = 180;
  x = 100;
  height = 250;

  speed = 10;
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
    this.moveX();
  }

  // rein nur die animation fur das gehen des character.
  walkingAnimation() {
    setInterval(() => {
      if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
        let i = this.currentImage % this.WALK.length;
        let path = this.WALK[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  // die funciton mit der der character links rechts laufen kann
  moveX() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
        this.x += this.speed;
        this.walkingAnimation(this.WALK);
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x >= - 720) {
        this.x -= this.speed;
        this.walkingAnimation(this.WALK);
        this.otherDirection = true;
      }
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60); //60 fps
  }
}
