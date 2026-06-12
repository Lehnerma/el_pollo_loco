class Character extends MoveableObject {
  y = 20;
  x = 100;
  height = 250;
  speed = 10;
  world;
  health = 100;

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

  IDLE_LONG = [
    "assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  JUMPING = [
    "assets/img/2_character_pepe/3_jump/J-31.png",
    "assets/img/2_character_pepe/3_jump/J-32.png",
    "assets/img/2_character_pepe/3_jump/J-33.png",
    "assets/img/2_character_pepe/3_jump/J-34.png",
    "assets/img/2_character_pepe/3_jump/J-35.png",
    "assets/img/2_character_pepe/3_jump/J-36.png",
    "assets/img/2_character_pepe/3_jump/J-37.png",
    "assets/img/2_character_pepe/3_jump/J-38.png",
    "assets/img/2_character_pepe/3_jump/J-39.png",
  ];

  WALK = ["assets/img/2_character_pepe/2_walk/W-21.png", "assets/img/2_character_pepe/2_walk/W-22.png", "assets/img/2_character_pepe/2_walk/W-23.png", "assets/img/2_character_pepe/2_walk/W-24.png", "assets/img/2_character_pepe/2_walk/W-25.png", "assets/img/2_character_pepe/2_walk/W-26.png"];

  DEAD = ["assets/img/2_character_pepe/5_dead/D-51.png", "assets/img/2_character_pepe/5_dead/D-52.png", "assets/img/2_character_pepe/5_dead/D-53.png", "assets/img/2_character_pepe/5_dead/D-54.png", "assets/img/2_character_pepe/5_dead/D-55.png", "assets/img/2_character_pepe/5_dead/D-56.png"];

  HURT = ["assets/img/2_character_pepe/4_hurt/H-41.png", "assets/img/2_character_pepe/4_hurt/H-42.png", "assets/img/2_character_pepe/4_hurt/H-43.png"];

  WALKING_SOUND = new Audio("assets/audio/step.wav");

  constructor() {
    super().loadImage("assets/img/2_character_pepe/1_idle/idle/I-1.png");
    this.loadImages(this.WALK);
    this.loadImages(this.IDLE);
    this.loadImages(this.JUMPING);
    this.applyGravity();
    this.moveCharacter();
  }

  // rein nur die animation fur das gehen des character.
  walkingAnimation() {
    setInterval(() => {
      if ((this.world.keyboard.LEFT && this.x >= -720) || (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x)) {
        this.animation(this.WALK);
      }
    }, 100);
  }

  // die funciton mit der der character links rechts laufen kann
  moveCharacter() {
    this.jumpingAnimation();
    this.walkingAnimation();
    setInterval(() => {
      if (this.world.keyboard.RIGHT && this.x <= this.world.level.level_end_x) {
        this.moveRight();
        this.otherDirection = false;
      }
      if (this.world.keyboard.LEFT && this.x >= -1040) {
        this.moveLeft();
        this.otherDirection = true;
      }

      if ((this.world.keyboard.SPACE || this.world.keyboard.UP) && !this.isAboveGround()) {
        this.jump();
      }

      this.world.camera_x = -this.x + 100; // distanz for the camera
    }, 1000 / 60); //60 fps
  }

  jumpingAnimation() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.animation(this.JUMPING);
      }
    }, 100);
  }
}
