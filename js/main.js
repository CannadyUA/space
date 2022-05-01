startBtn = document.querySelector('#start-btn');
againBtn = document.querySelector('.again-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
endScreen = document.querySelector('.finish');
numScores = 0;
mainAudio = document.createElement('audio');
mainAudio.src = 'audio/main.mp3';
statusGame = 'open';

bossFight = document.createElement('audio');
bossFight.src = 'audio/fight.mp3';

function getRand(min, max) {
    return Math.random() * (max - min) + min;
}
player = document.querySelector('.player');

soundBtn = document.querySelector(".sound");
isSound = false; //flag for checking
soundBtn.onclick = function () {
    if (isSound == true) {
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

function createPlayer() {
    player = document.createElement("div");
    player.className = "player";
    mainScreen.appendChild(player);
}

delay = getRand(2000, 3000); //затримка для астероїдів
longDelay = getRand(3500, 5000);

function createAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.className = "enemy-1";
    asteroid.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 65) + "px";

    if (statusGame !== 'finish') {
        mainScreen.appendChild(asteroid);
        moveAsteroid(asteroid, 20);
    }
}

function createAsteroidBig() {
    let asteroidBig = document.createElement("div");
    asteroidBig.className = "enemy-2";
    asteroidBig.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 110) + "px";

    if (statusGame !== 'finish') {
        mainScreen.appendChild(asteroidBig);
        moveAsteroid(asteroidBig, 30);
    }
}

function moveAsteroid(asteroid, speed) {
    let timerID = setInterval(function () {
        asteroid.style.top = asteroid.offsetTop + 5 + "px";

        //console.dir(asteroid.offsetTop);
        if (asteroid.offsetTop > mainScreen.clientHeight) {
            asteroid.remove();
            
            //interval clearing
            clearInterval(timerID);
        }

        if (statusGame !== 'finish') {
            if(asteroid.className == "enemy-1") {
                collision(asteroid, 20);
            } else if(asteroid.className == "enemy-2") {
                collision(asteroid, 50);
            }
        }
    }, speed);
}

function createBullet() {
    bullet = document.createElement("div");
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
boomSize = null;
function createBoom(top, left, boomType) {
    let boom = document.createElement("div");
    boom.className = boomType;
    if(boomType == "smallBoom") {
        boom.style.top = top - 10 + "px";
        boom.style.left = left - 30 + "px";
    }
    else if(boomType == "bigBoom") {
        boom.style.top = top - 130 + "px";
        boom.style.left = left - 120 + "px";
    }
    
    mainScreen.appendChild(boom);

    setTimeout(function () {
        boom.remove();
    }, 600);

}

function isBoom(bullet) {
    let enemy = document.querySelectorAll(".enemy-1");
    let enemy2 = document.querySelectorAll(".enemy-2");

    for (i = 0; i < enemy.length; i++) {
        if (enemy[i] !== null) {
            if (enemy[i].offsetLeft + enemy[i].offsetWidth >= bullet.offsetLeft && enemy[i].offsetLeft <= bullet.offsetLeft + bullet.offsetWidth) {
                if (enemy[i].offsetTop >= bullet.offsetTop - bullet.offsetHeight && enemy[i].offsetTop <= bullet.offsetTop) {
                    bullet.remove();
                    createBoom(enemy[i].offsetTop, enemy[i].offsetLeft, "smallBoom");
                    enemy[i].remove();
                    numScores = numScores + 10;
                    score.remove();
                    createScore();
                }
            }
        }
    }

    for (i = 0; i < enemy2.length; i++) {
        if (enemy2[i] !== null) {
            if (enemy2[i].offsetLeft + enemy2[i].offsetWidth >= bullet.offsetLeft && enemy2[i].offsetLeft <= bullet.offsetLeft + bullet.offsetWidth) {
                if (enemy2[i].offsetTop >= bullet.offsetTop - bullet.offsetHeight && enemy2[i].offsetTop <= bullet.offsetTop) {
                    bullet.remove();
                    createBoom(enemy2[i].offsetTop, enemy2[i].offsetLeft, "bigBoom");
                    enemy2[i].remove();
                    numScores = numScores + 10;
                    score.remove();
                    createScore();

                }
            }
        }
    }
}

function gameEnd(health) {
    if (health <= 0) {
        statusGame = 'finish';
        mainScreen.style.display = 'none';
        deleteObj();
        mainAudio.pause();
        endScreen.style.display = 'block';
        againBtn.onclick = function() {
            location.reload();
        }
    }
}


function deleteObj() {
    player.remove();
    score.remove();
    indicator.remove();
}