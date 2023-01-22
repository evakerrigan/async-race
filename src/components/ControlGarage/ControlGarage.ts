import './ControlGarage.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import garageService from '../../core/services/garageService';
import garageStore from '../../store/garageStore';
import dataCars from '../../data/dataCars';

const ControlGarage = (): TypeHTMLElement => {
  const container = Foundation.createElement(
    'div',
    { className: 'control' },
    `<div class="control-wrapper">
      <input value="" type="text" placeholder="Create name" class="control-input input-name-create" />
      <input type="color" class="control-color control-color-create" value="#ffc0cb" />
      <button type="button" class="button create">CREATE</button>
    </div>
    <div class="control-wrapper">
      <input value="" type="text" placeholder="Update name" class="control-input input-name-update" />
      <input type="color" class="control-color control-color-update" value="#ffc0cb" />
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

  let valueColorCreate: string;
  container.addEventListener('input', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLInputElement && target.classList.contains('control-color-create')) {
      e.preventDefault();

      valueColorCreate = target.value;
    }
  });
  let valueColorUpdate: string;
  container.addEventListener('input', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLInputElement && target.classList.contains('control-color-update')) {
      e.preventDefault();

      valueColorUpdate = target.value;
    }
  });

  container.addEventListener('click', (e: Event): void => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('create')) {
      e.preventDefault();
      console.log('нажали кнопку CREATE');
      console.log('valueName = ', valueName);
      console.log('valueColorCreate = ', valueColorCreate);
      if (valueName !== undefined) {
        garageService.createCar(valueName, valueColorCreate);
        const inputNameCreate = document.querySelector('.input-name-create');
        if (inputNameCreate instanceof HTMLInputElement && inputNameCreate) {
          if (inputNameCreate.value !== undefined) {
            inputNameCreate.value = '';
          }
        }
      }
    }
  });
  container.addEventListener('click', async (e: Event): Promise<void> => {
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('update')) {
      e.preventDefault();
      console.log('-----------------------------------------------------');
      console.log('нажали кнопку UPDATE');

      const dataSelectCar = garageService.getUpdateSelectCar();

      console.log('dataSelectCar = ', dataSelectCar);

      const inputNameUpdateChange = document.querySelector('.input-name-update');

      if (inputNameUpdateChange instanceof HTMLInputElement && inputNameUpdateChange) {
        if (inputNameUpdateChange.value !== null) {
          const newNameCar: string = inputNameUpdateChange.value;
          if (dataSelectCar.name === newNameCar && valueColorUpdate === undefined) {
            console.log('ничего не изменено');
          } else {
            console.log('dataSelectCar.id = ', dataSelectCar.id);
            console.log('valueColorUpdate = ', valueColorUpdate);
            garageService.updateCar(dataSelectCar.id, newNameCar, valueColorUpdate);
            inputNameUpdateChange.value = '';
            garageService.resetSelectCar();
          }
        }
      }
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
      console.log('нажали кнопку GENERATE');

      const { mark, model } = dataCars;

      for (let i = 0; i <= 10; i += 1) {
        const randomName = `${mark[Math.floor(Math.random() * mark.length)]} ${
          model[Math.floor(Math.random() * model.length)]
        }`;

        const randomColor = () => {
          const min = 0;
          const max = 255;
          const random = () => min + Math.floor(Math.random() * (max - min + 1));

          const r = random();
          const g = random();
          const b = random();

          const resultColor = `rgb(${r},${g},${b})`;

          return resultColor;
        };
        garageService.createCar(randomName, randomColor());
      }
    }
  });

  const render = () => {
    return container;
  };
  garageStore.subscribe('component: Control', render);

  return render();
};

export default ControlGarage;
