function food(arena, size) {
  this.grid = [];
  this.getGridCorXy = () => {
    for (let i = 0; i <= arena.width - size; i += size) {
      for (let j = 0; j <= arena.height - size; j += size) {
        this.grid.push({ x: i, y: j });
      }
    }
  };
  this.getGridCorXy();
  this.setCor = () => {
    // console.log(arena.width / size, arena.height / size);
    let index = Math.ceil(Math.random() * this.grid.length);
    this.x = this.grid[index].x;
    this.y = this.grid[index].y;
  };
  this.setCor();
  this.size = {
    width: size,
    height: size
  };
  this.show = ctx => {
    ctx.rect(this.x, this.y, this.size.width, this.size.height);
    ctx.fillStyle = "#fff";
    ctx.fill();
  };
}
