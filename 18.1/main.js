let countdownTime = 10; // Змінна

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById('timer').textContent = `${minutes}:${seconds}`;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById('timer').textContent = '00:00';
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown(countdownTime);
});
