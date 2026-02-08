import { gameLogic } from "./gameLogic.js";

export function createCard(flippedIcon) {
    const cardTemplate = document.querySelector('#cardTemplate');
    let templCard = cardTemplate.content.cloneNode(true);
    let card = templCard.querySelector('.card');
    let iconElement = card.querySelector('i');

    iconElement.classList.add(`fa-${flippedIcon}`);
    
    card.addEventListener('click', () => {
        if (card.classList.contains('flip') || card.classList.contains('successfully')) return;
        gameLogic(card);
    });
    
    return card;
}

export function createIconsArray(initialCount) {
    const cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "atom", "bomb", "eye", "gear", "heart"];
    let cards = cardsIcons.slice(0, (initialCount / 2));      
    let doubleCards = [...cards, ...cards];
    return doubleCards.sort(() => Math.random() - 0.5); 
}