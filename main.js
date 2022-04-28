startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
player = null;
numLives = 3;
numScores = 0;
asteroid = null;
ufo = null;

shotAudio = document.createElement('audio');
shotAudio.src = 'audio/shot.mp3';

killEnemy = document.createElement('audio');
killEnemy.src = 'audio/killenemy.mp3';


maintheme = document.createElement('audio');
maintheme.src = 'audio/maintheme.mp3';

function getRand(min, max) {
    return (Math.floor(Math.random() * (max - min)) + min);
}

startBtn.onclick = function () {
    startScreen.style.display = 'none';
    createScore();
    createLives();
    createPlayer();
    maintheme.play();
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
       if (player.offsetLeft > 450) {
           player.style.left = 505 + 'px';
       }
    } else if (e.keyCode == 37) {
        player.style.left = player.offsetLeft - 70 + 'px';
        if (player.offsetLeft < 50) {
           player.style.left = 5 + 'px'; 
        }
    }
}



