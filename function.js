//function collision() {
//    let positionAst = ast.offsetLeft - ast.offsetWidth;
//    let player = document.querySelector('.player');
//    let positionPlayer = player.offsetLeft - player.offsetWidth;

//    if (ast.offsetLeft + ast.offsetWidth >= player.offsetLeft && ast.offsetLeft <= player.offsetLeft + player.offsetWidth) {
//        if (ast.offsetTop >= player.offsetTop - player.offsetHeight && ast.offsetTop <= player.offsetTop) {
//            health = document.querySelector('.health-bar');
//            health.style.width = health.offsetWidth - 20 + 'px';
//            gameEnd(health);
//        }
//    }
//}

//function gameEnd(health) {
//    param = parseInt(health.style.width);
//    if (param <= 0) {
//        mainScreen.style.display = 'none';
//    }
//}