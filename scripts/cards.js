import { gameLogic } from "./gameLogic.js";
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const cardTemplate = document.querySelector('#cardTemplate');
function createCard(flippedIcon) {
    let templCard = cardTemplate.content.cloneNode(true); // Клонируем содержимое шаблона
    let card = templCard.querySelector('.card');
    let iconElement = card.querySelector('i'); // Находим наш пустой тег <i>

    // Добавляем класс конкретной иконки из массива (например, fa-bolt)
    iconElement.classList.add(`fa-${flippedIcon}`);
    
    card.addEventListener('click', () => {
        // Защита: не даем нажать на уже открытую или угаданную карту
        if (card.classList.contains('flip') || card.classList.contains('successfully')) return;
        gameLogic(card);
    });
    
    return card;
}

function createIconsArray(initialCount) {
    let cardsIcons = [
        "compass", "cloud", "play", "bolt", "stop", "cogs", "atom",
        "basketball", "bolt-lightning", "bomb", "eye", "file", 
        "filter", "gear", "folder", "heart", "shield", "scissors", "pen-clip"
    ];
    let cards = cardsIcons.slice(0, (initialCount / 2));      
    let doubleCards = [...cards, ...cards]; // Удвоение массива
    return shuffleArray(doubleCards); 
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
export{createIconsArray, createCard}