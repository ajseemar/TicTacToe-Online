class Cell {
    constructor (row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.value = "";
    }

    render (ctx) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(this.row * this.size, this.col * this.size, this.size, this.size);
        ctx.closePath();
        ctx.stroke();
    }
}

export default Cell;