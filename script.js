const board = document.querySelector('.divS');
const startBtn = document.querySelector('.startBtn');
const startInp = document.querySelector('.startInp');
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const cardTemplate = document.querySelector('#cardTemplate');

let totalTime = 60;
let totalFlips = 0;
let intervalId = null;

const couple = {
    first: null,
    second: null,
    firstClickable: true,
    secondClickable: true
};

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
} // перенесено

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
// perenos

function createIconsArray(initialCount) {
    let cardsIcons = [
        "compass", "cloud", "play", "bolt", "stop", "cogs", "atom",
        "basketball", "bolt-lightning", "bomb", "eye", "file", 
        "filter", "gear", "folder", "heart", "shield", "scissors", "pen-clip"
    ];
    let cards = cardsIcons.slice(0, (initialCount / 2));      
    let doubleCards = [...cards, ...cards]; // Удвоение массива
    return shuffleArray(doubleCards); 
} // perenos

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
} // alread

function gameLogic(card) {
    // Если две карты уже открыты и проверяются, или время вышло — игнорируем клик
    if (!couple.firstClickable || !couple.secondClickable || totalTime <= 0) return;

    card.classList.add('flip');

    if (couple.first === null) {
        couple.first = card;
    } else {
        couple.second = card;
        couple.firstClickable = false;
        couple.secondClickable = false;
        
        totalFlips++;
        document.querySelector('.steps').textContent = `Шаги: ${totalFlips}`; // Обновляем текст шагов

        // Сравниваем названия иконок (проверяем все классы элемента <i>)
        const icon1 = couple.first.querySelector('i').className;
        const icon2 = couple.second.querySelector('i').className;

        if (icon1 === icon2) {
            setTimeout(() => {
                couple.first.classList.add('successfully');
                couple.second.classList.add('successfully');
                refresh();
                isWin();
            }, 500);
        } else {
            setTimeout(() => {
                couple.first.classList.remove('flip');
                couple.second.classList.remove('flip');
                refresh();
            }, 800);
        }
    }
} // yes

function refresh() {
    couple.first = null;
    couple.second = null;
    couple.firstClickable = true;
    couple.secondClickable = true;
} // yeas

function isWin() {
    const allCards = document.querySelectorAll('.card');
    const successCards = document.querySelectorAll('.successfully');
    if (allCards.length === successCards.length) {
        clearInterval(intervalId);
        setTimeout(() => alert("Вы победили!"), 500);
    }
} // ye

function startTimer() {
    const timeElement = document.querySelector('.time');
    
    intervalId = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(intervalId);
            alert("Время вышло!");
            location.reload();
            return;
        }
        totalTime--;
        // Используем шаблонную строку, чтобы сохранить слово "Время"
        timeElement.textContent = `Время: ${totalTime}`;
    }, 1000);
} // alre

// Слушатель кнопки старта
startBtn.addEventListener('click', () => {
    let inpVal = parseInt(startInp.value);
    if (inpVal >= 2 && inpVal <= 6 && inpVal % 2 === 0) {
        createBoard(inpVal);
    } else {
        alert('Введите четное число от 2 до 6');
    }
}); // yes