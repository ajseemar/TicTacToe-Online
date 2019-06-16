import Grid from './grid';

class Game {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.grid = new Grid();
        console.log(this.grid);
    }
}

export default Game;