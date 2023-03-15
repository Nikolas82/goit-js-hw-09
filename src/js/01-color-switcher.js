function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const TIME_DELAY = 1000;
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', handlerStart);

stopBtn.addEventListener('click', handlerStop);

function handlerStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
  }, TIME_DELAY);
}

function handlerStop() {
  clearInterval(timerId);

  startBtn.disabled = false;
  stopBtn.disabled = true;
}


