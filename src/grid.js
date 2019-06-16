import Cell from './cell';

class Grid {
    constructor (cellSize) {
        this.field = this.generateGrid();
        this.populateGrid(cellSize);
    }

    generateGrid () {
        const grid = new Array(3);
        for (let i = 0; i < grid.length; i++) grid[i] = new Array(3);
        return grid;
    }

    populateGrid(cellSize) {
        for (let col = 0; col < this.field.length; col++) {
            for (let row = 0; row < this.field.length; row++) {
                this.field[row][col] = new Cell(row, col, cellSize);
            }
        }
    }

    render (ctx) {
        this.field.forEach(col => {
            col.forEach(cell => {
                cell.render(ctx);
            });
        });
    }
}

export default Grid;