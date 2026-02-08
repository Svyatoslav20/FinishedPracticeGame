export function generateConfetti(num) {
    const colors = ['#d13447', '#ffbf00', '#263672'];
    const confettiContainer = document.querySelector('.confetti');

    for (let i = 0; i < num; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: ${Math.floor(Math.random() * 15)}px;
            height: ${Math.floor(Math.random() * 7)}px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() + 0.5};
            transform: rotate(${Math.random() * 360}deg);
            animation: moveDown ${((Math.random() + 0.5) * 5)}s linear forwards;
        `;
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 6000);
    }
}