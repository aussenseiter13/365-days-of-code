export default class Player {
    constructor(nickname, score = 0, currentPlayer = false) {
        this.nickname = nickname;
        this.score = score;
        this.currentPlayer = false;
    }
}
