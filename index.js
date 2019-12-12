var snake;
var snakeBody = 3;
var food;
var canvas;
var up = false,
    down = false,
    left = false,
    right = false;

var score = 0;

var displayScore;

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
        snake.y -= 1;
    }
    if (right){
        snake.x += 1;
    }
    if (down){
        snake.y += 1;
    }
    if (left){
        snake.x -= 1;
    }
} 

function startGame() {
    canvas = document.getElementById("canvas");
    displayScore = document.getElementById("scorekeeper");
    snake = new compenent(10, 10, "green", 145, 60);
    food = new compenent(10,10, "red", Math.floor(Math.random() * 291), Math.floor(Math.random() * 120));
    GameArea.refresh();
    
  }

  var GameArea = {
      refresh : function(){
          this.interval = setInterval(updateGameArea, 20);
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
      ctx = canvas.getContext("2d");
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);

      this.update = function(){
          ctx.canvas.getContext("2d");
          ctx.fillStyle = color;
          ctx.fillRect(this.x,this.y, this.width, this.height);
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
      if (snake.crashWith(food)) {
        food.x = Math.floor(Math.random() * 291)
        food.y = Math.floor(Math.random() * 120)
        score++;
      }
      displayScore.innerHTML = "Score: " + score;
      food.update();
      snake.update();
  }


