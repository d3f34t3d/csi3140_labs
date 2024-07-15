let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

let player = {
  x: 50,
  y: 200,
  width: 50,
  height: 50,
  color: 'blue',
  dy: 0,
  health: 3
};

let score = 0;
let obstacles = [];
let coins = [];

function updateScore() {
  score++;
  document.getElementById('score').innerText = `Score: ${score}`;
}

function updateHealth() {
  document.getElementById('health').innerText = `Health: ${player.health}`;
}

function createObstacle() {
  obstacles.push({
    x: canvas.width,
    y: Math.random() * canvas.height,
    width: 20,
    height: 20,
    color: 'red'
  });
}

function createCoin() {
  coins.push({
    x: canvas.width,
    y: Math.random() * canvas.height,
    radius: 10,
    color: 'gold'
  });
}

function drawPlayer() {
  context.fillStyle = player.color;
  context.fillRect(player.x, player.y, player.width, player.height);
}

function drawObstacles() {
  obstacles.forEach(obstacle => {
    context.fillStyle = obstacle.color;
    context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

function drawCoins() {
  coins.forEach(coin => {
    context.fillStyle = coin.color;
    context.beginPath();
    context.arc(coin.x, coin.y, coin.radius, 0, Math.PI * 2);
    context.fill();
  });
}

function updateObstacles() {
  obstacles.forEach(obstacle => {
    obstacle.x -= 2;
  });
  obstacles = obstacles.filter(obstacle => obstacle.x + obstacle.width > 0);
}

function updateCoins() {
  coins.forEach(coin => {
    coin.x -= 2;
  });
  coins = coins.filter(coin => coin.x + coin.radius > 0);
}

function checkCollisions() {
  obstacles.forEach(obstacle => {
    if (player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y) {
      player.health--;
      updateHealth();
      if (player.health <= 0) {
        alert('Game Over');
        document.location.reload();
      }
    }
  });

  coins.forEach((coin, index) => {
    if (player.x < coin.x + coin.radius &&
        player.x + player.width > coin.x &&
        player.y < coin.y + coin.radius &&
        player.y + player.height > coin.y) {
      coins.splice(index, 1);
      updateScore();
    }
  });
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  drawObstacles();
  drawCoins();
  updateObstacles();
  updateCoins();
  checkCollisions();
  requestAnimationFrame(gameLoop);
}

setInterval(createObstacle, 2000);
setInterval(createCoin, 5000);
gameLoop();
