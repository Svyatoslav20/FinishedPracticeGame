import { generateConfetti } from "./confetti.js";
import { stopTimer } from "./timer.js";

const couple = {
    first: null,
    second: null,
    firstClickable: true,
    secondClickable: true
};

let totalFlips = 0;

export function gameLogic(card) {
    if (!couple.firstClickable || !couple.secondClickable) return;

    card.classList.add('flip');

    if (couple.first === null) {
        couple.first = card;
    } else {
        if (couple.first === card) return;
        
        couple.second = card;
        couple.firstClickable = false;
        couple.secondClickable = false;
        
        totalFlips++;
        document.querySelector('.steps').textContent = `Шаги: ${totalFlips}`;

        const icon1 = couple.first.querySelector('i').className;
        const icon2 = couple.second.querySelector('i').className;

        if (icon1 === icon2) {
            setTimeout(() => {
                couple.first.classList.add('successfully');
                couple.second.classList.add('successfully');
                refresh();
                checkWin();
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

function checkWin() {
    const all = document.querySelectorAll('.card').length;
    const success = document.querySelectorAll('.successfully').length;
    if (all > 0 && all === success) {
        stopTimer();
        generateConfetti(100);
        setTimeout(() => alert("Победа!"), 5000);
    }
}

export function resetGameStats() {
    totalFlips = 0;
    document.querySelector('.steps').textContent = `Шаги: 0`;
}