const TOTAL_TIME = 25 * 60 + 15; 
let timeLeft = TOTAL_TIME;

const timerDisplay = document.getElementById('timer');
const progressCircle = document.querySelector('circle.progress');
const totalLength = 2 * Math.PI * 45; 

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    const offset = totalLength * (1 - timeLeft / TOTAL_TIME);
    progressCircle.style.strokeDashoffset = offset;

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        timerDisplay.textContent = '00:00';
    }
}


progressCircle.style.strokeDasharray = totalLength;
progressCircle.style.strokeDashoffset = 0;

updateTimer();
