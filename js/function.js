function collision(asteroid, healthValue) {
    if (asteroid.offsetLeft + asteroid.offsetWidth >= player.offsetLeft && asteroid.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (asteroid.offsetTop >= player.offsetTop - player.offsetHeight && asteroid.offsetTop <= player.offsetTop) {
            param = parseInt(healthBar.style.width);

            if (param < healthValue) {
                healthBar.style.width = 0 + 'px';
            } else {
                healthBar.style.width = healthBar.offsetWidth - healthValue + 'px';
            }
            createBoom(asteroid.offsetTop, asteroid.offsetLeft, 'boomAsteroid');
            asteroid.remove();
            player.classList.add('blink');
            setTimeout(function () { player.classList.remove('blink'); }, 1000);
            gameEnd();

            // createAsteroid();

        }
    }
}

function isBoom(bullet) {
    let enemy = document.querySelectorAll(".enemy-1");
    let enemy2 = document.querySelectorAll(".enemy-2");
    //console.log(enemy2);

    for (i = 0; i < enemy.length; i++) {
        if (enemy[i] !== null) {
            if (enemy[i].offsetLeft + enemy[i].offsetWidth >= bullet.offsetLeft && enemy[i].offsetLeft <= bullet.offsetLeft + bullet.offsetWidth) {
                if (enemy[i].offsetTop >= bullet.offsetTop - bullet.offsetHeight && enemy[i].offsetTop <= bullet.offsetTop) {
                    bullet.remove();
                    createBoom(enemy[i].offsetTop, enemy[i].offsetLeft);
                    enemy[i].remove();
                    createAsteroid();
                    numScores = numScores + 10;
                    score.remove();
                    createScore();
                    checkScore();
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

function checkScore() {
    if (numScores % 100 === 0) {
        createHeart();
    }
}