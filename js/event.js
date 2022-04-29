startBtn.onclick = function () {
    statusGame = 'play';
    startScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    createScore();
    createHealth();
    createPlayer();

    mainAudio.play();

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