function collision(asteroid) {
    positionAsteroid = asteroid.offsetLeft - asteroid.offsetWidth;

    positionPlayer = player.offsetLeft - player.offsetWidth;

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