function snake(arena, size) {
  this.x = 0;
  this.y = 0;
  this.tail = [{ x: 0, y: 0 }];
  this.size = {
    width: size,
    height: size
  };
  this.xVelocity = 0;
  this.yVelocity = 0;
  this.deth = false;

  this.move = ctx => {
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVelocity;
    this.tail[this.tail.length - 1] = { x: this.x, y: this.y };
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.ceckDeth()) {
      this.deth = true;
      alert("Game over");
      this.reset();
    }
    for (let i = 0; i < this.tail.length; i++) {
      let rect = this.tail[i];
      ctx.rect(rect.x, rect.y, this.size.width, this.size.height);
    }
    // ctx.rect(this.x, this.y, this.size.width, this.size.height);
    ctx.fillStyle = "#fff";
    ctx.fill();
  };
  this.setVelocity = (x, y) => {
    this.xVelocity = this.xVelocity != -x ? x : this.xVelocity;
    this.yVelocity = this.yVelocity != -y ? y : this.yVelocity;
  };
  this.reset = () => {
    this.x = 0;
    this.y = 0;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.tail = [{ x: 0, y: 0 }];
  };
  this.ceckDeth = () => {
    if (
      this.x > arena.width - this.size.width ||
      this.y > arena.height - this.size.height ||
      this.x < 0 ||
      this.y < 0
    )
      return true;

    for (let i = 0; i < this.tail.length - 2; i++) {
      let pos = this.tail[i];
      let d = getDistance(pos, this);
      if (d < this.size.width) {
        return true;
      }
    }
  };
  this.eat = () => {
    this.tail.push({ x: this.x, y: this.y });
  };
}
