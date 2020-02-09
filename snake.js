class Snake{
    constructor(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.color = color;
      this.total = 1;
      this.tail = [];
    }

    draw(){
      
      ctx.fillStyle = this.color;
      for (let i = 0; i < this.tail.length -1; i++ ){
        ctx.fillRect(this.tail[i].x, this.tail[i].y, this.width, this.height);
      }
      ctx.fillRect(this.x, this.y, this.width, this.height); 
    }
  
    update(){
      
      for (let i = 0; i < this.tail.length -1; i++ ){
        this.tail[i] = this.tail[i+1];
      }

      this.tail[this.total -1]= {x : this.x, y : this.y};

      this.draw();
       
      
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
        this.total++;
        return true;
      }
      return false;
      
    }
}
  