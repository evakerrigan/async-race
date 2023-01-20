import './Garage.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import garageStore from '../../store/garageStore';
import Car from './Car/Car';

const Garage = (): TypeHTMLElement => {
  const container = Foundation.createElement('div', { className: 'garage' });

  const render = () => {
    const { cars, page } = garageStore.getState();

    const carsContainer = Foundation.createElement('ul', { className: 'auto-list' });

    cars?.forEach((car) => {
      carsContainer.appendChild(Car(car));
    });

    // const garageState: TypeGarageState = garageService.getCountCar();
    // const countCar: number;
    // if (garageState !== undefined) {
    //   countCar = garageState.count;
    // }
    // const countCar: number = garageState.count;

    container.innerHTML = `<h2 class="page-title">Garage countCar</h2>
    <div class="page-pagination">Page ${page}</div>`;

    container.appendChild(carsContainer);

    // ,
    // `
    //   <!--<div class="pagination-wrapper">
    //     <button data-car-id=${id} class="button">PREV</button>
    //     <button class="button">NEXT</button>
    //   </div>-->
    //   `

    return container;
  };

  garageStore.subscribe('component: Garage', render);

  return render();
};

export default Garage;
