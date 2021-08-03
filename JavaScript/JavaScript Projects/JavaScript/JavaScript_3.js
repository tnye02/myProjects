function gameGenre(game) {
    var game_type =  game.getAttribute("data-game-title");
    alert(game_type + " is a great " + game.innerHTML + " that you should definitely check out!");
}