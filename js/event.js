startBtn.onclick = function () {
    startScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    createUFO();
    createScore();
    createHealth();
    createPlayer();
    mainAudio.play();
    //setTimeout(function () {
    //    ast.style.top = getRand(550, 600) + "px";
    //    ast.style.left = getRand(300, 330) + "px";
    //    collision();
    //}, 200);

    createAsteroid();
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

mainScreen.onclick = function () {
    numScores += 1;
    score.innerText = 'SCORE:' + numScores;
    if (numScores == 3) {
        ufo.style.top = 120 + 'px';
        ufo.style.transition = 'top 5s';
        mainAudio.pause();
        bossFight.play();
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
