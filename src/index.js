import io from 'socket.io-client';

import Game from '../src/game';

export const socket = io("http://localhost:3000/");

// const start = (ttt, ctx) => {
//     ttt.render(ctx)
//     requestAnimationFrame(start);
// }


document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const size = canvas.width / 3;
    
    const ttt = new Game(ctx, canvas.width, canvas.height);

    // const update = start.bind(ttt, ctx);
    // start(ttt, ctx);
    // // update();
    ttt.render();
    canvas.addEventListener('click', e => {
        let row = Math.floor(e.clientY / size);
        let col = Math.floor(e.clientX / size);
        ttt.takeTurn(row, col)
    });
});