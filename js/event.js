startBtn.onclick = function () {
    startScreen.style.display = 'none';
    startGame();
}
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
    delay = getRand(1500, 2500); //затримка для астероїдів
    longDelay = getRand(3500, 5000);
    setInterval(createAsteroid, delay);
    setInterval(createAsteroidBig, longDelay);
    setInterval(createHeart, 30000);
}

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


document.onkeydown = function (e) {
    if (e.keyCode == 39) {
        player.style.left = player.offsetLeft + 70 + 'px';
        if (player.offsetLeft > 430) {
            player.style.left = 480 + 'px';
        }
    } else if (e.keyCode == 37) {
        player.style.left = player.offsetLeft - 70 + 'px';
        if (player.offsetLeft < 50) {
            player.style.left = 5 + 'px';
        }
    }

    //shot
    if (e.keyCode == 32) {
        createBullet();
    }
}


mainScreen.onclick = function () {
    numScores += 1;
    score.innerText = 'SCORE:' + numScores;
    if (numScores == 3) {
        ufo.style.top = 120 + 'px';
        ufo.style.transition = 'top 5s';
        mainAudio.pause();
        bossFight.play();
        bossFight.loop = true;
        createBossHealth();
        setTimeout(function () {
            moveBoss = setInterval(function () {
                if (ufo.offsetLeft <= 200) {
                    ufo.style.left = ufo.offsetLeft + 320 + 'px';
                } else {
                    ufo.style.left = ufo.offsetLeft - 380 + 'px';
                }
            }, 500);
            ufo.style.transition = 'left 1s';
        }, 4500);
    }
}

