startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
player = null;
numLives = 3;
numScores = 0;

function getRand(min, max) {
  return Math.random() * (max - min) + min;
}

startBtn.onclick = function () {
    startScreen.style.display = 'none';
    createScore();
    createLives();
    createPlayer();
}

function createScore() {    
    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE:' + numScores;
    mainScreen.appendChild(score);
}

function createLives() {
    lives = document.createElement('div');
    lives.className = 'lives';
    lives.innerText = 'x' + numLives;
    mainScreen.appendChild(lives);
}

function createAsteroid() {
    
}

function createUFO() {
    
}

function createPlayer() {
    player = document.createElement('div');
    player.className = 'player';
    mainScreen.appendChild(player);
}


document.onkeydown = function (e) {
    
    if (e.keyCode == 39) {
        player.style.left = player.offsetLeft + 70 + 'px';
       if (player.offsetLeft > 500) {
           player.style.left = 505 + 'px';
       }
    } else if (e.keyCode == 37) {
        player.style.left = player.offsetLeft - 70 + 'px';
        if (player.offsetLeft < 10) {
           player.style.left = 5 + 'px'; 
        }
    }
}
