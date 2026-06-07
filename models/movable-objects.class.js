class MoveableObject {
  x = 120;
  y = 280;
  height = 150;
  width = 100;

  img;
  imgCache = {};

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }
/**
 * 
 * @param {Array} arr - ['imgs/img1','imgs/img2','imgs/img3',..]
 */
  loadImages(arr){
    arr.forEach((path)=>{
      let img = new Image;
      img.src = path;
      this.imgCache[path] = path
    })
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft() {
    console.log("move right");
  }
}
