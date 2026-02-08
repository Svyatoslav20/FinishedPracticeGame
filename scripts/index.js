import { createBoard } from "./createBoard.js";

const startBtn = document.querySelector('.startBtn');
const startInp = document.querySelector('.startInp');

startBtn.addEventListener('click', () => {
    let val = parseInt(startInp.value);
    if (val >= 2 && val <= 6 && val % 2 === 0) {
        createBoard(val);
    } else {
        alert('Введите четное число от 2 до 6');
    }
});