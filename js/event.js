

startBtn.onclick = function () {
    startScreen.style.display = 'none';
    startGame();
}

soundBtn.onclick = function () {
    if (isSound == true) {
        if (isBoss == false) {
            mainAudio.play(); //audio start 
            mainAudio.volume = 1;
        } else {
            bossFight.play();
            bossFight.volume = 1
        }

        isSound = false;
        soundBtn.style.color = "white";

    }
    else {
        isSound = true;
        if (isBoss == false) {
            mainAudio.volume = 0; //mute audio
        } else {
            bossFight.volume = 0;
        }

        soundBtn.style.color = "gray";
    }
}

document.onkeydown = function (e) {
    if (e.keyCode == 39) {
        player.style.left = player.offsetLeft + 70 + 'px';
        if (player.offsetLeft > 430) {
            player.style.left = 480 + 'px';
        }
    } else if (e.keyCode == 37) {
        player.style.left = player.offsetLeft - 70 + 'px';
        if (player.offsetLeft < 50) {
            player.style.left = 5 + 'px';
        }
    }
    //shot
    
        if (e.keyCode == 32) {
            if(e.repeat != true)
                createBullet();
    }
    
}

