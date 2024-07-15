document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
      player.dy = -10;
    }
  });
  
  document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      player.dy = 10;
    }
  });
  
  function updatePlayer() {
    player.y += player.dy;
    if (player.y + player.height > canvas.height || player.y < 0) {
      player.dy = 0;
    }
  }
  
  setInterval(updatePlayer, 1000 / 60);
  