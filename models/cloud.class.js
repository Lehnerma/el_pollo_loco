class Cloud extends MoveableObject{
    x = Math.random() * 500;
    y = 20;
    width = 500;
    height = 200

    constructor(imgPath){
        super().loadImg(imgPath);
    }
}