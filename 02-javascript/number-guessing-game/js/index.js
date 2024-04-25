import { game } from "./classes/Game.js";
import Player from "./classes/Player.js";

let startGameButton = document.getElementById("startGameButton");

startGameButton.addEventListener(
    "click",
    (e) => {
        game.start();
    },
    { once: true }
);

let bot = new Player("bot1", 0, false);
let bot2 = new Player("bot2", 0, false);
let bot3 = new Player("bot3", 0, false);
game.players.push(bot);
game.players.push(bot2);
game.players.push(bot3);

game.setRandomCurrentPlayer();

console.log(game.getCurrentPlayer());
console.log(game.players);

console.log(game.players.indexOf(game.getCurrentPlayer()));
