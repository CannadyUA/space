function collision(asteroid) {
    if (asteroid.offsetLeft + asteroid.offsetWidth >= player.offsetLeft && asteroid.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (asteroid.offsetTop >= player.offsetTop - player.offsetHeight && asteroid.offsetTop <= player.offsetTop) {
            healthBar = document.querySelector('.health-bar');
            param = parseInt(healthBar.style.width);
            healthBar.style.width = healthBar.offsetWidth - 20 + 'px';
            health = param - 20;
            asteroid.remove();
            createAsteroid();
            gameEnd(health);
        }
    }
}

function bullToUfo(bullet, enemy) {
    if (bullet.offsetTop <= enemy.offsetTop + enemy.clientHeight - 50 
        && bullet.offsetLeft >= enemy.offsetLeft 
        && bullet.offsetLeft <= enemy.offsetLeft + enemy.clientWidth) {
        console.log("shot");
        bossHealt = document.querySelector('.boss-health-bar');
        bossHealt.style.width = bossHealt.clientWidth - 5 + 'px';
        
        bullet.remove();
        if (bullet.offsetTop < mainScreen.clientHeight) {
            bullet.remove();
        }
    }
}

