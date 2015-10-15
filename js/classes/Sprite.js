export default class Sprite {
  // TODO: Should get just sprite configuration object
  constructor(spriteFile, spriteFileWidth, spriteFileHeight,
              spriteWidth, spriteHeight, spriteDestWidth, spriteDestHeight) {
    // These are probaly redundant
    this.spriteFile = spriteFile;
    this.spriteFileWidth = spriteFileWidth;
    this.spriteFileHeight = spriteFileHeight;

    this.sprites = new Image(spriteFileWidth, spriteFileHeight);
    this.sprites.src = spriteFile;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.spriteDestWidth = spriteDestWidth || spriteWidth;
    this.spriteDestHeight = spriteDestHeight || spriteHeight;
  }
}
