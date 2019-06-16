import io from 'socket.io-client';

import Game from '../src/game';

export const socket = io("http://localhost:3000/");

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    new Game(canvas.width, canvas.height);
});