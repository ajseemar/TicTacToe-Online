import Grid from './grid';

class Game {
    constructor (width, height) {
        this.width = width;
        this.height = height;
        this.grid = new Grid(width / 3);
        console.log(this.grid);
    }

    render (ctx) {
        this.grid.render(ctx);
    }
}

export default Game;