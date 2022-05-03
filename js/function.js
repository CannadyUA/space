

function collision(asteroid, healthValue) {
    if (asteroid.offsetLeft + asteroid.offsetWidth >= player.offsetLeft && asteroid.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (asteroid.offsetTop >= player.offsetTop - player.offsetHeight && asteroid.offsetTop <= player.offsetTop) {
            param = parseInt(healthBar.style.width);
            if (param < healthValue) {
                healthBar.style.width = 0 + 'px';
                param = 0;
            } else {
                healthBar.style.width = healthBar.offsetWidth - healthValue + 'px';
            }
            createBoom(asteroid.offsetTop, asteroid.offsetLeft, 'boomAsteroid');
            asteroid.remove();
            player.classList.add('blink');
            player.classList.remove('levitation');
            setTimeout(function () { player.classList.remove('blink'); }, 1000);
            gameEnd(param);

        }
    }
}

function isBoom(bullet) {
    let enemy = document.querySelectorAll(".enemy-1, .enemy-2");
    for (i = 0; i < enemy.length; i++) {
        if (enemy[i] !== null) {
            if (enemy[i].offsetLeft + enemy[i].offsetWidth >= bullet.offsetLeft && enemy[i].offsetLeft <= bullet.offsetLeft + bullet.offsetWidth) {
                if (enemy[i].offsetTop >= bullet.offsetTop - bullet.offsetHeight && enemy[i].offsetTop <= bullet.offsetTop) {
                    bullet.remove();
                    if (enemy[i].className == "enemy-1") {
                        createBoom(enemy[i].offsetTop, enemy[i].offsetLeft, "smallBoom");
                        enemy[i].remove();
                        numScores = numScores + 10;
                    }

                    else if (enemy[i].className == "enemy-2") {
                        createBoom(enemy[i].offsetTop, enemy[i].offsetLeft, "bigBoom");
                        shotCount = shotCount + 1;
                        if (shotCount == 2) {
                            enemy[i].remove();
                            numScores = numScores + 20;
                            shotCount = 0;
                        }
                    }
                    score.remove();
                    createScore();
                }
            }
        }
    }
}

function bullToUfo(bullet, enemy) {
    if (bullet.offsetTop <= enemy.offsetTop + enemy.clientHeight - 50
        && bullet.offsetLeft >= enemy.offsetLeft
        && bullet.offsetLeft <= enemy.offsetLeft + enemy.clientWidth) {
        createBoom(bullet.offsetTop, bullet.offsetLeft, "smallBoom");
        numScores = numScores + 100;
        score.innerText = "SCORE: " + numScores;
        bossHealt = document.querySelector('.boss-health-bar');
        bossParam = bossHealt.clientWidth;
        bossParam -= 10;
        bossHealt.style.width = bossHealt.clientWidth - 10 + 'px';
        bullet.remove();

        if (bossParam < 10) {
            destroyUfo();
            bossFight.pause();
            killUfo.play();
        }
    }
}

function bullToPlayer(bullet, player) {
    console.log('ok');
    if (bullet.offsetTop + bullet.clientHeight > player.offsetTop
        && bullet.offsetLeft > player.offsetLeft
        && bullet.offsetLeft < player.offsetLeft + player.clientWidth) {

        bullet.remove();
        player.classList.add('blink');
        player.classList.remove('levitation');
        setTimeout(function () { player.classList.remove('blink'); }, 1000);

        playerHealt = document.querySelector('.health-bar');
        playerParam = parseInt(playerHealt.style.width);
        if (playerParam < 10) {
            playerHealt.style.width = 0 + 'px';
            playerParam = 0;
        } else {
            playerHealt.style.width = playerHealt.clientWidth - 10 + 'px';
        }
        gameEnd(playerParam);

    }
}

function destroyUfo() {
    clearInterval(moveBoss);
    clearInterval(bossShoting);
    clearInterval(timerID);
    destUfo = setInterval(function () {

        createBoom(getRand(20, 150), getRand(ufo.offsetLeft, ufo.offsetLeft + ufo.clientWidth), "bigBoom");
    }, 1000);
    setTimeout(function () {
        clearInterval(destUfo);
        winner();
    }, 5000);
}