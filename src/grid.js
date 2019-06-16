import Cell from './cell';

class Grid {
    constructor (cellSize) {
        this.grid = this.generateGrid();
        this.populateGrid(cellSize);
    }

    generateGrid () {
        const grid = new Array(3);
        for (let i = 0; i < grid.length; i++) grid[i] = new Array(3);
        return grid;
    }

    populateGrid(cellSize) {
        for (let col = 0; col < this.grid.length; col++) {
            for (let row = 0; row < this.grid.length; row++) {
                this.grid[row][col] = new Cell(row, col, cellSize);
            }
        }
    }

    render (ctx) {
        this.grid.forEach(col => {
            col.forEach(cell => {
                cell.render(ctx);
            });
        });
    }
}

export default Grid;