class Cell {
    constructor (row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.value = "";
        this.position = {
            x: this.col * this.size,
            y: this.row * this.size
        }
    }

    render (ctx) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size, this.size);
        ctx.closePath();
        ctx.stroke();

        if (this.value !== "") {
            ctx.font = '50px serif';
            ctx.fillText(this.value, this.position.x + this.size / 2 - 5, this.position.y + this.size / 2 - 5);
        }
    }
}

export default Cell;