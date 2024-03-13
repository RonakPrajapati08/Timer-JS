let timerInterval;
let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");

let totalSeconds = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = -1;
  updateTimer();
  startButton.disabled = false;
  stopButton.disabled = false;
}

function updateTimer() {
  totalSeconds++;
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  timerElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
