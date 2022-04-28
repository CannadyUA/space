startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
endScreen = document.querySelector('.finish');
numScores = 0;

mainAudio = document.createElement('audio');
mainAudio.src = 'audio/main.mp3';

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

let ast = document.querySelector('.enemy-1');

startBtn.onclick = function () {
    startScreen.style.display = 'none';
    createScore();
    createHealth();
    createPlayer();

    mainAudio.play();
    //setTimeout(function () {
    //    ast.style.top = getRand(550, 600) + "px";
    //    ast.style.left = getRand(300, 330) + "px";
    //    collision();
    //}, 200);

}




function createScore() {
    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE:' + numScores;
    mainScreen.appendChild(score);
}

function createHealth() {
    health = document.createElement('div');
    health.className = 'health-indicator';
    healthBar = document.createElement('div');
    healthBar.className = 'health-bar';
    health.appendChild(healthBar);
    mainScreen.appendChild(health);
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

function collision() {
    let positionAst = ast.offsetLeft - ast.offsetWidth;
    let player = document.querySelector('.player');
    let positionPlayer = player.offsetLeft - player.offsetWidth;

    if (ast.offsetLeft + ast.offsetWidth >= player.offsetLeft && ast.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (ast.offsetTop >= player.offsetTop - player.offsetHeight && ast.offsetTop <= player.offsetTop) {
            health = document.querySelector('.health-bar');
            health.style.width = health.offsetWidth - 20 + 'px';
            gameEnd(health);
        }
    }
}

function gameEnd(health) {
    param = parseInt(health.style.width);
    if (param <= 0) {
        mainScreen.style.display = 'none';
    }
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
