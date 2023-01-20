import Foundation from '../../../core/libs/Foundation';
import garageService from '../../../core/services/garageService';
import garageStore from '../../../store/garageStore';
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
        garageService.resetSelectCar();
        // TODO:сделать при отмене селекта - удаление имени из апдейта
      } else {
        for (let i = 0; i < selectButton.length; i += 1) {
          selectButton[i].classList.remove('active');
        }
        target.classList.add('active');

        if (selectId !== null) {
          if (garageStore.state.cars !== undefined) {
            const indexClickCar: number = garageStore.state.cars.findIndex((elem) => elem.id === selectId);
            console.log('indexClickCar : ', indexClickCar);
            const nameClickCar = garageStore.state.cars[`${indexClickCar}`].name;
            console.log('nameClickCar = ', nameClickCar);
            const colorClickCar = garageStore.state.cars[`${indexClickCar}`].color;
            console.log('colorClickCar = ', colorClickCar);
            const inputNameUpdate = document.querySelector('.input-name-update');

            if (inputNameUpdate instanceof HTMLInputElement && inputNameUpdate) {
              inputNameUpdate.value = nameClickCar;
            }

            garageService.selectCar(selectId, nameClickCar, colorClickCar);
          }
        }
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
