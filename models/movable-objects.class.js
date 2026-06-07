class MoveableObject {
  x = 120;
  y = 280;
  height = 150;
  width = 100;

  img;
  imgCache = {};
  currentImage = 0;

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
      this.imgCache[path] = img
    })
  }

  moveRight() {
    console.log("move right");
  }

  moveLeft(px) {
        setInterval(() => {
      this.x -= px;
    }, 1000/60);
  }
}
