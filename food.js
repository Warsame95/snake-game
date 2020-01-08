class food{
    constructor(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y, this.width, this.height);
    }

    update(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y, this.width, this.height);
    }
}