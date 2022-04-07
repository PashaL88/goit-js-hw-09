// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const buttonStartEl = document.querySelector('[data-start]');

const date = new Date();
const now = Date.now();
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

buttonStartEl.addEventListener('submit', onBtnStartClick);

let intervalId = null;

function onBtnStartClick(event) {
  intervalId = setInterval(() => {
    const diff = timeDeadline - date;
    console.log(diff);
  }, 1000);
}
