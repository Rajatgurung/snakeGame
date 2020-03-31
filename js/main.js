var c = document.getElementById("canvas");
var scoreBoard = document.getElementById("score");
var gamePlayed = document.getElementById("gamePlayed");
var ctx = c.getContext("2d");
var gridSize = 10;
var score = 0;

var arena = { width: c.width, height: c.height };
var snake = new snake(arena, gridSize);
var food = new food(arena, gridSize);
function draw() {
  if (getDistance(snake, food) < gridSize) {
    score++;
    snake.eat();
    food.setCor();
  }
  if (snake.deth) {
    snake.deth = false;
    setScor();
    retriveScore();
    score = 0;
  }
  scoreBoard.innerHTML = `<h2>Score - ${score}</h2>`;
  snake.move(ctx);
  food.show(ctx);
}

window.addEventListener("keydown", function(e) {
  switch (e.key) {
    case "ArrowDown":
      snake.setVelocity(0, gridSize);
      break;
    case "ArrowUp":
      snake.setVelocity(0, -gridSize);
      break;
    case "ArrowRight":
      snake.setVelocity(gridSize, 0);
      break;
    case "ArrowLeft":
      snake.setVelocity(-gridSize, 0);
      break;
  }
});
setInterval(function() {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}, 300);
function setScor() {
  let heigestScore = 0;
  let gamePlayed = 0;
  var games = JSON.parse(localStorage.getItem("gamesPlayed"));

  if (games) {
    heigestScore = score > games.heigestScore ? score : games.heigestScore;
    gamePlayed = games.gamePlayed + 1;
  } else {
    heigestScore = score;
    gamePlayed = 1;
  }
  localStorage.setItem(
    "gamesPlayed",
    JSON.stringify({
      heigestScore: heigestScore,
      gamePlayed: gamePlayed
    })
  );
}
function retriveScore() {
  let games =
    localStorage.getItem("gamesPlayed") != null
      ? JSON.parse(localStorage.getItem("gamesPlayed"))
      : { gamePlayed: 0, heigestScore: 0 };
  gamePlayed.innerHTML = `Total game played - ${games.gamePlayed} | Higest Score  ${games.heigestScore} `;
}
retriveScore();
