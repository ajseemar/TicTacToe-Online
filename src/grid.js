class Grid {
    constructor () {
        this.grid = this.generateGrid();
    }

    generateGrid () {
        const grid = new Array(3);
        for (let i = 0; i < grid.length; i++) grid[i] = new Array(3);
        return grid;
    }
}

export default Grid;