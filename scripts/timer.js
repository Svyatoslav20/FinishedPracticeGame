import { totalFlips } from "./gameLogic.js";
let totalTime = 60;
let intervalId = null;
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
}
export{ startTimer, totalTime}