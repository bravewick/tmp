import Sprite from './Sprite';

export default class  Professor extends Sprite {
  constructor(spriteConf, spriteDestWidth = spriteConf.spriteWidth, spriteDestHeight = spriteConf.spriteHeight) {
    super(spriteConf.spriteFile, spriteConf.spriteFileWidth, spriteConf.spriteFileHeight,
      spriteConf.spriteWidth, spriteConf.spriteHeight, spriteConf.spriteDestWidth, spriteConf.spriteDestHeight);
    this.frame = {};
    this.frame.x = 0;
    this.frame.y = 0;
    this.position = {};
    this.position.x = 0;
    this.position.y = 0;
  }

  moveLeft(ctx) {
    this.frame.y = 3;
    this._drawFrame(ctx);
  }

  moveRight(ctx) {
    this.frame.y = 1;
    this._drawFrame(ctx);
  }

  moveUp(ctx) {
    this.frame.y = 0;
    this._drawFrame(ctx);
  }

  moveDown(ctx) {
    this.frame.y = 2;
    this._drawFrame(ctx);
  }

  _drawFrame(ctx) {
    ctx.drawImage(this.sprites, this.frame.x, this.frame.y * this.spriteHeight,
      this.spriteWidth, this.spriteHeight, this.position.x,
      this.position.y, this.spriteWidth, this.spriteHeight);
    this.frame.x = (this.frame.x + this.spriteWidth) % this.spriteFileWidth;
  }
}
