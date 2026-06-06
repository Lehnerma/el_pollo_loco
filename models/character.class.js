class Character extends MoveableObject {
  height = 250;
  y= 180;
  
  constructor() {
    super().loadImg("assets/img/2_character_pepe/1_idle/idle/I-1.png");
  }

  jump() {}
}
