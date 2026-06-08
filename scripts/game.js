let canvas;
let world;
let keyboard = new Keyboard();
const keyMap = {
  Space: "SPACE",
  ArrowDown: "DOWN",
  ArrowUp: "UP",
  ArrowLeft: "LEFT",
  ArrowRight: "RIGHT",
  KeyM: "M",
};

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

window.addEventListener("keydown", (e) => {
  const action = keyMap[e.code];
  if (action) {
    keyboard[action] = true;
  }
});

window.addEventListener("keyup", (e) => {
  const action = keyMap[e.code];
    if (action) {
    keyboard[action] = false;
  }
});