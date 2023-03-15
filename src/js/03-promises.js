import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
const btn = document.querySelector('button');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = e.currentTarget.elements.delay.valueAsNumber;
  const step = e.currentTarget.elements.step.valueAsNumber;
  const amount = e.currentTarget.elements.amount.valueAsNumber;

  for (let position = 1; position <= amount; position += 1) {
    const promiseDelay = delay + step * (position - 1);

    createPromise(position, promiseDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(` Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(` Rejected promise ${position} in ${delay}ms`);
      });
  }
});
