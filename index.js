var snake;
var snakeBody = 3;
var food;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const scale = 10;
var row;
var column;

var up = false,
    down = false,
    left = false,
    right = false;

var score = 0;

var displayScore;

// Moving the snake

document.addEventListener('keydown', press);

function press(e){
    if (e.keyCode === 38 /* up */){
        up = true
        down = false
        right = false
        left = false
      }
      if (e.keyCode === 39 /* right */ ){
        right = true
        down = false
        up = false
        left = false
      }
      if (e.keyCode === 40 /* down */ ){
        down = true
        up = false
        right = false
        left = false
      }
      if (e.keyCode === 37 /* left */ ){
        left = true
        down = false
        right = false
        up = false
      }
}

 function movement(){
    if (up){
        snake.y -= scale;
    }
    if (right){
        snake.x += scale;
    }
    if (down){
        snake.y += scale;
    }
    if (left){
        snake.x -= scale;
    }
} 

function startGame() {
    row = canvas.height/scale;
    column = canvas.width/scale;
    displayScore = document.getElementById("scorekeeper");
    snake = new Snake(10, 10, "green", 140, 60);
    food = new Food(10,10, "red", (Math.floor(Math.random() * row-1)+1)*scale, (Math.floor(Math.random() * column-1)+1)*scale);
    GameArea.refresh();
    
  }

  var GameArea = {
      refresh : function(){
          this.interval = setInterval(updateGameArea, 150);
      },
      clear : function(){
          canvas.getContext("2d").clearRect(0,0,700,400);
      }
      
  }

  
  function compenent(width, height, color, x, y){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);

      this.update = function(){
          ctx.fillStyle = color;
          ctx.fillRect(this.x,this.y, this.width, this.height);

          // if the snake touches the boundaries of the canvas
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

      this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }

  }


  function updateGameArea(){
      GameArea.clear();
      movement();
      if (snake.consume(food)){
        food.locationchange();
      }
      displayScore.innerHTML = "Score: " + score;
      food.update();
      snake.update();
  }
