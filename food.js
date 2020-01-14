class Food{
    constructor(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.color = color;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y, this.width, this.height);
    }

    update(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y, this.width, this.height);
    }

    locationchange(){
      ctx.fillStyle = this.color;
      this.x = (Math.floor(Math.random() * row-1)+1)*scale
      this.y = (Math.floor(Math.random() * column-1)+1)*scale
      
    }
}