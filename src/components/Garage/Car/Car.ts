import Foundation from '../../../core/libs/Foundation';
import { TypeCar } from '../../../types/types';
import './Car.scss';

const Car = (car: TypeCar): HTMLElement => {
  const { id, name, color } = car;

  const container = Foundation.createElement(
    'li',
    { className: 'auto-item' },
    `
      <div class="auto-wrapper">
        <button data-car-id=${id} class="button">SELECT</button>
        <button data-car-id=${id} class="button">REMOVE</button>
        <div class="auto-title">${name}</div>
      </div>
      <div class="auto-sprint">
        <div class="auto-control">
          <button data-car-id=${id} class="button start">A</button>
          <button data-car-id=${id} class="button stop">B</button>
        </div>
        <div class="auto" style="background-color: ${color};"></div>
      </div>
        `
  );

  const render = () => {
    return container;
  };

  return render();
};

export default Car;
