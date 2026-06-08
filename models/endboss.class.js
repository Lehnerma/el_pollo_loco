class Endboss extends MoveableObject {
  x = 420;

  WALKING = ["assets/img/4_enemie_boss_chicken/1_walk/G1.png", "assets/img/4_enemie_boss_chicken/1_walk/G2.png", "assets/img/4_enemie_boss_chicken/1_walk/G3.png", "assets/img/4_enemie_boss_chicken/1_walk/G4.png"];

  ALERT = [
    "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super().loadImage(this.ALERT[0]);
    this.loadImages(this.ALERT);
    this.animate(this.ALERT);
  }

  animate(arr) {
    // this.moveLeft();
    this.playAnimation(this.ALERT);
  }
}
