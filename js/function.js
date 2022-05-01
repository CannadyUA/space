function collision(asteroid, healthValue) {
    if (asteroid.offsetLeft + asteroid.offsetWidth >= player.offsetLeft && asteroid.offsetLeft <= player.offsetLeft + player.offsetWidth) {
        if (asteroid.offsetTop >= player.offsetTop - player.offsetHeight && asteroid.offsetTop <= player.offsetTop) {
            healthBar = document.querySelector('.health-bar');
            param = parseInt(healthBar.style.width);
            healthBar.style.width = healthBar.offsetWidth - healthValue + 'px';
            health = param - healthValue;
            asteroid.remove();
            // createAsteroid();
            gameEnd(health);
        }
    }
}