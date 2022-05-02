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
            player.classList.remove('levitation');
            setTimeout(function () { player.classList.remove('blink'); }, 1000);
            // console.log(param);
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
        // console.log("shot");
        bossHealt = document.querySelector('.boss-health-bar');
        bossParam = bossHealt.clientWidth
        bossParam -= 10 
        bossHealt.style.width = bossHealt.clientWidth - 10 + 'px';
        // console.log(bossHealt.clientWidth);
        bullet.remove();
        if (bossParam < 5) {
            // win
            
        }
    }
}

function bullToPlayer(bullet, player) {
    if (bullet.offsetTop + bullet.clientHeight > player.offsetTop
        && bullet.offsetLeft > player.offsetLeft
        && bullet.offsetLeft < player.offsetLeft + player.clientWidth) {
        bullet.remove();
        playerHealt = document.querySelector('.health-bar');
        playerParam = playerHealt.clientWidth
        playerParam -= 10 
        playerHealt.style.width = playerHealt.clientWidth - 10 + 'px';
            if (playerHealt < 5) {
                //game over
            }
    }
}

