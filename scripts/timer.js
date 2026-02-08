let intervalId = null;
let totalTime = 60;

export function startTimer() {
    const timeElement = document.querySelector('.time');
    totalTime = 60;
    clearInterval(intervalId);
    
    intervalId = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(intervalId);
            alert("Время вышло!");
            location.reload();
            return;
        }
        totalTime--;
        timeElement.textContent = `Время: ${totalTime}`;
    }, 1000);
}

export function stopTimer() {
    clearInterval(intervalId);
}