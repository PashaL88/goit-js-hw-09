// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

const buttonStartEl = document.querySelector('[data-start]');

const date = new Date();
buttonStartEl.disabled = true;

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
  },
};

flatpickr('input#datetime-picker', options);

buttonStartEl.addEventListener('click', onBtnStartClick);
function onBtnStartClick(event) {
}
