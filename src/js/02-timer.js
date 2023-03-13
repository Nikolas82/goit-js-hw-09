import Notiflix from 'notiflix';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const TIME_DELAY = 1000;

const ref = {
  input: document.querySelector('#datetime-picker'),
  btn: document.querySelector('button[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

ref.btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      ref.btn.disabled = false;
    }
  },
};

const datePicker = flatpickr(ref.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

ref.btn.addEventListener('click', () => {
  const countdownDate = datePicker.selectedDates[0].getTime();
  ref.btn.disabled = true;
  const timer = setInterval(() => {
    const ms = countdownDate - new Date().getTime();

    if (ms <= 0) {
      clearInterval(timer);
      ref.days.textContent = '00';
      ref.hours.textContent = '00';
      ref.minutes.textContent = '00';
      ref.seconds.textContent = '00';
      return;
    }

    const time = convertMs(ms);
    ref.days.textContent = time.days;
    ref.hours.textContent = time.hours;
    ref.minutes.textContent = time.minutes;
    ref.seconds.textContent = time.seconds;
  }, TIME_DELAY);
});
