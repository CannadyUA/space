//variables
startBtn = document.querySelector('#start-btn');
againBtn = document.querySelector('.again-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
endScreen = document.querySelector('.finish');
winScreen = document.querySelector('.win');
player = document.querySelector('.player');
soundBtn = document.querySelector(".sound");
comment = document.querySelector('.comment');
startComment = document.querySelector('.start-comment');
moveBoss = 0;
bossShoting = 0;
timerID = 0;

statusGame = 'open';

isSound = false;
isBoss = false;

//counters
numScores = 0;
shotCount = 0;

//sounds
bossFight = document.createElement('audio');
bossFight.src = 'audio/fight.mp3';

mainAudio = document.createElement('audio');
mainAudio.src = 'audio/main.mp3';

winSound = document.createElement('audio');
winSound.src = 'audio/win-game.wav';

gameOver = document.createElement('audio');
gameOver.src = 'audio/game-over.mp3';

killUfo = document.createElement('audio');
killUfo.src = 'audio/kill.mp3';

letsGetHim = document.createElement('audio');
letsGetHim.src = 'audio/lets-get-him.mp3';

houston = document.createElement('audio');
houston.src = 'audio/houston.mp3';

//helping function
function getRand(min, max) {
    return Math.random() * (max - min) + min;
}

//main functions
function startGame() {
    statusGame = 'play';
    startScreen.style.display = 'none';
    endScreen.style.display = 'none';
    createPlayer();
    player.classList.add('levitation');
    createUFO();
    createScore();
    createHealth();
    mainScreen.style.display = "block";
    mainAudio.play();
    mainAudio.loop = true;

    startComment.innerText = 'The forces of darkness have invaded our Galaxy. And only the power of Purity and Valor can restore Justice';
    startComment.classList.add('start-comment-anim');
    setTimeout(function(){
        startComment.classList.remove('start-comment-anim');
        startComment.classList.add('start-comment-anim-fade');
        setTimeout(function() {
            startComment.remove();
        },4000);
    }, 5000);

    delay = getRand(1500, 2500); //delay for asteroids
    longDelay = getRand(3500, 5000);
    starDelay = getRand(5000, 8000);
    asteroidInt = setInterval(createAsteroid, 2000);
    asteroidInt = setInterval(createAsteroid, delay);
    asteroidInt2 = setInterval(createAsteroidBig, longDelay);
    heartInt = setInterval(createHeart, 30000); //delay for heart
    starInt = setInterval(createStar, starDelay); //delay for star
}

/*================Create function===============================*/
function createScore() {
    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE: ' + numScores;
    mainScreen.appendChild(score);
    gameBlock = document.querySelector('._block');
    if (numScores === 200 && isBoss === false || numScores == 210 && isBoss === false) {
        bossLevel();
        houston.play();
        comment.innerHTML = 'Ooh..<br>Houston, we have a problem';
        setTimeout(function() {
            comment.classList.add('comment-anim');
            comment.innerText = "Let's get him!!!";
            letsGetHim.play();
            setTimeout(function() {
                comment.remove();
            },3000);
        }, 4000);

    }
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


function createAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.className = "enemy-1";
    asteroid.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 65) + "px";

    if (statusGame !== 'finish') {
        mainScreen.appendChild(asteroid);
        moveAsteroid(asteroid, 15);
    }
}

function createAsteroidBig() {
    let asteroidBig = document.createElement("div");
    asteroidBig.className = "enemy-2";
    asteroidBig.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 110) + "px";

    if (statusGame !== 'finish') {
        mainScreen.appendChild(asteroidBig);
        moveAsteroid(asteroidBig, 18);
    }
}



function createHeart() {
    heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 45) + "px";
    mainScreen.appendChild(heart);
    moveHeart();
}

function createStar() {
    star = document.createElement('div');
    star.className = 'star';
    star.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth - 45) + "px";
    mainScreen.appendChild(star);
    moveStar();
}

function createBullet() {
    bullet = document.createElement("div");
    bullet.className = "bullet";
    mainScreen.appendChild(bullet);
    bullet.style.left = player.offsetLeft + 49 + "px";
    bullet.style.top = player.offsetTop - 24 + "px";
    moveBullet(bullet);
}

function createUFO() {
    ufo = document.createElement('div');
    ufo.className = 'boss';
    ufo.style.left = getRand(5, 330) + 'px';
    mainScreen.appendChild(ufo);
}

function bossLevel() {
    isBoss = true;
    ufo.style.top = 120 + 'px';
    ufo.style.transition = 'top 4.5s';
    mainAudio.pause();
    if (isSound == false) {
        bossFight.play();
        bossFight.volume = 0.6;
        bossFight.loop = true;
    }
    createBossHealth();
    setTimeout(function () {
        moveBoss = setInterval(function () {
            if (ufo.offsetLeft <= 200) {
                ufo.style.left = 330 + 'px';
            } else {
                ufo.style.left = 5 + 'px';
            }
        }, 1500);
        ufo.style.transition = 'left 1.5s';
        createBossBull();
    }, 4500);
}

function createBossBull() {
    bossShoting = setInterval(function () {
        bossBull = document.createElement('div');
        bossBull.className = 'boss-bullet';
        bossBull.style.left = ufo.offsetLeft + 100 + 'px';
        mainScreen.appendChild(bossBull);
        moveBossBull(bossBull);
    }, 1000);
}

function createBoom(top, left, boomType) {
    let boom = document.createElement("div");
    boom.className = boomType;
    if (boomType == "smallBoom") {
        boom.style.top = top - 10 + "px";
        boom.style.left = left - 30 + "px";
    }
    else if (boomType == "bigBoom") {
        boom.style.top = top - 90 + "px";
        boom.style.left = left - 90 + "px";
    }
    else if (boomType == 'boomAsteroid') {
        boom.style.top = top - 10 + "px";
        boom.style.left = left - 30 + "px";
    }

    mainScreen.appendChild(boom);

    setTimeout(function () {
        boom.remove();
    }, 600);
}

/*======================Move function============================================== */

function moveAsteroid(asteroid, speed) {
    let timerID = setInterval(function () {
        asteroid.style.top = asteroid.offsetTop + 5 + "px";

        if (asteroid.offsetTop > mainScreen.clientHeight) {
            asteroid.remove();
            //interval clearing
            clearInterval(timerID);
        }

        if (statusGame !== 'finish') {
            if (asteroid.className == "enemy-1") {
                collision(asteroid, 40);
            } else if (asteroid.className == "enemy-2") {
                collision(asteroid, 60);
            }
        }
    }, speed);
}

function moveHeart() {
    let timerID = setInterval(function () {
        heart.style.top = heart.offsetTop + 5 + "px";
        if (heart.offsetTop > mainScreen.clientHeight) {
            heart.remove();
            clearInterval(timerID);
        }

        if (statusGame !== 'finish') {
            if (heart.offsetLeft + heart.offsetWidth >= player.offsetLeft && heart.offsetLeft <= player.offsetLeft + player.offsetWidth) {
                if (heart.offsetTop >= player.offsetTop - player.offsetHeight + 60 && heart.offsetTop <= player.offsetTop) {
                    if (parseInt(healthBar.style.width) < 244) {
                        healthBar.style.width = healthBar.offsetWidth + 30 + 'px';
                    }
                    heart.remove();
                    //interval clearing
                    clearInterval(timerID);
                }
            }
        }
    }, 20);
}

function moveStar() {
    let timerID = setInterval(function () {
        star.style.top = star.offsetTop + 5 + "px";
        if (star.offsetTop > mainScreen.clientHeight) {
            star.remove();
            clearInterval(timerID);
        }

        if (statusGame !== 'finish') {
            if (star.offsetLeft + star.offsetWidth >= player.offsetLeft && star.offsetLeft <= player.offsetLeft + player.offsetWidth) {
                if (star.offsetTop >= player.offsetTop - player.offsetHeight + 60 && star.offsetTop <= player.offsetTop) {
                    numScores += 20;
                    score.innerText = "SCORE: " + numScores;
                    star.remove();
                    //interval clearing
                    clearInterval(timerID);
                }
            }
        }
    }, 20);
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
        bullToUfo(bullet, ufo);
    }, 15);
}


function moveBossBull(bull) {
    bossBullMove = setInterval(function () {
        bull.style.top = bull.offsetTop + 15 + 'px';
        if (bull.offsetTop > mainScreen.clientHeight) {
            bull.remove();
        }
        bullToPlayer(bull, player)
    }, 20);
}

/*======================Final function======================================*/
function gameEnd(health) {
    if (health <= 0) {
        statusGame = 'finish';
        mainScreen.style.display = 'none';
        deleteObj();
        mainAudio.pause();
        bossFight.pause();
        gameOver.play();
        endScreen.style.display = 'block';
        againBtn.onclick = function () {
            location.reload();
        }
    }
}

function winner() {
    statusGame = 'winner';
    winScore = document.querySelector('.win-score');
    againBtn = document.querySelector('.res-btn');
    winScore.innerText = 'SCORE: ' + (numScores + 10000);
    mainScreen.style.display = 'none';
    winScreen.style.display = 'block';
    bossFight.pause();
    winSound.play();
    againBtn.onclick = function () {
        location.reload();
    }
}

function deleteObj() {
    player.remove();
    score.remove();
    indicator.remove();
}


