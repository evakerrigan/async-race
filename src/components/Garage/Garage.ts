import './Garage.scss';
import Foundation from '../../core/libs/Foundation';
import { TypeHTMLElement } from '../../types/types';
import garage from '../../store/garage';
import Car from './Car/Car';

const Garage = (): TypeHTMLElement => {
  const container = Foundation.createElement('div', { className: 'garage' });

  const render = () => {
    const { cars, page } = garage.getState();

    const carsContainer = Foundation.createElement('ul', { className: 'auto-list' });

    cars?.forEach((car) => {
      carsContainer.appendChild(Car(car));
    });

    container.innerHTML = `<h2 class="page-title">Garage</h2>
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

  garage.subscribe('component:Garage', render);

  return render();
};

export default Garage;
