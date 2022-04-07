// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const buttonStartEl = document.querySelector('[data-start]');

const date = new Date();
// const now = Date.now();
buttonStartEl.disabled = true;
let timeDeadline = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < date) {
      window.alert('Please choose a date in the future');
    } else {
      buttonStartEl.disabled = false;
    }
    timeDeadline = selectedDates[0];
  },
};
flatpickr('input#datetime-picker', options);

buttonStartEl.addEventListener('click', onBtnStartClick);

let intervalId = null;

function onBtnStartClick(event) {
  intervalId = setInterval(() => {
    const diff = timeDeadline - new Date();
    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }
    // const { days, hours, minutes, seconds } = convertMs(diff);
    // console.log({ days, hours, minutes, seconds });
    setTimer(diff);
  }, 1000);
}
function setTimer() {
  const { days, hours, minutes, seconds } = convertMs(timeDeadline - new Date());
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
