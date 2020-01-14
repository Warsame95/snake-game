class Snake{
    constructor(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.color = color;
  
    }

    draw(){
      
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height); 
    }
  
    update(){
      
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height); 
      
      if (this.x > canvas.width){
        this.x = 0;
      }
      if (this.x < 0){
        this.x = canvas.width;
      }
      if (this.y > canvas.height){
        this.y = 0;
      }
      if(this.y < 0){
        this.y = canvas.height;
      }
    }

    consume(food){
      if (this.x === food.x && this.y === food.y){
        return true;
      }
      return false;
      
    }
}
  