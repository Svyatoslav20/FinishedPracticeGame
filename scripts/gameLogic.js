import { startTimer } from "./timer.js";
let totalTime = 60;
let totalFlips = 0;
let intervalId = null;
const gameTableTemplate = document.querySelector('#gameTableTemplate');
const cardTemplate = document.querySelector('#cardTemplate');
const startBtn = document.querySelector('.startBtn');
const startInp = document.querySelector('.startInp');
const couple = {
    first: null,
    second: null,
    firstClickable: true,
    secondClickable: true
};
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
}

function refresh() {
    couple.first = null;
    couple.second = null;
    couple.firstClickable = true;
    couple.secondClickable = true;
}

function isWin() {
    const allCards = document.querySelectorAll('.card');
    const successCards = document.querySelectorAll('.successfully');
    if (allCards.length === successCards.length) {
        clearInterval(intervalId);
        setTimeout(() => alert("Вы победили!"), 500);
    }
}
startBtn.addEventListener('click', () => {
    let inpVal = parseInt(startInp.value);
    if (inpVal >= 2 && inpVal <= 6 && inpVal % 2 === 0) {
        createBoard(inpVal);
    } else {
        alert('Введите четное число от 2 до 6');
    }
});
export{gameLogic, totalFlips}