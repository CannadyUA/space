startBtn.onclick = function () {
    statusGame = 'play';
    startScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    createScore();
    createHealth();
    mainAudio.play();
    mainScreen.style.display = "block";
    setInterval(createAsteroid, 2500);
    // createBullet();
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

    //shot
    if (e.keyCode == 32) {
        createBullet();
    }

}