function Level(
    spriteFile, spriteFileWidth, spriteFileHeight, spriteWidth, spriteHeight,
    levelWidth, grid, destTileSize
) {
    this.spriteFile = spriteFile;
    this.spriteFileWidth = spriteFileWidth;
    this.spriteFileHeight = spriteFileHeight;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.levelWidth = levelWidth;
    this.grid = grid;
    this.destTileSize = destTileSize;
    this.sprites = new Image(this.spriteFileWidth, this.spriteFileHeight);
    this.sprites.src = spriteFile;
    console.log(this.sprites);
};

Level.prototype.draw = function (ctx) {
    var that = this;
    this.grid.forEach(function (tileData, i) {
        var x = i % that.levelWidth,
            y = Math.floor(i / that.levelWidth);

        ctx.drawImage(that.sprites,
            tileData * that.spriteWidth, 0 , that.spriteWidth, that.spriteWidth,
            x * that.destTileSize,
            y * that.destTileSize,
            that.destTileSize, that.destTileSize);
    });
};

Level.prototype.setGrid = function (grid) {
    this.grid = grid;
}