startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
endScreen = document.querySelector('.finish');
player = null;
numScores = 0;
mainAudio = document.createElement('audio');
mainAudio.src = 'audio/main.mp3';

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

let ast = document.querySelector('.enemy-1');

soundBtn = document.querySelector(".sound");
isSound = false; //flag for checking
soundBtn.onclick = function() {
    if(isSound == true) {
        mainAudio.play(); //audio start 
        mainAudio.volume = 1;
        isSound = false;
        soundBtn.style.color = "white";

    }
    else {
        isSound = true;
        mainAudio.volume = 0; //mute audio
        soundBtn.style.color = "gray";


    }
}

function createScore() {

    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE:' + numScores;
    mainScreen.appendChild(score);
    gameBlock = document.querySelector('._block');
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
    asteroid = document.createElement("div");
    asteroid.className = "enemy-1";
    asteroid.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 15) + "px";
    mainScreen.appendChild(asteroid);
    moveAsteroid(asteroid);
}

function moveAsteroid(asteroid) {
    let timerID = setInterval(function () {
        asteroid.style.top = asteroid.offsetTop + 5 + "px";
        if (asteroid.offsetTop > mainScreen.clientHeight) {
            asteroid.remove();
            createAsteroid();
            //interval clearing
            clearInterval(timerID);
        }
    }, 15);
}

function createUFO() {

}

function createPlayer() {
    player = document.createElement('div');
    player.className = 'player';
    mainScreen.appendChild(player);
}
