import { createIconsArray, createCard } from "./cards.js";
import { startTimer } from "./timer.js";
const board = document.querySelector('.divS');
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const cardTemplate = document.querySelector('#cardTemplate');
function createBoard(columns) {
    board.innerHTML = ''; // Очищаем только зону игры (кнопку СТАРТ и инпут)
    
    let templateContent = gameTableTemplate.content.cloneNode(true);
    const restartBtn = templateContent.querySelector('.table__button');
    const gameTable = templateContent.querySelector('.table');
    
    gameTable.style.cssText = `
        display: grid;
        grid-template-columns: repeat(${columns}, 1fr);
        gap: 10px;
    `;
    
    const totalCards = columns * columns;
    let icons = createIconsArray(totalCards);
    
    icons.forEach((icon) => {
        const card = createCard(icon);
        gameTable.appendChild(card);
    });
    
    board.appendChild(gameTable);
    board.appendChild(restartBtn);
    
    totalTime = 60;
    totalFlips = 0;
    clearInterval(intervalId); // Сброс старого таймера, если он был
    startTimer();
    
    restartBtn.addEventListener('click', () => location.reload());
}
export{createBoard}