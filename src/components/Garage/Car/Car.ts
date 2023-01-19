import Foundation from '../../../core/libs/Foundation';
import garageService from '../../../core/services/garageService';
import { TypeCar } from '../../../types/types';
import './Car.scss';

const Car = (car: TypeCar): HTMLElement => {
  const { id, name, color } = car;

  const container = Foundation.createElement(
    'li',
    { className: 'auto-item' },
    `
      <div class="auto-wrapper">
        <button type="button" data-car-id=${id} class="button select">SELECT</button>
        <button type="button" data-car-id=${id} class="button remove">REMOVE</button>
        <div class="auto-title">${name}</div>
      </div>
      <div class="auto-sprint">
        <div class="auto-control">
          <button type="button" data-car-id=${id} class="button start">A</button>
          <button type="button" data-car-id=${id} class="button stop">B</button>
        </div>
        <div class="auto" style="background-color: ${color};"></div>
      </div>
        `
  );

  let removeId: number;
  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('remove')) {
      e.preventDefault();
      removeId = Number(target.getAttribute('data-car-id'));
      console.log('removeId = ', removeId);
      garageService.removeCar(removeId);
    }
  });
  let selectId: number;
  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('select')) {
      e.preventDefault();
      selectId = Number(target.getAttribute('data-car-id'));
      const selectButton = document.querySelectorAll('.select');
      console.log('selectId = ', selectId);
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else {
        for (let i = 0; i < selectButton.length; i = +1) {
          selectButton[i].classList.remove('active');
        }
        target.classList.add('active');
      }

      // target.classList.remove('active');
    }
  });

  const render = () => {
    return container;
  };

  return render();
};

export default Car;
