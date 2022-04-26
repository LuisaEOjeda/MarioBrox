class Background {
    constructor(ctx) {
      this.x = 0;
      this.speedX = 2;
      this.ctx = ctx;
      this.img = new Image(this.ctx.canvas.width, this.ctx.canvas.height);
      this.img.src = "./images/bg.png";
    }
  
    move(frameId) {
      console.log(
        "wraparound",
        this.ctx.canvas.width,
        frameId % this.ctx.canvas.width
      );
      this.x = -(((frameId % this.ctx.canvas.width) / 2) * this.speedX);
      // alternative syntax this.x += this.speedX
    }
  
    draw(frameId) {
      this.ctx.drawImage(
        this.img,
        this.x,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      );
  
      this.ctx.drawImage(
        this.img,
        this.x + this.ctx.canvas.width,
        0,
        this.ctx.canvas.width,
        this.ctx.canvas.height
      );
    }
  }
  