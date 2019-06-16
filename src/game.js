import Grid from './grid';

class Game {
    constructor (ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.grid = new Grid(width / 3);
        this.players = {};
    }

    addPlayer (socket) {
        this.players[socket.id] = socket;
    }

    takeTurn (row, col) {
        if (this.grid.field[row][col].value === "") {
            console.log('Okay to place tile');
            this.grid.field[row][col].value = "X";
            this.render(this.ctx)
        } else console.log('ERROR: TILE ALREADY PLACED');
    }

    render () {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.grid.render(this.ctx);
    }
}

export default Game;