import Sprite from './Sprite';

export default class Level extends Sprite {
  constructor(spriteConf, spriteDestWidth, spriteDestHeight,
              gridWidth, gridHeight, grid) {

    super(spriteConf.spriteFile, spriteConf.spriteFileWidth, spriteConf.spriteFileHeight,
      spriteConf.spriteWidth, spriteConf.spriteHeight, spriteConf.spriteDestWidth, spriteConf.spriteDestHeight);

    this.gridWidth = gridWidth;
    this.gridHeight = gridHeight;
    this.grid = grid;
  }

  draw(ctx) {
    let that = this;

    this.grid.forEach(function (tileData, i) {
      let x = i % that.gridWidth;
      let y = Math.floor(i / that.gridHeight);

      ctx.drawImage(that.sprites,
        tileData * that.spriteWidth, 0, that.spriteWidth, that.spriteHeight,
        x * that.spriteDestWidth,
        y * that.spriteDestHeight,
        that.spriteDestWidth, that.spriteDestHeight);
    });
  }

  setGrid(grid) {
    this.grid = grid;
  }
}

// TILE MAPPING
// t01 = 1,    // 0001
// t02 = 8,    // 1000
// t03 = 4,    // 0100
// t04 = 2,    // 0010
// t11 = 9,    // 1001
// t12 = 12,   // 1100
// t13 = 6,    // 0110
// t14 = 3,    // 0011
// t21 = 11,   // 1011
// t22 = 13,   // 1101
// t23 = 14,   // 1110
// t24 = 7,    // 0111
// t31 = 5,    // 0101
// t32 = 10,   // 1010
// t33 = 15;   // 1111
