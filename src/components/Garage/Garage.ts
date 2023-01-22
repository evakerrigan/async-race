import './Garage.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import garageStore from '../../store/garageStore';
import Car from './Car/Car';
import garageService from '../../core/services/garageService';

const Garage = (): TypeHTMLElement => {
  const container = Foundation.createElement('div', { className: 'garage' });

  container.addEventListener('click', (e: Event): void => {
    const { page } = garageStore.getState();

    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('prev')) {
      e.preventDefault();
      console.log('нажали кнопку PREV');
      const currentPage = page as number;
      const prevPage: number = currentPage - 1;
      if (prevPage === 0) {
        console.log('страницы 0 не существует');
      } else if (prevPage > 0) {
        console.log('prevPage', prevPage);
        garageService.setCars(prevPage);
      }
    }
  });
  container.addEventListener('click', (e: Event): void => {
    const { page, count } = garageStore.getState();
    const { target } = e;
    if (target instanceof HTMLButtonElement && target.classList.contains('next')) {
      e.preventDefault();
      console.log('--------------------------------------------------------------------');
      console.log('нажали кнопку NEXT');
      const currentPage = page as number;
      const nextPage: number = currentPage + 1;
      const countCar = count as number;
      const maxPage = Math.ceil(countCar / 7);
      if (nextPage <= maxPage) {
        console.log('страница меньше или равна максимальной, все ок');
        console.log('nextPage', nextPage);
        console.log('maxPage', maxPage);
        garageService.setCars(nextPage);
      } else {
        console.log('страница больше максимальной, значит не существует');
      }
    }
  });

  const render = () => {
    const { cars, page, count } = garageStore.getState();

    const carsContainer = Foundation.createElement('ul', { className: 'auto-list' });

    const pagination = Foundation.createElement(
      'ul',
      { className: 'auto-list' },
      `<div class="pagination-wrapper">
        <button class="button prev">PREV</button>
        <div class="pagination-number">${page}</div>
        <button class="button next">NEXT</button>
      </div>`
    );

    cars?.forEach((car) => {
      carsContainer.appendChild(Car(car));
    });

    // const garageState: TypeGarageState = garageService.getCountCar();
    // const countCar: number;
    // if (garageState !== undefined) {
    //   countCar = garageState.count;
    // }
    // const countCar: number = garageState.count;

    container.innerHTML = `<h2 class="page-title">Garage: ${count}</h2>
    <div class="page-pagination">Page: ${page}</div>`;

    container.appendChild(carsContainer);

    container.appendChild(pagination);

    return container;
  };

  garageStore.subscribe('component: Garage', render);

  return render();
};

export default Garage;
