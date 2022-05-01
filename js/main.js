//variables
startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
endScreen = document.querySelector('.finish');
numScores = 0;
player = document.querySelector('.player');
bossFight = document.createElement('audio');
bossFight.src = 'audio/fight.mp3';
mainAudio = document.createElement('audio');
mainAudio.src = 'audio/main.mp3';
soundBtn = document.querySelector(".sound");
statusGame = 'open';
isSound = false; //flag for checking

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

function createScore() {
    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE: ' + numScores;
    mainScreen.appendChild(score);
    gameBlock = document.querySelector('._block');
}

function createHealth() {
    indicator = document.createElement('div');
    indicator.className = 'health-indicator';
    healthBar = document.createElement('div');
    healthBar.className = 'health-bar';
    indicator.appendChild(healthBar);
    mainScreen.appendChild(indicator);
}

function createBossHealth() {
    bossHealth = document.createElement('div');
    bossHealth.className = 'boss-health';
    bossBar = document.createElement('div');
    bossBar.className = 'boss-health-bar';
    bossHealth.appendChild(bossBar);
    mainScreen.appendChild(bossHealth);
}


function createAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.className = "enemy-1";
    asteroid.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 65) + "px";

    if (statusGame !== 'finish') {
        mainScreen.appendChild(asteroid);
        moveAsteroid(asteroid);
    }
}

function moveAsteroid(asteroid) {
    let timerID = setInterval(function () {
        asteroid.style.top = asteroid.offsetTop + 5 + "px";
        //console.dir(asteroid.offsetTop);
        if (asteroid.offsetTop > mainScreen.clientHeight) {
            asteroid.remove();
            createAsteroid();

            //interval clearing
            clearInterval(timerID);
        }

        if (statusGame !== 'finish') {
            collision(asteroid);
        }
    }, 20);
}

function createHeart() {
    heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 65) + "px";
    mainScreen.appendChild(heart);
    moveHeart();
}

function moveHeart() {
    let timerID = setInterval(function () {
        heart.style.top = heart.offsetTop + 5 + "px";
        //console.dir(asteroid.offsetTop);
        if (heart.offsetTop > mainScreen.clientHeight) {
            heart.remove();
        }


        if (statusGame !== 'finish') {

            if (heart.offsetLeft + heart.offsetWidth >= player.offsetLeft && heart.offsetLeft <= player.offsetLeft + player.offsetWidth) {
                if (heart.offsetTop >= player.offsetTop - player.offsetHeight && heart.offsetTop <= player.offsetTop) {

                    if (parseInt(healthBar.style.width) < 244) {
                        healthBar.style.width = healthBar.offsetWidth + 20 + 'px';
                    }
                    heart.remove();
                    //interval clearing
                    clearInterval(timerID);
                }
            }
        }
    }, 40);
}

function createBullet() {
    let bullet = document.createElement("div");
    bullet.className = "bullet";
    mainScreen.appendChild(bullet);
    bullet.style.left = player.offsetLeft + 49 + "px";
    bullet.style.top = player.offsetTop - 24 + "px";
    moveBullet(bullet);
}

function moveBullet(bullet) {
    let timerID = setInterval(function () {
        bullet.style.top = bullet.offsetTop - 10 + "px";
        if (bullet.offsetTop < 0) {
            //interval clearing
            bullet.remove();
            clearInterval(timerID);

        }
        isBoom(bullet);
    }, 15);
}

function createUFO() {
    ufo = document.createElement('div');
    ufo.className = 'boss';
    ufo.style.left = getRand(0, 380) + 'px';
    mainScreen.appendChild(ufo);
}
function createBoom(top, left) {
    let boom = document.createElement("div");
    boom.className = "boom";
    boom.style.top = top - 10 + "px";
    boom.style.left = left - 30 + "px";
    mainScreen.appendChild(boom);

    setTimeout(function () {
        boom.remove();
    }, 500);

}


function gameEnd() {
    param = parseInt(healthBar.style.width);
    if (param <= 0) {
        statusGame = 'finish';
        mainScreen.style.display = 'none';
        deleteObj();
        mainAudio.pause();
        endScreen.style.display = 'block';
    }

}

function deleteObj() {
    player.remove();
    score.remove();
    indicator.remove();
}