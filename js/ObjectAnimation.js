function ObjectAnimation(spriteFile, spriteFileWidth, spriteFileHeight, spriteWidth, spriteHeight) {
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.spriteFileWidth = spriteFileWidth;
    this.spriteFileHeight = spriteFileHeight;
    this.sprites = new Image(spriteFileWidth, spriteFileHeight);
    this.sprites.src = spriteFile;
    this.frame = {};
    this.frame.x = 0;
    this.frame.y = 0;
    this.position = {};
    this.position.x = 0;
    this.position.y = 0;
}

ObjectAnimation.prototype.moveLeft = function (ctx) {
    this.frame.y = 3;
    ctx.drawImage(
        this.sprites,
        this.frame.x,
        this.frame.y * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        this.position.x,
        this.position.y,
        this.spriteWidth,
        this.spriteHeight
    );
    this.frame.x = (this.frame.x + this.spriteWidth) % this.spriteFileWidth;
};

//var character = new ObjectAnimation('images/character.png', 64, 64);

//console.log(typeof character, character);