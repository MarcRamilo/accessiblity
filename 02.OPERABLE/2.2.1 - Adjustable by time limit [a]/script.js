let timeLimit = 10 * 60; // 10 minutes in seconds
let countdown = document.getElementById('countdown');
let increaseButton = document.getElementById('increaseButton');
let decreaseButton = document.getElementById('decreaseButton');
let timerInterval;

function updateCountdown() {
    let minutes = Math.floor(timeLimit / 60);
    let seconds = timeLimit % 60;
    countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLimit > 0) {
            timeLimit--;
            updateCountdown();
        } else {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
}

increaseButton.addEventListener('click', function() {
    timeLimit += 60; // Increase time limit by 1 minute
    updateCountdown();
});

decreaseButton.addEventListener('click', function() {
    if (timeLimit > 60) {
        timeLimit -= 60; // Decrease time limit by 1 minute
        updateCountdown();
    }
});

updateCountdown();
startTimer();
