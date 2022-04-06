const buttonStartEl = document.querySelector('[data-start]');
const buttonStopEl = document.querySelector('[data-stop]');
const bodyEL = document.querySelector('body');

let timerId = null;

function onStartBtnClick() {
  timerId = setInterval(() => {
    bodyEL.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStartEl.disabled = true;
  buttonStopEl.disabled = false;
}

buttonStartEl.addEventListener('click', onStartBtnClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onStopBtnClick() {
  clearInterval(timerId);
  buttonStartEl.disabled = false;
  buttonStopEl.disabled = true;
}
buttonStopEl.addEventListener('click', onStopBtnClick);
