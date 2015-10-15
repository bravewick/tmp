import levelConf from './configs/sprites/level.js';
import professorConf from './configs/sprites/professor';
import Level from './classes/Level';
import Professor from './classes/Professor';

window.onload = function () {

  const DEFAULT_SIZE = 50;
  const DEFAULT_DEST_SIZE = 40;
  let LEVEL_WIDTH = DEFAULT_SIZE;
  let LEVEL_HEIGHT = DEFAULT_SIZE;
  let DEST_TILE_SIZE = 40;

  const levelGenerator = new LevelGenerator();
  const canvas = document.getElementById('level');
  const ctx = canvas.getContext('2d');
  let _interval = null;

  document.querySelector('#levelProperties').addEventListener('submit', function (e) {

    e.preventDefault();
    if (_interval) {
      clearInterval(_interval);
    }

    LEVEL_WIDTH = document.getElementById('width').value || DEFAULT_SIZE;
    LEVEL_HEIGHT = document.getElementById('height').value || DEFAULT_SIZE;
    DEST_TILE_SIZE = document.querySelector('#tilesize').value || DEFAULT_DEST_SIZE;

    canvas.width  = LEVEL_WIDTH * DEST_TILE_SIZE;
    canvas.height = LEVEL_HEIGHT * DEST_TILE_SIZE;

    let level = new Level(levelConf, DEST_TILE_SIZE, DEST_TILE_SIZE, LEVEL_WIDTH,LEVEL_WIDTH,  null);
    let dude = new Professor(professorConf);
    levelGenerator.generateRecursiveBacktracking(LEVEL_WIDTH, LEVEL_HEIGHT, function (data) {
      // init the grid
      level.setGrid(data);

      // Main Loop
      _interval = setInterval(function () {
        level.draw(ctx);
        dude.moveLeft(ctx);
      }, 100);
    });
  });
};
