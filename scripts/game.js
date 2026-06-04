let canvas;
let world

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas)
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        world.character.startAttack(); // Aktiviert den Status
    }
});