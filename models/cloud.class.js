class Cloud extends MoveableObject{
    x = Math.random() * 500;
    y = 20;
    width = 500;
    height = 200

    constructor(){
        super().loadImg('assets/img/5_background/layers/4_clouds/1.png');
    }
}