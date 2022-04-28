startBtn = document.querySelector('#start-btn');
startScreen = document.querySelector('.start');
mainScreen = document.querySelector('.main');
player = null;
<<<<<<< HEAD
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
=======
numLives = 3;
numScores = 0;
gameBlock = document.querySelector('._block');

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

startBtn.onclick = function() {
    startScreen.style.display = 'none';
    createScore();
    createLives();
    createPlayer();
    createAsteroid();
}

function createScore() {    
>>>>>>> 16ff53ded78badeb5a31aef35aa3a56f04d9b3c3
    score = document.createElement('div');
    score.className = 'score';
    score.innerText = 'SCORE:' + numScores;
    mainScreen.appendChild(score);
}

<<<<<<< HEAD
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

=======
function createLives() {
    lives = document.createElement('div');
    lives.className = 'lives';
    lives.innerText = 'x' + numLives;
    mainScreen.appendChild(lives);
}

function createAsteroid() {
    asteroid = document.createElement("div");
    asteroid.className = "enemy-1";
    asteroid.style.left = getRand(gameBlock.clientWidth, mainScreen.clientWidth-15) + "px";
    mainScreen.appendChild(asteroid);
    moveAsteroid(asteroid);
}

function moveAsteroid(asteroid) {
    let timerID = setInterval(function(){
        asteroid.style.top = asteroid.offsetTop + 5 + "px";
        if(asteroid.offsetTop > mainScreen.clientHeight - 40) {
            asteroid.remove();
            createAsteroid();
            //interval clearing
            clearInterval(timerID);
        }
    }, 15);
}

function createUFO() {
    
>>>>>>> 16ff53ded78badeb5a31aef35aa3a56f04d9b3c3
}

function createPlayer() {
    player = document.createElement('div');
    player.className = 'player';
    mainScreen.appendChild(player);
}

<<<<<<< HEAD
//function collision() {
//    let positionAst = ast.offsetLeft - ast.offsetWidth;
//    let player = document.querySelector('.player');
//    let positionPlayer = player.offsetLeft - player.offsetWidth;

//    if (ast.offsetLeft + ast.offsetWidth >= player.offsetLeft && ast.offsetLeft <= player.offsetLeft + player.offsetWidth) {
//        if (ast.offsetTop >= player.offsetTop - player.offsetHeight && ast.offsetTop <= player.offsetTop) {
//            health = document.querySelector('.health-bar');
//            health.style.width = health.offsetWidth - 20 + 'px';
//        }
//    }
//}


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
=======

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
>>>>>>> 16ff53ded78badeb5a31aef35aa3a56f04d9b3c3
        }
    }
}
