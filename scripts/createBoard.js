import { createIconsArray, createCard } from "./cards.js";
import { startTimer } from "./timer.js";
import { resetGameStats } from "./gameLogic.js";

const board = document.querySelector('.divS');
const gameTableTemplate = document.querySelector('#gameTableTemplate');

export function createBoard(columns) {
    board.innerHTML = '';
    resetGameStats();
    
    const templateContent = gameTableTemplate.content.cloneNode(true);
    const restartBtn = templateContent.querySelector('.table__button');
    const gameTable = templateContent.querySelector('.table');
    
    gameTable.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        gap: 10px;
    `;
    
    const icons = createIconsArray(columns * columns);
    icons.forEach(icon => gameTable.appendChild(createCard(icon)));
    
    board.appendChild(gameTable);
    board.appendChild(restartBtn);
    
    startTimer();
    restartBtn.addEventListener('click', () => location.reload());
}