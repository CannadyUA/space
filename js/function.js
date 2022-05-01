function collision(asteroid) {
    if (asteroid.offsetLeft + asteroid.offsetWidth >= player.offsetLeft && asteroid.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (asteroid.offsetTop >= player.offsetTop - player.offsetHeight && asteroid.offsetTop <= player.offsetTop) {
            param = parseInt(healthBar.style.width);
            if (param < 20) {
                healthBar.style.width = 0 + 'px';
            } else {
                healthBar.style.width = healthBar.offsetWidth - 20 + 'px';
            }
            asteroid.remove();
            createAsteroid();
            gameEnd();
        }
    }
}

function isBoom(bullet) {
    let enemy = document.querySelectorAll(".enemy-1");
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
}

function checkScore() {
    if (numScores % 100 == 0) {
        createHeart();
    }
}