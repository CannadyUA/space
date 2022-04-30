startBtn.onclick = function () {
    startScreen.style.display = 'none';
    createScore();
    createHealth();
    createBullet();
    mainAudio.play();
    mainScreen.style.display = "block";
    //setTimeout(function () {
    //    ast.style.top = getRand(550, 600) + "px";
    //    ast.style.left = getRand(300, 330) + "px";
    //    collision();
    //}, 200);
    createAsteroid();
    setTimeout(createAsteroid, 2500);
    

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
    if(e.keyCode == 32) {
        createBullet();
    }
}