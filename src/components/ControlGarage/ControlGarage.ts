import './ControlGarage.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import garageService from '../../core/services/garageService';
import garageStore from '../../store/garageStore';

const ControlGarage = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'control' },
    `<div class="control-wrapper">
      <input value="" type="text" placeholder="Create name" class="control-input input-name-create" />
      <div class="control-color"></div>
      <button type="button" class="button create">CREATE</button>
    </div>
    <div class="control-wrapper">
      <input value="" type="text" placeholder="Update name" class="control-input input-name-update" />
      <div class="control-color"></div>
      <button type="button" class="button update">UPDATE</button>
    </div>
    <div class="control-wrapper">
      <button type="button" class="button race">RACE</button>
      <button type="button" class="button reset">RESET</button>
      <button type="button" class="button generate">GENERATE CARS</button>
    </div>`
  );

  let valueName: string;
  container.addEventListener('input', (e: Event): void => {
    const { target } = e;

    if (target instanceof HTMLInputElement && target.classList.contains('input-name-create')) {
      e.preventDefault();

      valueName = target.value;
    }
  });

  let valueColor: string;
  container.addEventListener('input', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLInputElement && target.classList.contains('input-name-update')) {
      e.preventDefault();

      valueColor = target.value;
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('create')) {
      e.preventDefault();
      console.log('нажали кнопку CREATE');
      valueColor = '#fff';
      console.log('valueName = ', valueName);
      console.log('valueColor = ', valueColor);
      garageService.createCar(valueName, valueColor);
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('update')) {
      e.preventDefault();
      console.log('нажали кнопку UPDATE');
      garageService.updateCar(1);
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('race')) {
      e.preventDefault();
      console.log('нажали кнопку RACE');
      garageService.raceCar(1);
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('reset')) {
      e.preventDefault();
      console.log('нажали кнопку RESET');
      garageService.resetCar(1);
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('generate')) {
      e.preventDefault();
      console.log('нажали кнопку update');
      garageService.generateCar(1);
    }
  });

  const render = () => {
    return container;
  };
  garageStore.subscribe('component: Control', render);

  return render();
};

export default ControlGarage;
