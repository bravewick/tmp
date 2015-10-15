function drawLevelUsingSpriteSheet(grid, tilesize) {
  var SPRITESHEET_TILE_SIZE = 40;
  var TILE_SIZE = tilesize || 40;
  console.log(SPRITESHEET_TILE_SIZE, TILE_SIZE);
  canvas.width  = LEVEL_WIDTH * TILE_SIZE;
  canvas.height = LEVEL_HEIGHT * TILE_SIZE;
  var imageElement = document.createElement('img');
  imageElement.src = './images/wall_sprites.png';
  imageElement.onload = function () {
    grid.forEach(function (tileData, i) {
      var x = i % LEVEL_WIDTH,
        y = Math.floor(i / LEVEL_WIDTH);
      ctx.drawImage(imageElement,tileData * SPRITESHEET_TILE_SIZE, 0 , SPRITESHEET_TILE_SIZE, SPRITESHEET_TILE_SIZE,
        x * TILE_SIZE,
        y * TILE_SIZE,
        TILE_SIZE, TILE_SIZE);
    });
  }
}

// First Implementation of DRAW GRID
function drawLevel(grid) {
  var NORTH = 8, EAST = 4, SOUTH = 2, WEST = 1;

  function simpleDrawCell(ctx, x, y, properties) {
    var TILE_SIZE = 10;
    ctx.beginPath();

    if (properties & NORTH) {
      ctx.moveTo(x*TILE_SIZE, y*TILE_SIZE);
      ctx.lineTo(x*TILE_SIZE + TILE_SIZE, y*TILE_SIZE);
    }

    if (properties & EAST) {
      ctx.moveTo(x*TILE_SIZE + TILE_SIZE, y*TILE_SIZE);
      ctx.lineTo(x*TILE_SIZE + TILE_SIZE, y*TILE_SIZE + TILE_SIZE);
    }

    if (properties & SOUTH) {
      ctx.moveTo(x*TILE_SIZE, y*TILE_SIZE + TILE_SIZE);
      ctx.lineTo(x*TILE_SIZE + TILE_SIZE, y*TILE_SIZE + TILE_SIZE);
    }

    if (properties & WEST) {
      ctx.moveTo(x*TILE_SIZE, y*TILE_SIZE);
      ctx.lineTo(x*TILE_SIZE, y*TILE_SIZE + TILE_SIZE);
    }

    ctx.stroke();
  }

  for (var i = 0; i < SIZE * SIZE; i++){
    simpleDrawCell(ctx, i%SIZE, Math.floor(i/SIZE), grid[i]);
  }
}