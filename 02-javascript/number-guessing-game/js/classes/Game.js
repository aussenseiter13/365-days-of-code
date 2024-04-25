class Game {
    players = [];
    currentPlayer;

    constructor() {
        console.log("Game CREATED");
    }

    start() {
        console.log("Game STARTED");
    }

    end() {
        console.log("Game END");
    }

    setRandomCurrentPlayer() {
        this.players[
            Math.floor(Math.random() * this.players.length)
        ].currentPlayer = true;
    }

    setCurrentPlayer() {
        // if last element then first in array
        // else current -> false , next index current = true
    }

    getCurrentPlayer() {
        return this.players
            .filter((el) => {
                return el.currentPlayer == true;
            })
            .pop();
    }
}

let game = new Game();

export { game };
